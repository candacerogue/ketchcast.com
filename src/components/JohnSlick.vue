
<template>
  <div class="slider-container safari_only_slider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <a :href="currentImg.href" target="_blank"> 
          <img :src="currentImg.src"  :alt="currentImg.alt" />
        </a>
      </div>
    </transition-group>
  </div>
</template>

<script>

	export default {		
    data() {
      return {
        images: [
          {
             src: 'http://vps49371.inmotionhosting.com/~yerr/images/Art-1-Pic.png',
             alt: "Julia Collins Transformed The Food Industry Now She's Trying to Save the World",
             href: "https://afrotech.com/julia-collins-transformed-the-food-industry-now-shes-trying-to-save-the-world"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-2-Pic.png",
            alt: "Everette Taylor Wants to Disrupt the Art Industry",
            href: "https://afrotech.com/everette-taylor-wants-to-disrupt-the-art-industry"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-3-Pic.png",
            alt: "Herbie Hancock on a Path to Find my Own Answer",
            href: "https://www.npr.org/2014/10/23/354871509/herbie-hancock-on-a-path-to-find-my-own-answer"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-4-Pic.png",
            alt: "Richelieu Dennis Wants to Turn Madam CJ Walkers House into an Incubator for Black Women Entrepreneurs",
            href: "https://afrotech.com/richelieu-dennis-wants-to-turn-madam-c-j-walkers-house-into-an-incubator-for-black-women-entrepreneurs"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-5-Pic.png",
            alt: "Nipsey Hussle the Stem Advocate",
            href: "https://afrotech.com/nipsey-hussle-the-stem-advocate"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-6-Pic.png",
            alt: "A project",
            href: "http://brokenplate.org/"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-7-Pic.png",
            alt: "Director Gina Prince Bythewood Its Time to Obliterate the Term Black Film",
            href: "https://www.npr.org/sections/codeswitch/2014/11/14/363793023/director-gina-prince-bythewood-its-time-to-obliterate-the-term-black-film"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-8-Pic.png",
            alt: "Susan Rice Islamic State Fight Will Not Be Irage War Redux",
            href: "https://www.npr.org/sections/thetwo-way/2014/09/11/347746868/susan-rice-islamic-state-fight-will-not-be-iraq-war-redux"
          },
          {
            src: "http://vps49371.inmotionhosting.com/~yerr/images/Art-9-Pic.png",
            alt: "What is it about Kendrick Lamar",
            href: "https://www.npr.org/2014/10/28/359340269/what-is-it-about-kendrick-lamar"
          }
        ],
        timer: null,
        currentIndex: 0
      }
    },

    mounted: function () {
      this.startSlide();
    },

    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 2500);
      },
      next: function() {
        this.currentIndex += 1;
      },
      prev: function() {
        this.currentIndex -= 1;
      }
    },

    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
	}
	
</script>

<style lang="scss" scoped>

.slider-container {
  margin-left: 15%; 
  width: 80%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
  visibility: hidden;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height: 375px;
  width:100%;
  object-fit: contain;
}

/* Safari 10.1+ (alternate method) */

  @media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {

      @media only screen and (max-width: 800px) {
        .safari_only_slider {
          position: relative;
          bottom: 90%;
          left: 5%;
        }
      }

     @media only screen and (min-width: 801px) {
        .safari_only_slider {
          position: relative;
          bottom: 70%;
          left: 0%;
        }
      }
    }
  }

</style>

