<template>
    <div id="spirit">
        <div class="left-column">
            <navigation />    
        </div>
        
        <div class="midle-column">
            <spirit-three />
            <div class="ellipse-container">
                <div class="ellipse thin"></div>
                <div class="ellipse thick"></div>
                <div class="ellipse yellow"></div>
                <div class="circle1"><span>Madre mia cono</span></div>
                <div class="circle2"><span>Padre suca nacho</span></div>
            </div>
        </div>
        
        <div class="right-column">
               
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import SpiritThree from '../components/three/SpiritThree.vue';


export default { 
    components: {
        Navigation,
        SpiritThree,
    },
    
}

</script>

<style lang="scss" scoped>
#spirit{
    background: #000000;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;

    .left-column{
        width: 25vw;
    }

    .midle-column{
        width: 50vw;
        display: flex;
        align-items: center;

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
            }

            .circle1 {
            top: 150px;
            left: 150px;
            }

            .circle2 {
            bottom: 150px;
            right: 130px;
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
            background: rgba(255, 255, 255, 0.08)
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
    }
}
</style>