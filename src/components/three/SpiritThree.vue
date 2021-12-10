<template>
    <div id="spiritThree"> 
        
    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import Stats from 'stats.js';
  
export default {
     name: 'SpiritThree',

     data(){
        return {
            canvas: null,
            camera: null,
            scene: null,
            controls: null,
            renderer: null,
            spirit: null,
            stats: new Stats(),
            wireframeSpirit: null,
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
            this.canvas = document.getElementById('spiritThree');

            // Camera
            this.camera = new THREE.PerspectiveCamera( 45, 750 / 750, 1, 200 ); 
            this.camera.position.set( 0, 0.5, -1);

            // Scene
            this.scene = new THREE.Scene();

            //Stats
            this.stats.showPanel(0);
            this.canvas.appendChild( this.stats.dom );

            /**
             * Normal Model
             */
            gltfLoader.setPath( './3DObjects/spirit/' ).load( 'spirit.glb', (object) => {            
                this.spirit = object.scene
                /* this.scene.add( this.spirit ); */

                //model positions
                this.spirit.rotation.y = Math.PI / 3.5;
                this.spirit.position.y = -.5
                this.spirit.matrixAutoUpdate = false //perf
                this.spirit.updateMatrix()

            })

            /**
             * Wireframe Model
             */
            gltfLoader.setPath( './3DObjects/spirit/' ).load( 'spirit.glb', (object) => {
                 this.wireframeSpirit = object.scene
                 this.scene.add( this.wireframeSpirit );

                 /* const wireframeMaterial = new THREE.MeshBasicMaterial({color: 0xf1f1f1, wireframe: true}); */
                 const wireframeMaterial = new THREE.MeshStandardMaterial({
                    wireframe: true,
                    flatShading: true,
                    color: 0xf1f1f1,
                    metalness: .5,
                    roughness: .9
                })

                 this.wireframeSpirit.traverse(child =>{
                    if(!child.name.includes('Floor') && child.material instanceof THREE.MeshStandardMaterial){
                            child.material = wireframeMaterial;
                    }
                })

                this.wireframeSpirit.rotation.y = Math.PI / 3.5;
                this.wireframeSpirit.position.y = -.5
                this.wireframeSpirit.matrixAutoUpdate = false //perf
                this.wireframeSpirit.updateMatrix()
             })
        
            /**
             * Light
             * AmbientLight
             */ 
            const ambientLight = new THREE.AmbientLight(0xf1f1f1, .2)
            this.scene.add(ambientLight)

            //Directionnal Light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
            directionalLight.position.set(-1, 6, -7.5)

            this.scene.add(directionalLight)

            /**
             * RENDERER
             */
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            this.renderer.physicallyCorrectLights = true
            this.canvas.appendChild( this.renderer.domElement );
            this.renderer.setSize( 750, 750);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.outputEncoding = THREE.sRGBEncoding
            this.renderer.toneMapping = THREE.ACESFilmicToneMapping //Cineon Reinhard ...
            this.renderer.toneMappingExposure = 2.3

            this.canvas.appendChild( this.renderer.domElement);

            /**
             * Orbit Controls
             */
            this.controls = new OrbitControls( this.camera,this.renderer.domElement); 
            this.controls.enableDamping = true
            this.controls.zoomSpeed = 1.5;
            this.controls.panSpeed = 2

            //near / far
            this.controls.minDistance = 3.2;
            this.controls.maxDistance = 15;
  
            /**
             * Resizes
             */
            window.addEventListener('resize', this.onWindowResize )
        },

        onWindowResize: function(){

                // Update camera
                this.camera.aspect = 600 / 600
                this.camera.updateProjectionMatrix()

                // Update renderer
                this.renderer.setSize(600, 600)
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        },

        animate: function(){
            this.stats.begin();

            requestAnimationFrame( this.animate );
            this.controls.update()
            this.renderer.render( this.scene, this.camera );
            
            this.stats.end();    
        },
    },

    mounted() {
        this.init();
        this.animate();
    },
}
</script>

<style lang="scss" scoped>
#spiritThree{
    width: 700px;
    height: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}
</style>