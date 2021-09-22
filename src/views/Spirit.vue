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
                    }

                    if(child instanceof THREE.Group){
                        console.log(child);
                        let name = document.createElement('div');
                        name.textContent = child.name;
                        
                    }
                })
            }

            debugObject.envMapIntensity = 5
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
                modelFolder.add(this.spirit.position, 'x', -3, -3, .3).name('x')
                modelFolder.add(this.spirit.position, 'z', -5, 5, .03).name('z')
                modelFolder.add(this.spirit.position, 'y', -5, 5, .03).name('z')
                modelFolder.add(this.spirit.rotation, 'y', -3, 3, .03).name('rotation-y')

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
            const directionalLight = new THREE.DirectionalLight(0xffffff, 4.5)
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
            const pointLight = new THREE.PointLight(0xffffff, 3.6)
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