<template>
    <div id="rover">
           
        <div class="htmlContainer index">
            
            <div class="header">

                <div>
                    <h1>Perseverance</h1>
                    <navigation />  
                </div>
                
            </div>

            <!-- Description -->
            <div class="elementDescription" :class="currentElement ? 'display' : ''">
                <div v-if="currentElement" >
                    <div class="containerInfos">
                        <!-- <img :src="currentElement.image" class="mainImg"/> -->
                        <div class="containerDescription"> 
                            
                            <div class="background"></div>

                            <div class="infos">
                                <div class="title">
                                    <h3 class="name">{{currentElement.name}}</h3> 
                                    <button @click="toggleOpen">more about</button>
                                </div>
                                
                                <p class="shortDescription">{{currentElement.description}}</p>
                                
                                <p v-html="currentElement.more" class="longDescription"></p>
                            </div>
                            
                        </div> 
                    </div>
                </div>
            </div>

            <!-- Image left corner -->
            <div class="size">
                <img src="/images/perseverance.png" alt="rover perseverance">
            </div>
            
            <!-- right Column -->
            <div class="right-column">
                <div class="linkedLink">
                    <!-- <a href="https://www.linkedin.com/in/nicolas-klipfel-7871a21b3/">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="40" height="40" x="0" y="0" viewBox="0 0 378.845 378.845" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
                            <g xmlns="http://www.w3.org/2000/svg">
                                <path d="M134.979,109.125c0.466,1.445,0.846,2.931,1.13,4.415c0.366,1.916,2.043,3.249,3.924,3.249c0.25,0,0.503-0.023,0.757-0.072   c2.17-0.415,3.592-2.511,3.177-4.681c-0.346-1.805-0.808-3.61-1.374-5.366c-0.677-2.102-2.928-3.259-5.034-2.579   C135.455,104.769,134.3,107.023,134.979,109.125z" fill="#ffffff" data-original="#000000" style="" class=""/>
                                <path d="M94.22,78.258c-0.004,2.209,1.784,4.003,3.993,4.007c11.55,0.02,22.862,5.549,30.261,14.792   c0.79,0.986,1.952,1.5,3.126,1.5c0.876,0,1.759-0.287,2.497-0.877c1.725-1.381,2.003-3.898,0.623-5.623   c-8.899-11.117-22.542-17.769-36.493-17.792c-0.003,0-0.005,0-0.007,0C96.014,74.265,94.224,76.051,94.22,78.258z" fill="#ffffff" data-original="#000000" style="" class=""/>
                                <path d="M111.556,213.187H93.583c-2.209,0-4,1.791-4,4s1.791,4,4,4h17.973c2.209,0,4-1.791,4-4S113.765,213.187,111.556,213.187z" fill="#ffffff" data-original="#000000" style="" class=""/>
                                <path d="M377.673,242.862l-12.267-12.268c-7.85-7.85-20.083-8.705-28.89-2.578l-8.015-8.014c1.206,0.16,2.019,0.266,2.062,0.266   c0.869,0,1.72-0.283,2.42-0.814c0.845-0.643,1.399-1.594,1.543-2.645l9.951-72.923c0.299-2.188-1.232-4.205-3.421-4.504   l-17.196-2.352c-11-1.501-21.256,5.228-24.561,15.436l-38.82-5.295c-2.749-0.376-5.492-0.485-8.204-0.351v-17.683   c0-8.423-3.279-16.332-9.226-22.266c-5.931-5.945-13.836-9.22-22.26-9.22c-8.409,0-16.315,3.275-22.262,9.224   c-5.946,5.949-9.218,13.856-9.211,22.262v21.354h-15.472l-15.866-15.867c1.16-4.726,1.788-9.659,1.788-14.738   c0-34.102-27.744-61.846-61.846-61.846c-31.075,0-56.86,23.04-61.195,52.932l-28.49,28.49C2.925,144.772,0,151.833,0,159.344   c0,7.51,2.925,14.571,8.236,19.882l64.601,64.601v6.694c0,24.257,19.734,43.991,43.99,43.991h6.281l3.159,3.157   c15.425,15.425,35.679,23.135,55.94,23.135c20.257,0,40.521-7.714,55.941-23.135l39.558-39.414l42.269,42.305   c0.781,0.781,1.805,1.172,2.828,1.172s2.048-0.391,2.828-1.172l52.042-52.042C379.235,246.957,379.235,244.423,377.673,242.862z    M281.706,250.942v-30.279c6.279-0.85,12.338-3.678,17.152-8.493c1.79-1.789,3.317-3.77,4.588-5.909l17.293,17.292l-33.211,33.211   L281.706,250.942z M235.134,211.779l-17.416-17.416l1.157-8.467c0.005-0.037,0.012-0.072,0.018-0.108   c2.335,1.144,4.816,1.984,7.425,2.497c1.949,0.383,3.905,0.572,5.848,0.572c4.67,0,9.251-1.112,13.443-3.237l7.228,9.51   c-2.208,1.521-4.3,3.246-6.236,5.183L235.134,211.779z M253.726,154.773c0.516,2.757,0.505,5.55-0.04,8.322   c-1.133,5.765-4.443,10.743-9.321,14.019s-10.737,4.458-16.504,3.322c-2.472-0.486-4.788-1.367-6.912-2.618   c2.37-6.185,6.408-11.608,11.811-15.716C238.888,157.443,246.175,154.925,253.726,154.773z M277.706,187.427   c-6.241,0-12.278,1.303-17.818,3.759l-7.664-10.083c4.789-4.312,8.047-10.028,9.312-16.464c0.602-3.062,0.717-6.142,0.368-9.199   l22.125,3.018l-3.954,29.037C279.289,187.452,278.5,187.427,277.706,187.427z M277.706,195.427c7.004,0,13.698,1.996,19.447,5.704   c-1.033,1.977-2.351,3.782-3.951,5.382c-8.576,8.575-22.53,8.576-31.106,0c-1.593-1.593-2.901-3.38-3.924-5.327   C263.941,197.442,270.667,195.427,277.706,195.427z M327.142,211.763l-6.327-0.865l8.876-64.996l6.32,0.864L327.142,211.763z    M301.831,160.885c2.199,0.287,4.205-1.234,4.503-3.423c1.042-7.636,7.845-13.081,15.424-12.591l-8.218,60.17l-4.729-4.729   c-5.826-5.826-13-9.809-20.817-11.674l3.962-29.101L301.831,160.885z M227.919,155.733c-5.158,3.921-9.298,8.825-12.247,14.384   l-18.355-18.355c0,0,0.01-23.253,0.022-23.564h46.913c0.012,0.313,0.023,19.77,0.023,19.77   C238.418,149.37,232.859,151.978,227.919,155.733z M220.79,105.652c6.283,0,12.177,2.439,16.603,6.877   c2.235,2.229,3.963,4.833,5.129,7.669h-43.455c1.164-2.833,2.889-5.435,5.12-7.667C208.621,108.095,214.518,105.652,220.79,105.652   z M192.733,158.491c0,0,19.485,19.443,19.681,19.579c-0.654,2.188-1.15,4.439-1.464,6.745l-0.334,2.447l-28.77-28.77H192.733z    M229.478,217.436l-12.316,12.315l-71.1-71.099c3.758-4.657,6.851-9.867,9.144-15.489L229.478,217.436z M151.768,119.886   c0,1.862-0.095,3.702-0.281,5.516c-13.12,12.749-30.839,18.138-46.117,14.177c-0.293-5.015-2.362-9.694-5.945-13.275   c-3.871-3.872-9.018-6.004-14.492-6.004c-0.878,0-1.744,0.075-2.601,0.183c-7.531-16.336-2.581-37.634,12.607-52.821   c0.562-0.562,1.113-1.085,1.657-1.587c0.442-0.011,0.882-0.034,1.327-0.034C127.612,66.041,151.768,90.196,151.768,119.886z    M84.933,128.3c3.337,0,6.476,1.3,8.836,3.66s3.66,5.499,3.66,8.837s-1.3,6.476-3.66,8.836s-5.499,3.66-8.836,3.66   c-3.338,0-6.477-1.3-8.837-3.661c-2.36-2.359-3.66-5.497-3.66-8.835s1.3-6.477,3.66-8.837S81.595,128.3,84.933,128.3z    M84.094,67.849c-13.183,16.702-16.886,38.038-9.386,55.2c-1.537,0.889-2.979,1.966-4.268,3.256   c-3.872,3.871-6.004,9.019-6.004,14.493s2.133,10.622,6.004,14.492c3.871,3.872,9.018,6.004,14.493,6.004   c5.475,0,10.621-2.132,14.492-6.003c2.219-2.219,3.844-4.865,4.847-7.744c3.673,0.872,7.449,1.306,11.263,1.306   c11.302,0,22.917-3.753,33.056-10.752c-7.483,20.754-27.368,35.633-50.668,35.633c-29.691,0-53.847-24.155-53.847-53.847   C44.075,94.976,61.083,73.969,84.094,67.849z M72.837,193.034l-53.43-53.43l16.743-16.743c1.137,23.9,15.909,44.276,36.686,53.536   V193.034z M30.293,189.97l14.084-14.084l6.308,6.308l-14.084,14.084L30.293,189.97z M8,159.344c0-5.307,2.048-10.294,5.758-14.077   l24.963,24.963l-14.084,14.084L13.893,173.57C10.093,169.77,8,164.717,8,159.344z M42.257,201.934l14.084-14.084l16.496,16.496   v28.168L42.257,201.934z M81.389,256.756c7.717-3.526,16.862-1.976,23.001,4.162c6.479,6.479,7.768,16.592,3.44,24.455   C94.295,281.876,83.832,270.679,81.389,256.756z M116.176,286.496c3.76-8.856,2.798-19.004-2.65-27.016l19.934-19.935h23.702   c0.314,0,0.625,0.012,0.937,0.024v46.92C157.788,286.5,116.393,286.5,116.176,286.496z M180.646,263.029   c0,9.786-6.018,18.189-14.547,21.712v-43.426C174.627,244.839,180.646,253.243,180.646,263.029z M232.492,292.013   c-26.868,26.865-70.06,27.699-97.939,2.499h22.609c17.36,0,31.483-14.123,31.483-31.483s-14.123-31.484-31.483-31.484h-21.358   v-44.36c0-2.209-1.791-4-4-4s-4,1.791-4,4v46.704l-19.648,19.648c-7.678-6.432-18.017-8.282-27.319-5.152v-69.071   c5.431,1.563,11.158,2.419,17.085,2.419c16.559,0,31.607-6.554,42.719-17.189l70.864,70.863l-9.691,9.691   c-1.563,1.562-1.563,4.095,0,5.656c1.561,1.563,4.096,1.563,5.656,0l44.422-44.421c1.259,2.106,2.772,4.062,4.546,5.836   c4.845,4.845,10.949,7.676,17.268,8.507v30.266L232.492,292.013z M293.185,262.419l33.211-33.21l7.042,7.042   c1.563,1.563,4.096,1.563,5.656,0c5.449-5.447,14.157-5.668,19.889-0.693l-46.349,46.348L293.185,262.419z M322.803,292.075   l-4.513-4.513l46.386-46.385l4.512,4.513L322.803,292.075z" fill="#ffffff" data-original="#000000" style="" class=""/>
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            <g xmlns="http://www.w3.org/2000/svg">
                            </g>
                            </g>
                        </svg>
                        <p class="astroname">Nico</p>
                    </a> -->
                </div>
                
                <div class="elementsList">
                    <div>
                        <div
                            @click="toggleDysplay"
                            class="buttonList"
                        >
                            ON/OFF
                        </div>

                        <ul class="elementsRover">
                            <li 
                                v-for="(element, index) in elements"
                                :key="index"
                                class="listIteration"
                                @click="onListClick(element)"
                            >
                                <div class="perserveranceElement">
                                    <p
                                        :class="currentElement && currentElement.name === element.name ? 'active-color' : '' "
                                    >
                                      {{element.name}}  
                                    </p>
                                </div>
                                <div 
                                    class="elementLine"
                                    :class="currentElement && currentElement.name === element.name ? 'active-bg' : '' "
                                >
                                </div>

                                <div class="indexList">
                                    <p :class="currentElement && currentElement.name === element.name ? 'active-color' : '' ">
                                      {{index + 1}}  
                                    </p>
                                </div> 

                            </li>
                        </ul>
                    </div>
                    
                </div>
                
                <ul class="details">
                    <li>Length: 3 meters</li>
                    <li>Width: 2.7 meters</li>
                    <li>Height: 2.2 meters</li>
                    <li>Weight: 1025kg</li>
                    <li>Mission duration: 687 days</li>
                </ul>
            </div>
            
        </div>

        <ul class='elementsRover'>
            <li
                v-for="(point, index) in elements" :key="index"
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
           
        <div id="spiritContainer"></div> 
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer/* , CSS2DObject */ } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { elementsPerseverance } from '../assets/js/perseveranceDatas'
/* import { gsap } from "gsap"; */
import * as dat from 'dat.gui';
import Stats from 'stats.js';

  
export default {
    
    name: 'Spirit',

    components: {
        Navigation,
    },

    data(){
        return {
            name: '',
            launchDate: '',
            landingDate: '',
            endMission: '',
            elements: elementsPerseverance,
            currentElement: null,
            photos: null,
            camera: null,
            scene: null,
            controls: null,
            renderer: null,
            spirit: null,
            clock: new THREE.Clock(),
            css2Renderer: null,
            stats: new Stats(),
            raycaster: new THREE.Raycaster(),
            points: [],
        }
    },

    methods: {
        
        init: function() {
 
            /**
             * Loaders
             */
            const gltfLoader = new GLTFLoader();
           /* const loadingManager = new THREE.LoadingManager()
             const texturesLoader = new THREE.TextureLoader(loadingManager)*/

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
            this.camera.position.set( 0, 4, -15);
            
            // Scene
            this.scene = new THREE.Scene();
            this.scene.fog = new THREE.Fog( '#000000', 10, 15 );

            /**
             * Debug
             */
            /* const axesHelper = new THREE.AxesHelper( 5 );
            this.scene.add( axesHelper ); */
            this.stats.showPanel(0);
            document.body.appendChild( this.stats.dom );
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
                        
                    }
                })
            }

             /**
             * Models
             */
            gltfLoader.setPath( './3DObjects/mars-perseverance-rover/source/' ).load( 'Perseverance.glb', (object) => {
                
                this.spirit = object.scene
                this.scene.add( this.spirit );
                
                

                //Debug model
                const modelFolder = gui.addFolder('Model');
                modelFolder.add(this.spirit.position, 'x', -3, 3, .3).name('x')
                modelFolder.add(this.spirit.position, 'z', -5, 5, .03).name('z')
                modelFolder.add(this.spirit.position, 'y', -5, 5, .03).name('z')
                modelFolder.add(this.spirit.rotation, 'y', -3, 3, .03).name('rotation-y')
       
                this.spirit.traverse(child =>{

                     if( child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
                        child.castShadow = true
                        /* child.receiveShadow = true */
                    } 
        
                })
                
                this.spirit.matrixAutoUpdate = false //perf
                this.spirit.rotation.y = Math.PI / 1.2;
                this.spirit.updateMatrix()
                updateAllMaterials()
            })

            
            //PERFORMANCE
            /**
             * Points
             */
            /* for (let i = 0; i < elementsPerseverance.length; i++) {
                this.points.push({
                    position: new THREE.Vector3(elementsPerseverance[i].positions.x, elementsPerseverance[i].positions.y, elementsPerseverance[i].positions.z),
                    element: document.querySelector(`#point-${i}`),
                })  
            } */
            
            
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
            floor.castShadow = false
            floor.rotation.x = - Math.PI * 0.5
            this.scene.add(floor)

            /**
             * Light
             */

            // AmbientLight
            const ambientLight = new THREE.AmbientLight(0xf1f1f1, .4)
            this.scene.add(ambientLight)

            const lightFolder = gui.addFolder('Light');
            lightFolder.add(ambientLight, 'intensity').min(0).max(5).step(0.001).name('Ambient-Intensity')

            //Directionnal Light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 3.1)
            directionalLight.position.set(2.5, 2.5, 0)
            directionalLight.castShadow = true
            directionalLight.shadow.mapSize.set(1024 * 2, 1024 * 2 )
            directionalLight.shadow.camera.far = 5
            directionalLight.shadow.camera.left = - 2.5
            directionalLight.shadow.camera.top = 2
            directionalLight.shadow.camera.right = 2.5
            directionalLight.shadow.camera.bottom = - 2
            directionalLight.shadow.normalBias = .02
            this.scene.add(directionalLight)
            
            /*Helper
            const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
            this.scene.add(cameraHelper);
            const helper = new THREE.DirectionalLightHelper( directionalLight);
            this.scene.add(helper)
            lightFolder.add(directionalLight, 'intensity').min(0).max(5).step(0.001).name('direction-intensity')
            lightFolder.add(directionalLight.position, 'x').min(- 5).max(5).step(0.001).name('direction-X')
            lightFolder.add(directionalLight.position, 'y').min(- 5).max(5).step(0.001).name('direction-Y')
            lightFolder.add(directionalLight.position, 'z').min(- 5).max(5).step(0.001).name('direction-Z')
            */
    
            /* this.scene.overrideMaterial = new THREE.MeshBasicMaterial(); */

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
            this.renderer.shadowMap.needsUpdate = true
           

            this.css2Renderer = new CSS2DRenderer();
            this.css2Renderer.setSize( sizes.width, sizes.height);
            this.css2Renderer.domElement.style.position = 'absolute';
            this.css2Renderer.domElement.style.top = '0px';
            canvas.appendChild( this.css2Renderer.domElement);
 
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
            this.controls = new OrbitControls( this.camera, this.css2Renderer.domElement);
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

                this.css2Renderer.setSize( window.innerWidth, window.innerHeight );
            })

        },

        animate: function(){
            this.stats.begin();
            this.renderer.shadowMap.needsUpdate = false
            requestAnimationFrame( this.animate );
            this.controls.update()
            this.renderer.render( this.scene, this.camera );
            this.css2Renderer.render( this.scene, this.camera );

    
            //PERFORMANCE
            /* this.points.forEach(point => {
                const screenPosition = point.position.clone()
               
                screenPosition.project(this.camera)
                const translateX = screenPosition.x * window.innerWidth * .5;
                const translateY = screenPosition.y * window.innerHeight * .5;
                point.element.style.transform = `translate(${translateX}px, ${-translateY}px)`
            }) */
            
        this.stats.end();    
            
        },

        toggleDysplay(){
            document.querySelectorAll('.elementsRover').forEach(list => {
                list.classList.toggle('visible');
            })
            

            this.currentElement = null;
        },

        onListClick(element){
            if(this.currentElement && element.name === this.currentElement.name){
                this.currentElement = null;
            }else{
               this.currentElement = element; 
            }
        },

        toggleOpen(){
            document.querySelector('.elementDescription').classList.toggle('show');
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

<style lang="scss" scoped>
    
#rover{
    background: #000000;  

    .htmlContainer{
        max-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        h1{
            font-size: 3rem;
            color: #ffffff;
        }
        
        .size img{
            width: 20%;
        }

        .elementsList{
            display: flex;

            .buttonList {
                z-index: 100;
                position: relative;
                cursor: pointer;
                color: #f1f1f1;
            }

            .elementsRover{

                .listIteration{
                    display: flex;
                    margin: 1rem 0;
                    position: relative;
                    z-index: 100;
    
                    .perserveranceElement{
                        overflow: hidden;
                        align-items: flex-end;
                        flex: 1;
    
                        p{
                            transform: translateX(150%);
                            margin-right: .8rem;
                            color: #ffffff;
                            opacity: .6;
                            justify-items: flex-end;
                            transition: transform .3s ease-in;
                            text-align: end;
                        }
                    }
    
                    .elementLine{
                        position: relative;
                        width: 2px;
                        top: 0;
                        bottom: 0;
                        background-color: #f1f1f1;
                        opacity: .5;      
                        transition: transform .1s ease-in;
                    }
    
                    .indexList{
                        width: 25px;
                        overflow: hidden;
    
                        p{
                            font-size: .8rem;
                            color: #ffffff;
                            opacity: .6;
                            transform:translate(-150%) rotate(90deg);
                        }
                    }
                }
            }

            /* LIST DYSPLAYED */
            .elementsRover.visible .listIteration{
                .perserveranceElement{
                    p{
                        transform: translateX(0);
                    }
                    p.active-color{
                        opacity: 1;
                    }
                }

                .elementLine{
                    transform: skew(15deg, 15deg);
                }
                .elementLine.active-bg{
                    background-color: var(--orangeD);
                    opacity: 1;
                    transform: skew(0deg, 0deg);
                }
                
                .indexList{
                    p{
                        transition: transform .3s ease-in;
                        transform: translate(0%) rotate(90deg);
                    }
                    p.active-color{
                        opacity: 1;
                    }
                }

                &:hover{
                    cursor: pointer;

                    .perserveranceElement,
                    .indexList{
                        p{
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .elementDescription{
            overflow-y: hidden;
            width: 30%;
            height: 70vh;
            transform: translateX(-200%);
            color: #ffffff;
            margin-bottom: 4rem;
            transform-origin: left;
            transition: transform .3s ease-in-out;
            position: relative;
            z-index: 200;

            .containerInfos{
                height: 100%;
                transform: translateY(40vh);
                transition: transform .3s ease-in;
                
                .mainImg{
                    width: 50%;     
                }

                .containerDescription{
                    position: relative;
                    text-align: start;
                    padding: 2rem 1rem;

                    .background{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(255, 255, 255, .1);
                        backdrop-filter: blur(5px);
                        transform: scaleY(40%);
                        transform-origin: top;
                        transition: transform .3s ease-in;
                        z-index: -1;
                    }    
                    
                    .infos{

                        .title{
                            display: flex;
                            justify-content: space-between;

                            h3{
                                position: relative;
                                font-size: 20px;
                                font-family: var(--orbiton-font);
                                padding-bottom: .8rem;

                                &::before{
                                    content: '';
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 3px;
                                    background: var(--orangeD);
                                    transform: scaleX(0);
                                    transform-origin: right;
                                    transition: transform .3s ease-in;
                                }

                                &::after{
                                    content: '';
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 3px;
                                    background: #ffffff;
                                    transform: scaleX(0);
                                    transform-origin: left;
                                    transition: transform .3s ease-in ;
                                }
                            }
                        }
                        .shortDescription{
                            padding: 2rem 0;
                        }
                        .longDescription{
                            line-height: 1.7rem;
                            transform: scaleY(0);
                            transform-origin: top;
                            opacity: 0;
                            transition: all .3s ease-in;
                        }
                        
                    }                     
                }
            }    
        }

        .elementDescription.display{
            transform: translateX(0);

            .containerInfos{
                .containerDescription{
                    .infos{
                        .title{
                            h3{
                                &::before{
                                    transform:scaleX(1);
                                }
                            }
                        }
                    }
                }
            }
        }

        .elementDescription.display.show{
            .containerInfos{
                transform: translateY(0);

                .containerDescription{
                    .background{
                        transform: scaleY(100%);
                    }

                    .infos{
                        .title{
                            h3{
                                &::before{
                                        transform:scaleX(0);
                                }

                                &::after{
                                    transform:scaleX(1);
                                }
                            }
                        }
                        .longDescription{
                            opacity: 1;
                            transform: scaleY(1);
                        }
                    }
                }
            }
            
        }

    }
}       

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