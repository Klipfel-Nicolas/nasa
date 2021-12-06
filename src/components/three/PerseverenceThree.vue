<template>
    <div id="perseverenceThree">

        <ul 
            class='elementsRover'
            :class="listDisplay ? 'visible' : ''"
        >
            <li
                v-for="(point, index) in elementsPerseverance" :key="index"
                class='point'
                :class="currentElement && currentElement.name === point.name ? 'active' : '' "
                :id="'point-'+index"
            >
                <div 
                    class="label"
                    @click="onListClick(point)"
                >
                    {{index + 1}}
                </div>
                <div class="text">{{point.name}}</div>
            </li>
        </ul>
           
        <div id="perseveranceContainer"></div> 
    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'

import Stats from 'stats.js';
  
export default {
     name: 'PerseverenceThree',

     props: {
        elementsPerseverance: {
            type: Array,
            required: true,
            default() {
                return []
            },
        },
        currentElement: {
            type: Object,
            required: false,
            default(){
                return {}
            }
        },
        oldCurrentElement: {
            type: Object,
            required: false,
            default(){
                return {}
            }
        },
        wireframe: {
            type: Boolean,
            required: true,
            default: false,
        },
        listDisplay: {
            type: Boolean,
            required: true,
            default: false,
        }
     },

    data(){
        return {
            camera: null,
            scene: null,
            controls: null,
            renderer: null,
            spirit: null,
            css2Renderer: null,
            stats: new Stats(),
            points: [],
            wireframeSpirit: null,
            elementSubArray: null,
        }
    },

    methods: {
        init: function() {
            /**
             * Loaders
             */
            const gltfLoader = new GLTFLoader();

            /**
             * Base
             */
            const canvas = document.getElementById('perseveranceContainer');

            // Sizes
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            // Camera
            this.camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 1, 200 ); 
            this.camera.position.set( 0, 4, -15);

            // Scene
            this.scene = new THREE.Scene();
            this.scene.fog = new THREE.Fog( '#000000', 10, 15 );

            //Stats
            this.stats.showPanel(0);
            canvas.appendChild( this.stats.dom );

            /**
             * Normal Model
             */
            gltfLoader.setPath( './3DObjects/finalRover/' ).load( 'roverNamed.glb', (object) => {            
                this.spirit = object.scene
                this.scene.add( this.spirit );

                //suspension ans wheels
                this.spirit.traverse(child =>{
                    if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial && child.name.includes('E-HORIZONTAL_SWINGARM') ){
                        child.material.roughness = 0;
                        child.material.metalness = .8;
                    }
                }) 
                //model positions
                this.spirit.rotation.y = Math.PI / 1.2;
                this.spirit.matrixAutoUpdate = false //perf
                this.spirit.updateMatrix()

            })

            /**
             * Wireframe Model
             */
            gltfLoader.setPath( './3DObjects/finalRover/' ).load( 'roverNamed.glb', (object) => {
                 this.wireframeSpirit = object.scene

                 const wireframeMaterial = new THREE.MeshBasicMaterial({color: 0xf1f1f1, wireframe: true});

                 this.wireframeSpirit.traverse(child =>{
                    if(!child.name.includes('Floor') && child.material instanceof THREE.MeshStandardMaterial){
                            child.material = wireframeMaterial;
                    }
                })

                this.wireframeSpirit.rotation.y = Math.PI / 1.2;
                this.wireframeSpirit.matrixAutoUpdate = false //perf
                this.wireframeSpirit.updateMatrix()
             })
        
            /**
             * Points elements
             */
            for (let i = 0; i < this.elementsPerseverance.length; i++) {
                this.points.push({
                    position: new THREE.Vector3(this.elementsPerseverance[i].positions.x, this.elementsPerseverance[i].positions.y, this.elementsPerseverance[i].positions.z),
                    element: document.querySelector(`#point-${i}`),
                })  
            }

            /**
             * Light
             * AmbientLight
             */ 
            const ambientLight = new THREE.AmbientLight(0xf1f1f1, .2)
            this.scene.add(ambientLight)

            //Directionnal Light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 2.3)
            directionalLight.position.set(2.5, 2.5, 0)
            this.scene.add(directionalLight)

            /**
             * RENDERER
             */
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            this.renderer.physicallyCorrectLights = true
            canvas.appendChild( this.renderer.domElement );
            this.renderer.setSize( sizes.width, sizes.height);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.outputEncoding = THREE.sRGBEncoding
            this.renderer.toneMapping = THREE.ACESFilmicToneMapping //Cineon Reinhard ...
            this.renderer.toneMappingExposure = 2.3

            this.css2Renderer = new CSS2DRenderer();
            this.css2Renderer.setSize( sizes.width, sizes.height);
            this.css2Renderer.domElement.style.position = 'absolute';
            this.css2Renderer.domElement.style.top = '0px';
            canvas.appendChild( this.css2Renderer.domElement);

            /**
             * Orbit Controls
             */
            this.controls = new OrbitControls( this.camera, this.css2Renderer.domElement);
            this.controls.enableDamping = true
            this.controls.zoomSpeed = 1.5;

            //near / far
            this.controls.minDistance = 3;
            this.controls.maxDistance = 15;
            // Y axis
            this.controls.maxPolarAngle = Math.PI / 2.4;
  
            /**
             * Resizes
             */
            window.addEventListener('resize', () =>
            {
                // Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight

                // Update camera
                this.camera.aspect = sizes.width / sizes.height
                this.camera.updateProjectionMatrix()

                // Update renderer
                this.renderer.setSize(sizes.width, sizes.height)
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

                this.css2Renderer.setSize( window.innerWidth, window.innerHeight );
            })
        },

        animate: function(){
            this.stats.begin();

            requestAnimationFrame( this.animate );
            this.controls.update()
            this.renderer.render( this.scene, this.camera );
            this.css2Renderer.render( this.scene, this.camera );

            /**
             * Points 
             */
            this.points.forEach(point => {
                const screenPosition = point.position.clone()
               
                screenPosition.project(this.camera)
                const translateX = screenPosition.x * window.innerWidth * .5;
                const translateY = screenPosition.y * window.innerHeight * .5;
                point.element.style.transform = `translate(${translateX}px, ${-translateY}px)`
            })  
            
            this.stats.end();    
            
        },

        displayMaterials(name){
            this.findGroup(name, this.spirit)
            this.findGroup(name, this.wireframeSpirit)
        }, 
        
        removeMaterials(name){
            this.findGroup(name, this.wireframeSpirit)
            this.elementSubArray = null
        },

        findGroup(name, object, newEl=this.elementSubArray){
            //If name not in first dimention array, call recursive this function in multiple dimension Array to found element name
            if(object.children.findIndex(child => child.name === name.split(' ').join('_')) == -1 && object.children.length > 0){
                object.children.forEach((child)=>{
                    if(child instanceof THREE.Group){
                        this.findGroup(name, child)    
                    }
                })
            } else {
                //If elementName take his index in the parentArray
                let nameIndex = object.children.findIndex(child => child.name === name.split(' ').join('_'))
                let elementObj = {
                    parent: object,
                    elIndex: object.children.findIndex(child => child.name === name.split(' ').join('_')),
                    element: object.children[nameIndex]
                }
                
                if(newEl){
                    //Replace the object (material) with the old one
                    elementObj.parent.children.splice(elementObj.elIndex, 1, newEl.element)  
                }
                
                /**
                 * first time it's normal object witch is given in the second call when newEl != null at the wireframe object, 
                 * then it become the wireframe Object witch is given at the remove call.
                 * this allows to toggle between wireframe and normal
                */
                this.elementSubArray = elementObj;
            }
            
        },

        onListClick(element) {
            return this.$emit('elementChange', element)
        }
    },

    watch: {
        wireframe() {
            if(this.elementSubArray){ //If an element is select toggle materials before
                this.removeMaterials(this.elementSubArray.element.name);
            }

            if(this.wireframe === true){
                //change normal model with wireframe model
                this.scene.remove(this.spirit);
                this.scene.add(this.wireframeSpirit)
            }else if(this.wireframe === false){
                this.scene.remove(this.wireframeSpirit);
                this.scene.add(this.spirit);
            }
        },

        currentElement() {
            if(this.oldCurrentElement && this.currentElement === null){
                this.removeMaterials(this.oldCurrentElement.name) //toggle between wireframe and normal
            }else{
                if(this.oldCurrentElement){
                  this.removeMaterials(this.oldCurrentElement.name)//toggle material before change element
                }
                this.displayMaterials(this.currentElement.name) // Toggle material in the new element
            }
        }
    },

    mounted() {
        this.init();
        this.animate();
    },

    destroyed() {
        this.renderer.forceContextLoss()
        this.renderer.context = null
        this.renderer.domElement = null
        this.renderer = null
    }
}
</script>

<style lang="scss" scoped>

//Points interest Rover
.point{
    position:absolute;
    top: 50%;
    left: 50%;
    z-index: 2000;

    &:hover{
        .text{
            opacity: 1;
        }
    }
    
    .label{
        position: absolute;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        background: rgba(0, 0, 0, .6);
        border: 1px solid rgba(255, 255, 255, .7);
        color: #ffffff;
        text-align: center;
        cursor: help;
        transform: scale(0, 0);
        transition: transform .3s;
    }

    .text{
        position: absolute;
        top: 30px;
        left: -120px;
        padding: 10px;
        border-radius: 4px;
        background: rgba(0, 0, 0, .6);
        border: 1px solid rgba(255, 255, 255, .7);
        color: #ffffff;
        text-align: center;
        opacity: 0;
        transition: opacity .3s;
        pointer-events: none;
    }
}

.visible .point .label{
    transform: scale(1, 1);
}

.point.active{
    .label{
        color: var(--orangeD);
        border-color: var(--orangeD);
    }
    .text{
        opacity:1;
    }
}

</style>