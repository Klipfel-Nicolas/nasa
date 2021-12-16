<template>
    <div id="spirit">
        <div class="left-column">
            
            <navigation />

            <div class="materials-container">
                <div>
                    <input 
                        type="radio" 
                        id="solid" 
                        name="material" 
                        value="solid"
                        v-model="material"
                    >
                    <label for="solid" :class="material === 'solid' ? 'active' : ''">Solid</label>
                </div>

                <div>
                    <input 
                        type="radio" 
                        id="wireframe" 
                        name="material" 
                        value="wireframe" 
                        v-model="material"
                        checked
                    >      
                    <label for="wireframe" :class="material === 'wireframe' ? 'active' : ''">Wireframe</label>
                </div>
                
                <div>
                    <input 
                        type="radio" 
                        id="other" 
                        name="material" 
                        value="other"
                        v-model="material"
                    >
                    <label for="other" :class="material === 'other' ? 'active' : ''">Other</label>
                </div>
            </div>

            <div>En atendant</div>
        </div>
        
        <div class="midle-column">
            
            <spirit-three :material="material"/>
            
            <div class="title">
                <p>MER-A (Mars Exploration Rover - A)</p>
                <h1>Spirit</h1>
                <p>June 2003 - March 2010</p>
            </div>

            <div class="ellipse-container">
                <div class="ellipse thin"></div>
                <div class="ellipse thick"></div>
                <div class="ellipse yellow"></div>
                <div class="circle1"><span>Photos</span></div>
                <div class="circle2"><span>Infos</span></div>
            </div>
        </div>
        
        <div class="right-column">
            <slider />
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import SpiritThree from '../components/three/SpiritThree.vue';
import Slider from'../components/Slider.vue';


export default { 
    components: {
        Navigation,
        SpiritThree,
        Slider,
    },
    
    data(){
        return{
            material: 'wireframe',
        }
    }
}

</script>

<style lang="scss" scoped>

#spirit{
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #000000;
    color: #fff;
    padding: 2.5vh  2.5vw;

    .left-column{
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        width: 25vw;
        height: 100vh;

        .materials-container{
            display: flex;
            justify-content: space-around;
            writing-mode: vertical-rl;
            transform: rotate(180deg);

            div{
                position: relative;
                
                label{
                    position: relative;
                    font-weight: 700;
                    font-size: 1.2rem;
                    opacity: .4;
                    transition: opacity .3s ease-out;
                    

                    &:hover {
                        cursor: pointer;
                        opacity: .7;
                    }

                    &::before{
                        content: '';
                        position: absolute;
                        top: -15px;
                        height: 2px;
                        width: 100%;
                        background-color: #fff;
                        opacity: 0.5;
                        transition: transform 0.1s ease-in;
                        transform: skew(15deg, 15deg);
                    }
                }

                label.active{
                    color: var(--orangeD);
                    opacity: 1;

                    &::before{
                        transform: skew(0deg, 0deg);
                        background-color: var(--orangeD);
                        opacity: 1;
                    }
                }

                input{
                    visibility: hidden;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .midle-column{
        width: 45vw;
        display: flex;
        align-items: center;
        position: relative;

        //TITLE H1
        .title{
            position: absolute;
            top: 25%;
            left: 70%;
            z-index: 4;
            
            h1{
                position: relative;
                font-size: 10rem;
                letter-spacing: 1rem;
                line-height: 1;
                color: #ffffff;
            }

            //Date
            p:nth-child(3){
                font-size: 1rem;
                font-weight: 700;
                opacity: .5;
                margin-left: 115px;
            }
        }
        // CIRCLE
        .ellipse-container{
            width: 600px;
            height: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            margin: 0 auto;

            .ellipse {
                position: absolute;
                top: 0;
                border-radius: 50%;
                border-style: solid;
            }

            .ellipse.thin {
                width: 100%;
                height: 100%;
                border-width: 1px;
                border-color: #494949;
                opacity: .5;
            }

            .ellipse.thick {
                width: 95%;
                height: 95%;
                border-width: 4px;
                border-color: transparent;
                transform: rotate(-45deg);
                top: 14px;
                left: 14px;
            }

            .ellipse.yellow {
                width: 95%;
                height: 95%;
                border-width: 6px;
                border-color: var(--orangeD) transparent;
                transform: rotate(-45deg);
                top: 14px;
                left: 14px;
                animation: ellipseRotate 12s ease-in-out infinite;
            }

            @keyframes ellipseRotate {
                0% {
                    transform: rotate(-45deg);
                }
                100% {
                    transform: rotate(-405deg);
                }
            }

            .circle1,
            .circle2 {
                border-style: solid;
                width: 64px;
                height: 64px;
                border-width: 1px;
                border-color: #444;
                border-radius: 50%;
                position: absolute;
                color: #fff;
            }

            .circle1 {
                top: 150px;
                left: 150px;
            }

            .circle2 {
                bottom: 150px;
                right: 130px;
                text-align: center;
            }

            .circle1::before,
            .circle1::after,
            .circle2::before,
            .circle2::after {
                content: '';
                border-radius: 50%;
                display: inline-block;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .circle1::before,
            .circle2::before {
                width: 12px;
                height: 12px;
                background: #000;
                z-index: 1;
            }

            .circle1::after,
            .circle2::after {
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.08);
            }

            .circle1 span,
            .circle2 span {
                position: absolute;
                top: 25px;
                width: 100px;
                font-size: 14px;
            }

            .circle1 span {
                left: 75px;
            }

            .circle2 span {
                left: -90px;
            }
                    }
                }

    .right-column{
        width: 25vw;
        position: relative;

    }
}
</style>