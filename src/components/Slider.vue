<template>
    <div id="slider">
        
            <div @mouseenter="tlPlay" @mouseleave="tlReverse" class="button-slider-open js-slider-open">Watch</div>
        <div class="container-slider">
            <div class="container-images placeholders js-placeholders">
                <div class="container-image placeholders__img-wrap js-img-wrap">
                    <img
                    src="/images/spirit/spiritEarth.jpeg"
                    class="placeholders__img"
                    >
                </div>
                <div class="placeholders__img-wrap js-img-wrap">
                    <img
                    src="/images/spirit/spiritMars1.jpeg"
                    class="placeholders__img"
                    >
                </div>
                <div class="placeholders__img-wrap js-img-wrap">
                    <img
                    src="/images/spirit/spiritEarth1.jpeg"
                    class="placeholders__img"
                    >
                </div>
                <div class="placeholders__img-wrap js-img-wrap">
                    <img
                    src="/images/spirit/spiritMars2.jpeg"
                    class="placeholders__img"
                    >
                </div>
                <div class="placeholders__img-wrap js-img-wrap">
                    <img
                    src="/images/spirit/spiritEarth2.jpeg"
                    class="placeholders__img"
                    >
                </div>
                <div class="placeholders__img-wrap js-img-wrap">
                    <img
                    src="/images/spirit/spiritMars3.jpeg"
                    class="placeholders__img"
                    >
                </div>
                <div class="placeholders__img-wrap js-img-wrap">
                    <img
                    src="/images/spirit/spiritEarth3.jpeg"
                    class="placeholders__img"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    name : "Slider",

    data(){
        return {
            dom: {},
            tl: this.tl = gsap.timeline({ paused: true })
        }
    },

    methods: {
        setHoverAnimation : function(){
            this.tl
                .addLabel('start')
                
                .set(this.dom.el, { autoAlpha: 1 })
                .set(this.dom.images, { scale: .5, x:(window.innerWidth /12) * 1.2, rotation: 0 })
                
                .to(this.dom.images, { duration: 1, stagger: .07, ease: 'power3.inOut', x: 0, y: 0 })
                .to(this.dom.images[0], { duration: 1, ease: 'power3.inOut', rotation: -4 }, 'start')
                .to(this.dom.images[1], { duration: 1, ease: 'power3.inOut', rotation: -2 }, 'start')
        },

        tlPlay(){
            this.tl.play();
        },
        tlReverse(){
            this.tl.reverse();
        }
    },

    mounted() {
        this.dom.el = document.querySelector('.js-placeholders');
        this.dom.images = this.dom.el.querySelectorAll('.js-img-wrap');
        this.dom.buttonOpen = document.querySelector('.js-slider-open');

        this.setHoverAnimation()
    }
}
</script>


<style lang="scss" scoped>
    #slider{
        position: absolute;
        top: 60%;
        width: 100%;
        height: 200px;
        
        z-index: 5;

        .container-slider{
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            background-color: rgb(22, 22, 22);
        }
        
    }
.placeholders {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  z-index: 1;
  overflow: unset;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;

  &__img-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    transform-origin: left bottom;
    will-change: transform;
  }

  &__img-wrap:first-child {
    top: 10px;
    left: -20px;
    z-index: 2;
  }

  &__img-wrap:nth-child(2) {
    top: -30px;
    left: 10px;
    z-index: 1;
  }

  &__img-wrap:nth-child(3) {
    top: 30px;
    z-index: 0;
  }

}
</style>