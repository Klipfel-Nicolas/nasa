<template>
    <div id="homeContainer">

    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {  BufferGeometry } from 'three'
import Stats from 'stats.js';

export default {
    name: 'HomeThree',
    
    data() {
        return {
            canvas: null,
            camera: null,
            scene: null,
            renderer: null,
            labelRenderer: null,
            satelite1: null,
            satelite2: null,
            satelite3: null,
            rover: null,
            mars: null,
            clock: new THREE.Clock(),
            loadingManager: new THREE.LoadingManager(),
            textureLoader: new THREE.TextureLoader(this.loadingManager),
            stats: new Stats(),
        }
    },

    methods: {

        init: function() {

            /**
             * Loaders
             */
             const gltfLoader = new GLTFLoader();
             /* const textureLoader = new THREE.TextureLoader() */

            /**
             * Base / camera / scene / light
             */
            this.canvas = document.getElementById('homeContainer');

            this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 200 );
            this.camera.position.set( 15, 5, -10 );

            this.scene = new THREE.Scene();
            
            /* this.scene.background = textureLoader.load("/textures/spaceTexture1.jpeg"); */
 
            /**
             * Debug
             */
            this.stats.showPanel(0);
            this.canvas.appendChild( this.stats.dom );

            /**
             * Light
             */
            // AmbientLight
            const ambientLight = new THREE.AmbientLight(0xffffff, .4)

            // Direction Light
            const directionalLight = new THREE.DirectionalLight(0xf1f1f1, 1.6)
            directionalLight.position.set(3.5, .5, 1.5)

            this.scene.add(ambientLight, directionalLight)

            /**
             * Stars (particules)
             */  
            //  Geometry
            const starsGeometry = new BufferGeometry()
            const countStars = 10000
            const positions = new Float32Array(countStars * 3)
            const starTextures = this.textureLoader.load('./textures/4.png')

            for (let i = 0; i < countStars * 3; i++) {
                positions[i] = (Math.random() - .5) * 100
                
            }

            starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

            //  Material
            const starsMaterial = new THREE.PointsMaterial({
                size: .3,
                sizeAttenuation: true,
                alphaMap: starTextures,
                transparent: true
            })

            //Points
            const stars = new THREE.Points(starsGeometry, starsMaterial)
            this.scene.add(stars)

            /**
             * Mars Planet
             */
            const marsGroup = new THREE.Group()
            this.scene.add(marsGroup);

            const marsGeometry = new THREE.SphereGeometry( 2, 60, 60 );
            const marsMaterial = new THREE.MeshStandardMaterial( {
                map: this.textureLoader.load( './textures/mars_color.jpg' ),
                displacementMap: this.textureLoader.load( './textures/mars_height.jpg' ),
                displacementScale: .3,
                normalMap: this.textureLoader.load( './textures/marsnormal2k.jpeg' ),
            } );
            this.mars = new THREE.Mesh( marsGeometry, marsMaterial );
            marsGroup.add( this.mars );

            /**
             * Sattelites 
             */
            // satellite 1
              gltfLoader.setPath( './3DObjects/sat2/' ).load( 'sat2.gltf', (object) => {
                this.satelite1 = object.scene;
                this.satelite1.scale.multiplyScalar(.009);
                this.scene.add( this.satelite1 );
            }) 
            
            // satellite 2
             gltfLoader.setPath( './3DObjects/satellite/' ).load( 'scene.gltf', (object) => {
                this.satelite2 = object.scene
                this.satelite2.rotation.x = - Math.PI * .5
                this.satelite2.scale.multiplyScalar(1.5);
                this.scene.add( this.satelite2 );
            }) 

            // satellite 3
            gltfLoader.setPath( './3DObjects/sat3/' ).load( 'scene.gltf', ( object ) => {
                this.satelite3 = object.scene
                this.satelite3.scale.multiplyScalar(.1)
                this.scene.add( this.satelite3 );
            })   

            // rover 1
            gltfLoader.setPath( './3DObjects/mars-perseverance-rover/source/' ).load( 'Perseverance.glb', ( object ) => {
                this.rover = object.scene
                this.rover.scale.multiplyScalar(.28);
                    
                this.mars.add( this.rover);
                this.rover.position.set(0, 1.2, 1.56);
                this.rover.rotation.y = -3
                this.rover.rotation.x = .93

            })

            /**
             * RENDERER
             */
            this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            this.renderer.setSize( window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.canvas.appendChild( this.renderer.domElement );

            this.labelRenderer = new CSS2DRenderer();
            this.labelRenderer.setSize( window.innerWidth ,window.innerHeight);
            this.labelRenderer.domElement.classList.add('sky');
            this.labelRenderer.domElement.style.position = 'absolute';
            this.labelRenderer.domElement.style.top = '0px';
            this.canvas.appendChild( this.labelRenderer.domElement );

            /**
             * Orbits Controls
             */
            const controls = new OrbitControls( this.camera, this.labelRenderer.domElement );
            controls.minDistance = 5;
            controls.maxDistance = 25; 

            window.addEventListener( 'resize', this.onWindowResize );
            
        },

        onWindowResize: function() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize( window.innerWidth ,window.innerHeight );
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.labelRenderer.setSize( window.innerWidth, window.innerHeight );
        },

        animate: function(){
            this.stats.begin();

            requestAnimationFrame( this.animate );

            const elapsed = this.clock.getElapsedTime();
            this.mars.rotation.y +=  0.003;
            
            if(this.satelite1){
                this.satelite1.position.set( Math.sin( elapsed/4 ) * 7, 0, Math.cos( elapsed/4 ) * 7 );
                this.satelite1.rotation.y = (elapsed * .25)
            }       
            
            if(this.satelite2){
                this.satelite2.position.set( Math.sin( elapsed/-5 ) * 7, 5, Math.cos( elapsed/-5 ) * 7 );
                this.satelite2.rotation.z = -(elapsed * .2)
            }
            
            if(this.satelite3){
               this.satelite3.position.set( 2, Math.sin( elapsed/-8 ) * 10,  Math.cos( elapsed/-8 ) * 10 ); 
            }

            this.renderer.render( this.scene, this.camera );
            this.labelRenderer.render( this.scene, this.camera );

            this.stats.end();
        },

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

<style scoped>
    #homeContainer{
        background: url('/textures/spaceTexture1.jpeg');
        z-index: -1;
    }
</style>
