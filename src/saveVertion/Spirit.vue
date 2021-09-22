<template>
    <div id="rover">
        <h1>Spirit</h1>
        
        <div id="spiritContainer">

        </div>

        
    </div>
</template>

<script>

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
  
export default {
    
    name: 'Spirit',

    data(){
        return {
            name: '',
            launchDate: '',
            landingDate: '',
            endMission: '',
            photos: null,
            camera: null,
            scene: null,
            renderer: null,
            spirit: null,
            raycaster: null,
            currentIntersect: null,
            mouse: null,
            clock: new THREE.Clock(),
            moduleArray: []
        }
    },

    methods: {
        
        init: function() {
            
            /**
             * Loaders
             */
            let gltfLoader = new GLTFLoader();

            /**
             * Debug
             */
            const gui = new dat.GUI()
            const debugObject = {}
            
            /**
             * Base
             */
            
            // Canvas
            const container = document.getElementById('spiritContainer');
            
            // Camera
            this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 200 );
            this.camera.position.set( -10, 0, 0);
            
            // Scene
            this.scene = new THREE.Scene();

            
            /**
             * Raycaster
             */
            this.raycaster = new THREE.Raycaster();

            /**
             * Mouse
             */
            this.mouse = new THREE.Vector2();

            // Debug
            /* const axesHelper = new THREE.AxesHelper( 5 );
            this.scene.add( axesHelper );*/
            const gui = new dat.GUI() 

            // LIGHTS
            const ambientLight = new THREE.AmbientLight(0xf1f1f1, .6)
            this.scene.add(ambientLight)


            //Directionnal Light
            const directionalLight = new THREE.DirectionalLight(0xffffff, .8)
            directionalLight.position.set(0, 3, 0)
            this.scene.add(directionalLight)

            gui.add(directionalLight, 'intensity').min(0).max(1).step(0.001)
            gui.add(directionalLight.position, 'x').min(- 15).max(15).step(0.001)
            gui.add(directionalLight.position, 'y').min(- 15).max(15).step(0.001)
            gui.add(directionalLight.position, 'z').min(- 15).max(15).step(0.001)
    

            /**
             * RENDERER
             */
            this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.setSize( window.innerWidth, window.innerHeight);
            container.appendChild( this.renderer.domElement );
            this.renderer.shadowMap.enabled = false
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
            this.renderer.outputEncoding = THREE.sRGBEncoding


            gltfLoader.setPath( './3DObjects/mars-perseverance-rover/source/' ).load( 'Perseverance.glb', (object) => {
                this.spirit = object.scene
                this.scene.add( this.spirit );

                this.spirit.children.forEach(element => {
                    if(element.type == "Group"){
                        this.moduleArray.push(element)
                    }
                });

                // LISTENER MOVE
                /* window.addEventListener('mousemove', (e) => {
  
                    this.mouse.x = e.clientX / window.innerWidth * 2 -1
                    this.mouse.y = -(e.clientY / window.innerHeight * 2 - 1)
                    
                    this.raycaster.setFromCamera(this.mouse, this.camera)
                    
                     let arrayObject = this.scene.children;
                    arrayObject.forEach(element => {
                        console.log(Object.getPrototypeOf(element));
                    }); 
                    console.log(arrayObject); 
                    const modelArray = object.scene.children;

                    for (const object of modelArray) {
                        if(object.type == "Group"){
                            console.log('yes');
                        }
                    }
                    
                    let intersects = this.raycaster.intersectObject(this.scene.children[4], true)

                    if(intersects.length > 0 && intersects[0].object){
                    console.log(intersects[0].object.parent.name); 
                    }
                });  */
                
            })


            // LISTENER MOVE
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX / window.innerWidth * 2 -1
                this.mouse.y = -(e.clientY / window.innerHeight * 2 - 1)
            })
            
            
            const controls = new OrbitControls( this.camera, this.renderer.domElement );
            controls.minDistance = 3;
            controls.maxDistance = 20;

        },

        animate: function(){
            

            /* const elapsed = this.clock.getElapsedTime(); */
            
            /**
             * raycaster
             */
            if(this.spirit) {
                this.raycaster.setFromCamera(this.mouse, this.camera)

                
                const intersects = this.raycaster.intersectObjects(this.moduleArray)

                 for (const intersect of intersects) {
                    console.log(intersect);
                }
            }
            
            requestAnimationFrame( this.animate );

            this.renderer.render( this.scene, this.camera );
        }, 
    },

    mounted() {
        this.init();
        this.animate();
    },

    async created() {

    }
}
</script>

<style lang="css" scoped>
    #rover{
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>