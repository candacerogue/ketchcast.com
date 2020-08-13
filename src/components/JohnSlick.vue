
<template>
	<carousel class="carousel safari_only">
    <slide>
      <a href="https://afrotech.com/julia-collins-transformed-the-food-industry-now-shes-trying-to-save-the-world" target="blank"><img src="@/assets/Art-1-Pic.png" style="height:275px;"></a>
    </slide>
		<slide>
      <a href="https://afrotech.com/everette-taylor-wants-to-disrupt-the-art-industry" target="blank"><img src="@/assets/Art-2-Pic.png" style="height:275px;"></a>
    </slide>
		<slide>
      <a href="https://www.npr.org/2014/10/23/354871509/herbie-hancock-on-a-path-to-find-my-own-answer" target="blank"><img src="@/assets/Art-3-Pic.png" style="height:275px;"></a>
    </slide>
		<slide>
      <a href="https://afrotech.com/richelieu-dennis-wants-to-turn-madam-c-j-walkers-house-into-an-incubator-for-black-women-entrepreneurs" target="blank"><img src="@/assets/Art-4-Pic.png" style="height:275px;"></a>
    </slide>
		<slide>
      <a href="https://afrotech.com/nipsey-hussle-the-stem-advocate" target="blank"><img src="@/assets/Art-5-Pic.png" style="height:275px;"></a>
    </slide>
		<slide>
      <a href="http://brokenplate.org/" target="blank"><img src="@/assets/Art-6-Pic.png" style="height:275px; width: 700px;"></a>
    </slide>
	</carousel>
</template>

<script>
	import { Carousel, Slide } from 'vue-carousel';

	export default {			
    components: {
      Carousel,
      Slide
		}
	}
	
</script>

<style lang="scss" scoped>
  .carousel {
    width: 60vw;
    height: -webkit-fit-content;
    display: flex;

  }

  @media only screen and (max-width: 425px) {
    .carousel {
      width: 100vw;
    }
  }

   /* Safari 10.1+ (alternate method) */

   /* @media not all and (min-resolution:.001dpcm)
    { @supports (-webkit-appearance:none) {

        @media only screen and (max-width: 425px) {
            .safari_only { 
              margin: -27% 0;

            }
        }
    }} */
</style>

