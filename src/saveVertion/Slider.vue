<template>
    <div id="slider">
        

        <div @mouseenter="tlPlay(tlHover)" @mouseout="tlReverse(tlHover)" @click="tlPlay(tlExpand)" class="button-slider-open js-slider-open">Watch</div>
        
        <!-- PLACEHOLDERS -->
        <div class="container-slider">
            <div class="container-images placeholders js-placeholders">
                
                <!-- placeholder 1 -->
                <div class="container-image placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
                    <img
                        src="/images/spirit/spiritEarth.jpeg"
                        class="placeholders__img"
                    >
                </div>

                <!-- placeholder 2 -->
                <div class="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
                    <img
                        src="/images/spirit/spiritMars1.jpeg"
                        class="placeholders__img"
                    >
                </div>
            
                <!-- placeholder 3 -->
                <div class="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
                    <img
                        src="/images/spirit/spiritEarth1.jpeg"
                        class="placeholders__img"
                    >
                </div>

                <!-- placeholder 4 -->
                <div class="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
                    <img
                        src="/images/spirit/spiritMars2.jpeg"
                        class="placeholders__img"
                    >
                </div>
            
                <!-- placeholder 5 -->
                <div class="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
                    <img
                        src="/images/spirit/spiritEarth2.jpeg"
                        class="placeholders__img"
                    >
                </div>

                <!-- placeholder 6 -->
                <div class="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
                    <img
                        src="/images/spirit/spiritMars3.jpeg"
                        class="placeholders__img"
                    >
                </div>
            
                <!-- placeholder 7 -->
                <div class="placeholders__img-wrap js-img-wrap" style="--aspect-ratio: 0.8;">
                    <img
                        src="/images/spirit/spiritEarth3.jpeg"
                        class="placeholders__img"
                    >
                </div>
            </div>
        </div>
        <!-- END PLACEHOLDERS -->


        <!-- SLIDER -->
        <div class="slider js-slider" @mousemove="mouseMove">
            <div class="slider__container js-container" @mousedown="mouseDown" data-scroll>
            
                <!-- ITEM 1 -->
                <div class="slider__item js-item" style="--aspect-ratio: 0.8;">
                    <div
                    class="slider__item-img-wrap js-img-wrap js-img"
                    style="--aspect-ratio: 0.8;"
                    data-building="building-slug"
                    data-index="1"
                    >
                    <img
                        src="/images/spirit/spiritEarth.jpeg"
                        alt="building"
                        class="slider__item-img"
                    >
                    </div>

                    <div class="slider__item-content">
                    <div class="slider__item-heading-wrap">
                        <h3 class="slider__item-heading js-heading">
                        Indigo
                        </h3>
                    </div>

                    <div class="slider__item-button-wrap">
                        <button
                        class="button slider__item-button js-button"
                        type="button"
                        data-slug="indigo"
                        >
                        <span class="button__title-mask">
                            <div class="button__title-wrap">
                            <span class="button__title">Read more</span>
                            <span class="button__title--secondary">Read more</span>
                            </div>
                        </span>

                        <span class="button__icon">
                            <span class="button__circle"></span>
                            <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                            <svg class="button__svg button__svg--clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>

                <!-- ITEM 2 -->
                <div class="slider__item js-item" style="--aspect-ratio: 0.8;">
                    <div
                    class="slider__item-img-wrap js-img-wrap js-img"
                    style="--aspect-ratio: 0.8;"
                    data-building="building-slug"
                    data-index="1"
                    >
                    <img
                        src="/images/spirit/spiritMars1.jpeg"
                        alt="building"
                        class="slider__item-img"
                    >
                    </div>

                    <div class="slider__item-content">
                    <div class="slider__item-heading-wrap">
                        <h3 class="slider__item-heading js-heading">
                        Rouge
                        </h3>
                    </div>

                    <div class="slider__item-button-wrap">
                        <button
                        class="button slider__item-button js-button"
                        type="button"
                        data-slug="rouge"
                        >
                        <span class="button__title-mask">
                            <div class="button__title-wrap">
                            <span class="button__title">Read more</span>
                            <span class="button__title--secondary">Read more</span>
                            </div>
                        </span>

                        <span class="button__icon">
                            <span class="button__circle"></span>
                            <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                            <svg class="button__svg button__svg--clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>

                <!-- ITEM 3 -->
                <div class="slider__item js-item" style="--aspect-ratio: 0.8;">
                    <div
                    class="slider__item-img-wrap js-img-wrap js-img"
                    style="--aspect-ratio: 0.8;"
                    data-building="building-slug"
                    data-index="1"
                    >
                    <img
                        src="/images/spirit/spiritEarth1.jpeg"
                        alt="building"
                        class="slider__item-img"
                    >
                    </div>

                    <div class="slider__item-content">
                    <div class="slider__item-heading-wrap">
                        <h3 class="slider__item-heading js-heading">
                        Jaune
                        </h3>
                    </div>

                    <div class="slider__item-button-wrap">
                        <button
                        class="button slider__item-button js-button"
                        type="button"
                        data-slug="jaune"
                        >
                        <span class="button__title-mask">
                            <div class="button__title-wrap">
                            <span class="button__title">Read more</span>
                            <span class="button__title--secondary">Read more</span>
                            </div>
                        </span>

                        <span class="button__icon">
                            <span class="button__circle"></span>
                            <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                            <svg class="button__svg button__svg--clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>

                <!-- ITEM 4 -->
                <div class="slider__item js-item" style="--aspect-ratio: 0.8;">
                    <div
                    class="slider__item-img-wrap js-img-wrap js-img"
                    style="--aspect-ratio: 0.8;"
                    data-building="building-slug"
                    data-index="1"
                    >
                    <img
                        src="/images/spirit/spiritMars2.jpeg"
                        alt="building"
                        class="slider__item-img"
                    >
                    </div>

                    <div class="slider__item-content">
                    <div class="slider__item-heading-wrap">
                        <h3 class="slider__item-heading js-heading">
                        Orange
                        </h3>
                    </div>

                    <div class="slider__item-button-wrap">
                        <button
                        class="button slider__item-button js-button"
                        type="button"
                        data-slug="orange"
                        >
                        <span class="button__title-mask">
                            <div class="button__title-wrap">
                            <span class="button__title">Read more</span>
                            <span class="button__title--secondary">Read more</span>
                            </div>
                        </span>

                        <span class="button__icon">
                            <span class="button__circle"></span>
                            <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                            <svg class="button__svg button__svg--clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>

                <!-- ITEM 5 -->
                <div class="slider__item js-item" style="--aspect-ratio: 0.8;">
                    <div
                    class="slider__item-img-wrap js-img-wrap js-img"
                    style="--aspect-ratio: 0.8;"
                    data-building="building-slug"
                    data-index="1"
                    >
                    <img
                        src="/images/spirit/spiritEarth2.jpeg"
                        alt="building"
                        class="slider__item-img"
                    >
                    </div>

                    <div class="slider__item-content">
                    <div class="slider__item-heading-wrap">
                        <h3 class="slider__item-heading js-heading">
                        Vert
                        </h3>
                    </div>

                    <div class="slider__item-button-wrap">
                        <button
                        class="button slider__item-button js-button"
                        type="button"
                        data-slug="vert"
                        >
                        <span class="button__title-mask">
                            <div class="button__title-wrap">
                            <span class="button__title">Read more</span>
                            <span class="button__title--secondary">Read more</span>
                            </div>
                        </span>

                        <span class="button__icon">
                            <span class="button__circle"></span>
                            <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                            <svg class="button__svg button__svg--clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>

                <!-- ITEM 6 -->
                <div class="slider__item js-item" style="--aspect-ratio: 0.8;">
                    <div
                    class="slider__item-img-wrap js-img-wrap js-img"
                    style="--aspect-ratio: 0.8;"
                    data-building="building-slug"
                    data-index="1"
                    >
                    <img
                        src="/images/spirit/spiritMars3.jpeg"
                        alt="building"
                        class="slider__item-img"
                    >
                    </div>

                    <div class="slider__item-content">
                    <div class="slider__item-heading-wrap">
                        <h3 class="slider__item-heading js-heading">
                        Bleu
                        </h3>
                    </div>

                    <div class="slider__item-button-wrap">
                        <button
                        class="button slider__item-button js-button"
                        type="button"
                        data-slug="bleu"
                        >
                        <span class="button__title-mask">
                            <div class="button__title-wrap">
                            <span class="button__title">Read more</span>
                            <span class="button__title--secondary">Read more</span>
                            </div>
                        </span>

                        <span class="button__icon">
                            <span class="button__circle"></span>
                            <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                            <svg class="button__svg button__svg--clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>

                <!-- ITEM 7 -->
                <div class="slider__item js-item" style="--aspect-ratio: 0.8;">
                    <div
                    class="slider__item-img-wrap js-img-wrap js-img"
                    style="--aspect-ratio: 0.8;"
                    data-building="building-slug"
                    data-index="1"
                    >
                    <img
                        src="/images/spirit/spiritEarth3.jpeg"
                        alt="building"
                        class="slider__item-img"
                    >
                    </div>

                    <div class="slider__item-content">
                    <div class="slider__item-heading-wrap">
                        <h3 class="slider__item-heading js-heading">
                        Violet
                        </h3>
                    </div>

                    <div class="slider__item-button-wrap">
                        <button
                        class="button slider__item-button js-button"
                        type="button"
                        data-slug="violet"
                        >
                        <span class="button__title-mask">
                            <div class="button__title-wrap">
                            <span class="button__title">Read more</span>
                            <span class="button__title--secondary">Read more</span>
                            </div>
                        </span>

                        <span class="button__icon">
                            <span class="button__circle"></span>
                            <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                            <svg class="button__svg button__svg--clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.002 4.639">
                            <path d="M.25 2.264h15.403"/>
                            <path d="M13.743.354l1.91 1.91-1.919 2.022"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
          <!-- END SLIDER -->

    </div>
</template>

<script>
import gsap from 'gsap';
/* import { Draggable } from 'gsap/Draggable' */


export default {
    name : "Slider",

    data(){
        return {
            dom: {},
            tlHover : gsap.timeline({ paused: true }),
            tlExpand : gsap.timeline({ 
                paused: true, onComplete: () => {
                this.setHoverAnimation();
            }}),
            mouseIsDown: false,
            scrollX: null,
            startX: null,
        }
    },

    methods: {
        elementsSelectors(){
            this.dom.placeholderEl = document.querySelector('.js-placeholders');
            this.dom.placeholderImages = this.dom.placeholderEl.querySelectorAll('.js-img-wrap');
            this.dom.placeholderButtonOpen = document.querySelector('.js-slider-open');
            this.dom.sliderEl = document.querySelector('.js-slider');
            this.dom.sliderItems = document.querySelectorAll('.js-item');
            this.dom.draggable = this.dom.sliderEl.querySelector('.js-container');
        },

        setHoverAnimation(){
            this.tlHover
                .addLabel('start')
                
                .set(this.dom.placeholderEl, { autoAlpha: 1 })
                .set(this.dom.placeholderImages, { scale: .5, x:(window.innerWidth /12) * 1.2, rotation: 0 })
                
                .to(this.dom.placeholderImages, { duration: 1, stagger: .07, ease: 'power3.inOut', x: 0, y: 0 })
                .to(this.dom.placeholderImages[0], { duration: 1, ease: 'power3.inOut', rotation: -8 }, 'start')
                .to(this.dom.placeholderImages[1], { duration: 1, ease: 'power3.inOut', rotation: -2 }, 'start')
        },

        tlPlay(tl){
            tl.play();
        },
        tlReverse(tl){
            tl.reverse();
        },

        setExpandAnimation(){
            const x1 = this.dom.placeholderImages[0].getBoundingClientRect().left - this.dom.sliderItems[0].getBoundingClientRect().left ;
            const x2 = this.dom.placeholderImages[1].getBoundingClientRect().left - this.dom.sliderItems[1].getBoundingClientRect().left ;
            const x3 = this.dom.placeholderImages[2].getBoundingClientRect().left - this.dom.sliderItems[2].getBoundingClientRect().left;

            const y1 = this.dom.placeholderImages[0].getBoundingClientRect().top - this.dom.sliderItems[0].getBoundingClientRect().top ;
            const y2 = this.dom.placeholderImages[1].getBoundingClientRect().top - this.dom.sliderItems[1].getBoundingClientRect().top ;
            const y3 = this.dom.placeholderImages[2].getBoundingClientRect().top - this.dom.sliderItems[2].getBoundingClientRect().top ;

            const intersectX1 = this.dom.sliderItems[0].x;
            const intersectX2 = this.dom.sliderItems[1].x;
            const intersectX3 = this.dom.sliderItems[2].x;
            
            this.tlExpand
                .addLabel('start')
                .to(this.dom.placeholderImages[0], { duration: 1.67, ease: 'power3.inOut', x: -x1, y: -y1, scale: 1, rotation: 0 }, 'start')
                .to(this.dom.placeholderImages[1], { duration: 1.67, ease: 'power3.inOut', x: -x2, y: -y2, scale: 1, rotation: 0 }, 'start')
                .to(this.dom.placeholderImages[2], { duration: 1.67, ease: 'power3.inOut', x: -x3, y: -y3, scale: 1, rotation: 0 }, 'start')
                .to(this.dom.placeholderImages[0].querySelector('img'), { duration: 1.67, ease: 'power3.inOut', x: intersectX1 }, 'start')
                .to(this.dom.placeholderImages[1].querySelector('img'), { duration: 1.67, ease: 'power3.inOut', x: intersectX2 }, 'start')
                .to(this.dom.placeholderImages[2].querySelector('img'), { duration: 1.67, ease: 'power3.inOut', x: intersectX3 }, 'start')
                .to(this.dom.sliderEl, {opacity: 1 }, 'start+=1.50')
                .set(this.dom.placeholderEl, { autoAlpha: 0 }, 'start+=1.67')
        },

        mouseDown(event){
            this.mouseIsDown = true;
            this.scrollX = event.clientX
        },

        mouseMove(event){
            /* let sliderX = ;*/
            /*console.log(this.dom.draggable.getBoundingClientRect().x)  */
            /* console.log(this.dom.draggable.getBoundingClientRect().x, this.startX) 
            console.log(this.scrollX, window.innerWidth - event.clientX) */

            if(this.dom.draggable.getBoundingClientRect().x > this.startX){
                gsap.to(this.dom.draggable, { duration:1.2, x: 0})
            } 
            if(this.dom.draggable.getBoundingClientRect().x < (this.startX + 140) - this.dom.draggable.getBoundingClientRect().width){
                gsap.to(this.dom.draggable, { duration:1.2, x: `-${this.dom.draggable.getBoundingClientRect().width - 160}`})
            }

            if(this.mouseIsDown) {
                if(event.clientX < this.scrollX) {
                    gsap.to(this.dom.draggable, { duration:1.2, x:`${this.dom.draggable.getBoundingClientRect().x - event.clientX }`})
                } else if(event.clientX > this.scrollX && this.dom.draggable.getBoundingClientRect().x < this.startX){
                    
                    gsap.to(this.dom.draggable, { duration:1.2, x:`${this.dom.draggable.getBoundingClientRect().x - (window.innerWidth - event.clientX) }`})
                } 
                this.scrollX = event.clientX;
            }
        }
        

    },

    mounted() {
        this.elementsSelectors()
        this.startX = this.dom.draggable.getBoundingClientRect().x;
        window.addEventListener('mouseup', () => {
            this.mouseIsDown = false;
        })
       /* gsap.registerPlugin(Draggable);
        new Draggable.create(this.dom.sliderEl.querySelector('.js-container'), {
            type:"x",
            edgeResistance: 0.1,
            dragResistance: 0.4,
            throwResistance: 4000,
            throwProps: true,
            inertia: true,
            bounds: this.dom.sliderEl,
        }); */

        this.setHoverAnimation()
        this.setExpandAnimation()
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
  width: 50px;
  z-index: 1;
  overflow: unset;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;

  

  &__img-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 137.88px;
    transform-origin: left bottom;
    will-change: transform;
    overflow: hidden; // bis

    img{
        max-width: 100%;
        height: auto;
    }
  }

    &__img-wrap:first-child {
        top: 10px;
        left: -20px;
        z-index: 3;
    }

    &__img-wrap:nth-child(2) {
        top: -30px;
        left: 10px;
        z-index: 2;
    }

    &__img-wrap:nth-child(3) {
        top: 30px;
        z-index: 1;
    }
}

.slider {
  --slidesTotal: 7;

  position: sticky;
  top: 20px;
  left: 0;
  bottom: 0;
  z-index: 9;

  height: calc(var(--vh, 1vh) * 100);

  will-change: transform;
  
  overflow: scroll;  //changement 
  /* visibility: hidden; */ //changement
  opacity: 0;

    &::-webkit-scrollbar {
        display: none;
    }
  

  &__container {
    display: grid;
    grid-template-columns: repeat(var(--slidesTotal), 150px); //changement
    grid-column-gap: 20px; //changement
    align-items: center;

    padding: 0 20px; //changement

    height: calc(var(--vh, 1vh) * 100);
    position: relative;
    z-index: 10;//changement
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    pointer-events: none;

    will-change: transform;
  }

  &__item-img-wrap {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    z-index: 1;

    user-select: none;
  }

  &__item-heading-wrap,
  &__item-button-wrap {
    display: flex;

    overflow: hidden;
  }

  &__item-button-wrap {
    pointer-events: all;
  }

  &__item-heading {
    pointer-events: none;

    font-size: 16.667px;//changement
    line-height: 15.278px;//changement
    color: #fff;
    text-transform: uppercase;

    transform-origin: left bottom;
    will-change: transform;
  }

  &__item-button {
    margin: 14px auto 0; //changement

    color: #fff;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    position: absolute;

    width: 100%;
    height: 100%;//changement

    overflow-x: unset;

    &__container {
      grid-template-columns: repeat(var(--slidesTotal), 150px); //changement
      grid-column-gap: 20px; //changement

      padding: 0 10px; //changement

      height: unset;

      cursor: grab;
    }

    &__item-heading {
      font-size: 20px;//changement
      line-height: 18px;//changement
    }

    &__item-button {
      margin: 10px auto;
    }

    &__item-img {
      //max-width: unset;

      pointer-events: none;
      user-select: none;

      transform-origin: left center;
      /* transform: scale(1.75); */ //changement
      will-change: transform; 
    }
  }
}

</style>