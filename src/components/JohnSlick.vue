
<template>
  <div class="slider-container">
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
             src: 'https://drive.google.com/uc?export=view&id=11Tba3jPnrdFEof8A1gMeVcAfu9iHZg_z',
             alt: "Julia Collins Transformed The Food Industry Now She's Trying to Save the World",
             href: "https://afrotech.com/julia-collins-transformed-the-food-industry-now-shes-trying-to-save-the-world"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=1lhWGSIm9wJTxQ9oHuqdXTt6-nslTXd8P",
            alt: "Everette Taylor Wants to Disrupt the Art Industry",
            href: "https://afrotech.com/everette-taylor-wants-to-disrupt-the-art-industry"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=1BVXeeN0QZl8ggzPx-gqtDa1K_1JPz-5E",
            alt: "Herbie Hancock on a Path to Find my Own Answer",
            href: "https://www.npr.org/2014/10/23/354871509/herbie-hancock-on-a-path-to-find-my-own-answer"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=1oDWBPYb6SC7Ea3CepcRBhOXU1svCT0JH",
            alt: "Richelieu Dennis Wants to Turn Madam CJ Walkers House into an Incubator for Black Women Entrepreneurs",
            href: "https://afrotech.com/richelieu-dennis-wants-to-turn-madam-c-j-walkers-house-into-an-incubator-for-black-women-entrepreneurs"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=1Uxnt8vS7V1jUQ6l7848yxznZgyg4qptf",
            alt: "Nipsey Hussle the Stem Advocate",
            href: "https://afrotech.com/nipsey-hussle-the-stem-advocate"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=1GPE3X7HdZzpjI7XC3ZjCIeezo8xdrEjY",
            alt: "A project",
            href: "http://brokenplate.org/"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=1BQNKQyMFgzuQkK4HWmzykjWncljqKV81",
            alt: "Director Gina Prince Bythewood Its Time to Obliterate the Term Black Film",
            href: "https://www.npr.org/sections/codeswitch/2014/11/14/363793023/director-gina-prince-bythewood-its-time-to-obliterate-the-term-black-film"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=1pB0vaF10Z20crDBLHMNkV7xKbe1dpTkK",
            alt: "Susan Rice Islamic State Fight Will Not Be Irage War Redux",
            href: "https://www.npr.org/sections/thetwo-way/2014/09/11/347746868/susan-rice-islamic-state-fight-will-not-be-iraq-war-redux"
          },
          {
            src: "https://drive.google.com/uc?export=view&id=16zmhvSVTqCOBb0sLVl3wdObxQIFagiKq",
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
</style>

