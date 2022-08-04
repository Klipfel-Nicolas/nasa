<template>
    <div id="rover">
      
        
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
    
    name: 'Opportunity',

    data(){
        return {
            name: '',
            launchDate: '',
            landingDate: '',
            endMission: '',
            photos: null,
            camera: null,
            scene: null,
            controls: null,
            renderer: null,
            spirit: null,
            clock: new THREE.Clock(),
        }
    },

    methods: {
        
        init: function() {
            
            /**
             * Loaders
             */
            const gltfLoader = new GLTFLoader();
            /* const textureLoader = new THREE.TextureLoader(); */
            
            /**
             * Base
             */
            
            // Canvas
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

            // AmbientLight
            /* const ambientLight = new THREE.AmbientLight(0xf1f1f1, .4)
            this.scene.add(ambientLight)
 */
             //Directionnal Light
            /* */ const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
            directionalLight.position.set(2.5, 2.5, 0)
            this.scene.add(directionalLight) 
            
            /**
             * Debug
             */
            /* const axesHelper = new THREE.AxesHelper( 5 );
            this.scene.add( axesHelper ); */
            const gui = new dat.GUI()
            const debugObject = {}

            debugObject.envMapIntensity = 5
            gui.add(debugObject, 'envMapIntensity').min(0).max(10).step(0.001).onChange()

            //Texture 
            /* const bakedTexture = textureLoader.load('/3DObjects/backedPerseverance/backedBody03.jpg');
            console.log(bakedTexture)
            bakedTexture.flipY = false
            bakedTexture.encoding = THREE.sRGBEncoding */
            
            /**
             * Materials
             */
            //baked material
            /* const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture }); */

            /**
             * Models
             */
            gltfLoader.setPath( './3DObjects/newRover/' ).load( 'rover.glb', (object) => {

                /* object.scene.traverse((child) => {
                    child.material = bakedMaterial 
                    console.log(child.name)
                    if(child.name === 'Body'){
                        console.log(child)
                        child.material = bakedMaterial
                    }
                    
                }) */
                
                this.spirit = object.scene
                this.scene.add( this.spirit );
                
                this.spirit.rotation.y = Math.PI / 1.2

                
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
                    
                })

            gui.add(this.renderer, 'toneMappingExposure').min(0).max(10).step(.001)

            /**
             * Orbit Controls
             */
            this.controls = new OrbitControls( this.camera, this.renderer.domElement);
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
            })

        },

        animate: function(){

            requestAnimationFrame( this.animate );
            this.controls.update()
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
    background: #000000;  
   /*  background: -webkit-linear-gradient(to right, #434343, #000000); 
    background: linear-gradient(to right, #434343, #000000);  */
   /*  background: #f1f1f1;*/
    }
</style>

