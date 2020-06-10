<template>
    <div class="e__g">
      <div class="e__g__t__c">
        <p
          class="e__g__t"
          v-text="title"
        ></p>
      </div>
        <john-slick
          ref="johnSlick"
          :options="slickOptions"
          @setPosition="handleSetPosition"
        >
          <div
            v-for="(media, index) in this.medias"
            :key="index"
          >
            <img
                :src="media.url"
            >
          </div>
        </john-slick>
    </div>
  </template>
  
  <script>
//   import { GalleryCard } from './GalleryCard'
  
  export default {
    name: 'Gallery',
  
    // components: {
    //   GalleryCard
    // },
  
    data () {
      return {
        currentSlide: 0,
        slickOptions: {
          arrows: true,
          dots: false,
          infinite: false,
          slidesToShow: 3,
          swipe: true,
          nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>',
          prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></button>',
          medias: [
                  { url: "http://placehold.it/200x100" },
                  { url:  "http://placehold.it/200x100" },
                  { url:  "http://placehold.it/200x100" },
                  { url: "http://placehold.it/200x100" },
                  { url:  "http://placehold.it/200x100" },
                  { url:  "http://placehold.it/200x100" }
            ]
        }
      }
    },
  
    methods: {
      handleSetPosition (event, { currentSlide }) {
        if (this.currentSlide !== currentSlide) {
          this.$emit('show-next-slide')
        } else if (currentSlide === this.medias.length - 1) {
          this.$emit('load-next')
        }
  
        this.currentSlide = currentSlide
      }
    }
  }
  </script>
  
  <style lang="scss">
.e {
  &__g {
    display: flex;
    flex-direction: column;
    height: 50vh;
    position: relative;
    width: 35vw;
    margin: 0 auto;
    top: 35%;

    &__t {
      font-size: 24px;
      line-height: 36px;

      &__c {
        background-color: #fd7869;
        color: #fff;
        padding: 0 16px;
      }
    }

    &__slick {
      &__c {
        position: relative;
      }
    }

    .slick-slider {
      flex: 1;
    }

    .slick-track {
      line-height: 0;
    }

    .slick-arrow {
      background-color: transparent;
      border: 0;
      border-top: 2px solid #fd7869;
      border-left: 2px solid #fd7869;
      display: block;
      cursor: pointer;
      height: 24px;
      padding: 0;
      position: absolute;
      top: 50%;
      z-index: 1;
      width: 24px;

      &--next {
        right: 8px;
        transform: translateY(-50%) rotate(135deg);
      }

      &--prev {
        left: 8px;
        transform: translateY(-50%) rotate(-45deg);

        &.slick-disabled {
          display: none !important;
        }
      }
    }
  }
}

  </style>
  