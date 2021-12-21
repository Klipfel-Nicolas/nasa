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

     props: {
         material: {
             type: String,
             required: true,
             default: 'wireframe'
         }
     },

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
            wireframeMaterial: new THREE.MeshStandardMaterial({
                    wireframe: true,
                    flatShading: false,
                    color: 0xf1f1f1,
                    metalness: .1,
                    roughness: .9
            }),
            
            otherMaterial:  new THREE.MeshStandardMaterial({
                    wireframe: true,
                    flatShading: true,
                    color: 0xf1f1f1,
                    metalness: .5,
                    roughness: .9
            }),
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
                 this.wireframeSpirit = object.scene;
                 this.scene.add( this.wireframeSpirit );

                 this.wireframeSpirit.traverse(child =>{
                    if(child.material instanceof THREE.MeshStandardMaterial){
                        switch (this.material) {
                            case "wireframe":
                                child.material = this.wireframeMaterial;
                                break;
                            case "solid":
                                child.material = this.solidMaterial;
                                break;
                            case "other":
                                child.material = this.otherMaterial;
                                break;
                            default:
                                child.material = this.wireframeMaterial;
                                break;
                        } 
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
            const directionalLight1 = new THREE.DirectionalLight(0xffffff, 6)
            directionalLight1.position.set(0, 2, 4)
            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2)
            directionalLight2.position.set(0, 2, -4)
            const directionalLight3 = new THREE.DirectionalLight(0xffffff, 2)
            directionalLight3.position.set(0, -4, 0)

            this.scene.add(directionalLight1, directionalLight2, directionalLight3)

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
        changeMaterials(){
            if(this.material !== "solid"){    
                 if(!this.wireframeSpirit.parent){
                     this.scene.remove(this.spirit);
                     this.scene.add(this.wireframeSpirit);
                 }  
                 this.wireframeSpirit.traverse(child =>{
                    if(child.material instanceof THREE.MeshStandardMaterial){
                        switch (this.material) {
                            case "wireframe":
                                child.material = this.wireframeMaterial;
                                break;
                            case "other":
                                child.material = this.otherMaterial;
                                break;
                            default:
                                child.material = this.wireframeMaterial;
                                break;
                        }       
                    }
                })
             } else {
                 this.scene.remove(this.wireframeSpirit);
                 this.scene.add(this.spirit);
             }
        }
    },

    watch: {
         material() {
             this.changeMaterials()
         }
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
    cursor: grab;
}
</style>