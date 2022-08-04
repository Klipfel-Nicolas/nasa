<template>
    <div id="perseverance">
        
    </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as dat from 'dat.gui';

export default({
    
    name : 'Perseverance',

    data(){
        return{
            camera: null,
            scene: null,
            renderer: null,
            controls: null,
            clock: null
        }
    },

    methods: {
        init: function() {

            /**
             * Base scene/ size / canvas 
             */
            const canvas = document.getElementById('perseverance');
            this.scene = new THREE.Scene()
            
            /**
             * debug
             */
            const axesHelper = new THREE.AxesHelper( 5 );
            this.scene.add( axesHelper );
            const gui = new dat.GUI()

            /**
             * Sizes
             */
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            /**
             * Light
             */ 
            const ambientLight = new THREE.AmbientLight(0xffffff, .4) 
            this.scene.add(ambientLight)
            
            const pointLight = new THREE.PointLight(0xffffff, .6)
            pointLight.position.x = 2
            pointLight.position.y = 3
            pointLight.position.z = 10

            const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x0000ff, .5)
            
            const directionalLight = new THREE.DirectionalLight(0xf1f1f1, 6)
            directionalLight.position.set(1, .2, 0)


            this.scene.add( pointLight, hemisphereLight, directionalLight)
       

            // Debug light
            const lightFolder = gui.addFolder('Light');
            lightFolder.add(pointLight.position, 'x', -3, 3, .3).name('Light X')
            lightFolder.add(pointLight.position, 'y', -3, 3, .3).name('Light Y')
            lightFolder.add(pointLight.position, 'z', -10, 10, .3).name('Light Z')
            lightFolder.add(pointLight, 'intensity', .5, 13, .3).name('Light intensity')
            
            let directionLightFolder = gui.addFolder('directional')
            directionLightFolder.add(directionalLight, 'intensity', 0, 10, .01);
            directionLightFolder.add(directionalLight.position, 'x', -10, 10, .01);
            directionLightFolder.add(directionalLight.position, 'y', -10, 10, .01);
            directionLightFolder.add(directionalLight.position, 'z', -10, 10, .01);
            
            /**
             * Camera
             */
            this.camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
            this.camera.position.z = 10
            this.scene.add(this.camera)

            /**
             * Objet
             */
            let gltfLoader = new GLTFLoader();
            let model;

            gltfLoader.setPath( './3DObjects/perseverance_-_nasa_mars_landing_2021/' ).load('scene.gltf', (object) => {
                model = object.scene

                model.traverse( function ( child ) {
                    if ( child.isMesh ) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                //Debug model
                const modelFolder = gui.addFolder('Model');
                modelFolder.add(model.position, 'x', -3, -3, .3).name('lateral')
                modelFolder.add(model.position, 'z', -5, 5, .03).name('far')
                modelFolder.add(model.rotation, 'y', -3, 3, .03).name('rotation')

                model.rotation.y = .5
                this.scene.add( model );
            });


            /**
             * Renderer
             */
            this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            this.renderer.setSize(sizes.width, sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            this.renderer.physicallyCorrectLights = true
            this.renderer.outputEncoding = THREE.sRGBEncoding;
            canvas.appendChild( this.renderer.domElement );

            /**
             * Controls
             */ 
            this.controls = new OrbitControls(this.camera, canvas)
            this.controls.enableDamping = true

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

})
</script>

<style lang="css">
    #perseverance{
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>