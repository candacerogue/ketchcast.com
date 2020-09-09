<template>
  <div style="margin: 0 auto;">
    <b-carousel 
      id="carousel" 
      fade v-model="slide" 
      :interval="4000" 
      controls 
      img-width="1024"
      img-height="480"
    >
      <a href="https://afrotech.com/julia-collins-transformed-the-food-industry-now-shes-trying-to-save-the-world"
        target="blank">
        <b-carousel-slide img-src="@/assets/Art-1-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="https://afrotech.com/everette-taylor-wants-to-disrupt-the-art-industry" target="blank">
        <b-carousel-slide img-src="@/assets/Art-2-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="https://www.npr.org/2014/10/23/354871509/herbie-hancock-on-a-path-to-find-my-own-answer" target="blank">
        <b-carousel-slide img-src="@/assets/Art-3-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="https://afrotech.com/richelieu-dennis-wants-to-turn-madam-c-j-walkers-house-into-an-incubator-for-black-women-entrepreneurs"
        target="blank">
        <b-carousel-slide img-src="@/assets/Art-4-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="https://afrotech.com/nipsey-hussle-the-stem-advocate" target="blank">
        <b-carousel-slide img-src="@/assets/Art-5-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="http://brokenplate.net" target="blank">
        <b-carousel-slide img-src="@/assets/Art-6-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="https://www.npr.org/sections/codeswitch/2014/11/14/363793023/director-gina-prince-bythewood-its-time-to-obliterate-the-term-black-film"
        target="blank">
        <b-carousel-slide img-src="@/assets/Art-7-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="https://www.npr.org/sections/codeswitch/2014/11/14/363793023/director-gina-prince-bythewood-its-time-to-obliterate-the-term-black-film"
        target="blank">
        <b-carousel-slide img-src="@/assets/Art-8-Pic.png" img-height="275"></b-carousel-slide>
      </a>
      <a href="https://www.npr.org/sections/thetwo-way/2014/09/11/347746868/susan-rice-islamic-state-fight-will-not-be-iraq-war-redux"
        target="blank">
        <b-carousel-slide img-src="@/assets/Art-9-Pic.png" img-height="275"></b-carousel-slide>
      </a>
    </b-carousel>
  </div>
</template>

<script>
  // import { Carousel, Slide } from 'vue-carousel';

  export default {
    // components: {
    //   Carousel,
    //   Slide
    // },
    methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      },
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>