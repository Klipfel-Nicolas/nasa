<template>
    <div id="rover">
           
        <div class="htmlContainer">
            <!-- Left Column -->
            <div class="leftColumn">
                <div
                    @click="toggleDysplay"
                    class="button"
                >
                    ON/OFF
                </div>

                <ul>
                    <li 
                        v-for="(element, index) in elements"
                        :key="index"
                        class="perserveranceElement list"
                        @click="onListClick(element)"
                    >
                        {{element.name}}
                    </li>
                </ul>
            </div>

             <!-- center Column -->
            <div class="centerColumn">
                <p class="elementDescription">
                    {{description}}
                </p>
            </div>

             <!-- Right Column -->
            <div class="centerColumn">

            </div>

            
        </div>
           
        <div id="spiritContainer"></div> 
    </div>
</template>

<script>

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { elementsPerseverance } from '../assets/js/perseveranceDatas'
import { gsap } from "gsap";
import * as dat from 'dat.gui';

  
export default {
    
    name: 'Spirit',

    data(){
        return {
            name: '',
            launchDate: '',
            landingDate: '',
            endMission: '',
            elements: elementsPerseverance,
            photos: null,
            camera: null,
            scene: null,
            controls: null,
            raycaster: new THREE.Raycaster(),
            mouse: new THREE.Vector2(),
            renderer: null,
            spirit: null,
            clock: new THREE.Clock(),
            css3Renderer: null,
            description: '',
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
            const canvas = document.getElementById('spiritContainer');

            // Sizes
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            
            // Camera
            this.camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 1, 200 ); 
            this.camera.position.set( 0, 4, -10);
            
            // Scene
            this.scene = new THREE.Scene();
            this.scene.fog = new THREE.Fog( '#000000', 10, 15 );

            /**
             * Debug
             */
            /* const axesHelper = new THREE.AxesHelper( 5 );
            this.scene.add( axesHelper ); */
            const gui = new dat.GUI()
            const debugObject = {}
            

            /**
             * Update all materials
             */
            const updateAllMaterials = () => {
                this.scene.traverse((child) =>{
                    if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
                        
                        child.material.envMapIntensity = debugObject.envMapIntensity
                        child.material.needsUpdate = true
                
                        child.castShadow = true
                        child.receiveShadow = true
                        if(child.name.includes('arm')){
                            console.log(child);
                        }
                        
                    }
                })
            }


            /**
             * Environment map
             */
            const cubeTextureLoader = new THREE.CubeTextureLoader()
            const environmentMap = cubeTextureLoader.load([
                '/textures/environmentMaps/1/px.jpg',
                '/textures/environmentMaps/1/nx.jpg',
                '/textures/environmentMaps/1/py.jpg',
                '/textures/environmentMaps/1/ny.jpg',
                '/textures/environmentMaps/1/pz.jpg',
                '/textures/environmentMaps/1/nz.jpg'
            ])
            environmentMap.encoding = THREE.sRGBEncoding
            this.scene.environment = environmentMap
            debugObject.envMapIntensity = .7
            gui.add(debugObject, 'envMapIntensity').min(0).max(10).step(0.001).onChange(updateAllMaterials)

            /**
             * Models
             */
            gltfLoader.setPath( './3DObjects/mars-perseverance-rover/source/' ).load( 'Perseverance.glb', (object) => {
                
                this.spirit = object.scene
                this.scene.add( this.spirit );
                
                this.spirit.rotation.y = Math.PI / 1.2

                //Debug model
                const modelFolder = gui.addFolder('Model');
                modelFolder.add(this.spirit.position, 'x', -3, 3, .3).name('x')
                modelFolder.add(this.spirit.position, 'z', -5, 5, .03).name('z')
                modelFolder.add(this.spirit.position, 'y', -5, 5, .03).name('z')
                modelFolder.add(this.spirit.rotation, 'y', -3, 3, .03).name('rotation-y')

                //Materials Update
                this.spirit.traverse(child =>{
                    if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial && child.name.includes('E-HORIZONTAL_SWINGARM') ){
                        child.material.roughness = 0;
                        child.material.metalness = .8;
                    }
                })
                   
                   
                //Elements number 
                for (let i = 0; i < elementsPerseverance.length; i++) {
                    let element = document.createElement('div');
                    element.className = 'perserveranceElement';
                    
                    let number = document.createElement('div');
                    number.className = 'elementNumber';
                    number.textContent = i+1;

                    let name = document.createElement('div');
                    name.className = 'elementName';
                    name.textContent = elementsPerseverance[i].name;

                    element.appendChild(number);
                    element.appendChild(name);
                    const marker = new CSS2DObject(element);
                    marker.position.x = elementsPerseverance[i].positions.x;
                    marker.position.y = elementsPerseverance[i].positions.y;
                    marker.position.z = elementsPerseverance[i].positions.z;
                    this.spirit.add(marker);

                }

                updateAllMaterials()
            })
             
            
            /**
             * Floor
             */
            const floor = new THREE.Mesh(
                new THREE.PlaneGeometry(30, 30),
                new THREE.MeshStandardMaterial({
                    color: '#060606',
                    metalness: 0.9,
                    roughness: 1,
                })
            )
            floor.receiveShadow = true
            floor.rotation.x = - Math.PI * 0.5
            this.scene.add(floor)

            /**
             * Light
             */

            // AmbientLight
            const ambientLight = new THREE.AmbientLight(0xf1f1f1, .2)
            this.scene.add(ambientLight)

            const lightFolder = gui.addFolder('Light');
            lightFolder.add(ambientLight, 'intensity').min(0).max(5).step(0.001).name('Ambient-Intensity')

            //Directionnal Light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 3.1)
            directionalLight.position.set(2.5, 2.5, 0)
            directionalLight.castShadow = true
            directionalLight.shadow.mapSize.set(1024 * 2, 1024 * 2 )
            directionalLight.shadow.camera.far = 5
            directionalLight.shadow.camera.left = - 3
            directionalLight.shadow.camera.top = 3
            directionalLight.shadow.camera.right = 3
            directionalLight.shadow.camera.bottom = - 3
            directionalLight.shadow.normalBias = .02
            this.scene.add(directionalLight)

            /* const helper = new THREE.DirectionalLightHelper( directionalLight);
            this.scene.add(helper)  */
            lightFolder.add(directionalLight, 'intensity').min(0).max(5).step(0.001).name('direction-intensity')
            lightFolder.add(directionalLight.position, 'x').min(- 5).max(5).step(0.001).name('direction-X')
            lightFolder.add(directionalLight.position, 'y').min(- 5).max(5).step(0.001).name('direction-Y')
            lightFolder.add(directionalLight.position, 'z').min(- 5).max(5).step(0.001).name('direction-Z')

            // Point Light
            const pointLight = new THREE.PointLight(0xffffff, .9)
            pointLight.position.x = -2
            pointLight.position.y = 1
            pointLight.position.z = -1.3

            this.scene.add(pointLight)
            
            /* const pointhelper = new THREE.PointLightHelper( pointLight);
            this.scene.add(pointhelper) */
            lightFolder.add(pointLight, 'intensity').min(0).max(5).step(0.001).name('point-intensity')
            lightFolder.add(pointLight.position, 'x').min(- 5).max(5).step(0.001).name('point-X')
            lightFolder.add(pointLight.position, 'y').min(- 5).max(5).step(0.001).name('point-Y')
            lightFolder.add(pointLight.position, 'z').min(- 5).max(5).step(0.001).name('point-Z')
    
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
            this.renderer.toneMapping = THREE.ACESFilmicToneMapping
            this.renderer.toneMappingExposure = 3
            this.renderer.shadowMap.enabled = true
            this.renderer.shadowMap.type = THREE.PCFShadowMap

            this.css3Renderer = new CSS2DRenderer();
            this.css3Renderer.setSize( sizes.width, sizes.height);
            this.css3Renderer.domElement.style.position = 'absolute';
            this.css3Renderer.domElement.style.top = '0px';
            canvas.appendChild( this.css3Renderer.domElement);

            //Debug
            gui
                .add(this.renderer, 'toneMapping', {
                    No: THREE.NoToneMapping,
                    Linear: THREE.LinearToneMapping,
                    Reinhard: THREE.ReinhardToneMapping,
                    Cineon: THREE.CineonToneMapping,
                    ACESFilmic: THREE.ACESFilmicToneMapping
                })
                .onFinishChange(() =>{
                    this.renderer.toneMapping = Number(this.renderer.toneMapping)
                    updateAllMaterials()
                })

            gui.add(this.renderer, 'toneMappingExposure').min(0).max(10).step(.001)

            /**
             * Orbit Controls
             */
            this.controls = new OrbitControls( this.camera, this.css3Renderer.domElement);
            this.controls.enableDamping = true
            this.controls.zoomSpeed = 2;
            this.controls.minDistance = 3;
            this.controls.maxDistance = 15;

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

                this.css3Renderer.setSize( window.innerWidth, window.innerHeight );
            })

        },

        animate: function(){
            requestAnimationFrame( this.animate );
            this.controls.update()
            this.renderer.render( this.scene, this.camera );
            this.css3Renderer.render( this.scene, this.camera );
            
        },

        toggleDysplay(){
            document.querySelectorAll('.perserveranceElement').forEach(element => {
                element.classList.toggle('display');
            })
        },

        onListClick(element){
            this.description = element.description;
            /* console.log(this.controls.object); */
            gsap.to( this.camera, {
                duration: 2,
                zoom: 2,
                onUpdate:this.camera.updateProjectionMatrix()
            } );

            /* gsap.to( this.controls.target, {
                duration: 2,
                x: 3.1012971484460357,
                y:0.70160311460495,
                z:-1.392815717858431,
                onUpdate: this.controls.update()
            }) */
        } 
    },

    mounted() {
        this.init();
        this.animate();
    },

    created() {
        
    }
}
</script>

<style lang="css" scoped>
    #rover{
    background: #000000;  
    }
    .htmlContainer{
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
    }
    .leftColumn{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .button {
        z-index: 100;
        position: relative;
        cursor: pointer;
        color: #f1f1f1;
    }
    .perserveranceElement.list{
        color: rgb(246, 141, 67);
        z-index: 100;
        position: relative;
        cursor: pointer;
    }
    /* CENTER */
    .centerColumn{
        display: flex;
        align-items: flex-end;
    }
    .elementDescription{
        margin-bottom: 50px;
        color: #f1f1f1;
        border: 1px solid #f1f1f1;
        background: rgba(0, 0, 0, .5);
    }
</style>