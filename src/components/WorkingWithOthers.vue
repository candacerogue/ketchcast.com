<template>
  <div class="working-with-others">
    <div class="working-with-others__title-content">
      <div class="working-with-others__title-content__text">
        WORK
      </div>
      <div class="working-with-others__title-content__img">
      </div>
    </div>
    <div class="working-with-others__timeline">
      <Timeline />
    </div>
  </div>
</template>

<script>
  import Timeline from './Timeline.vue'

  export default {
    name: 'WorkingWithOthers',
    components: { Timeline }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .working-with-others {
    display: flex;
    flex-direction: column;
    order: 3;
    background-color: #9E9E9E;
    width: 100%;
    height: 100vh;
    margin: 10% 0;

    &__title-content {
      width: 100%;
      height: 18%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: baseline;
      order: 1;
      position: relative;
      top: -7%;

      &__text {
        font-family: 'Bebas Neue', cursive;
        font-size: 20vw;
        color: white;
        width: 56%;
        text-align: left;
      }

      /* &__img {
        display: flex;
        order: 1;
        background-image: url(../assets/with-others.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 44%;
      } */
    }

    &__timeline {
      display: flex;
      order: 2;
      width: 100%;
      height: 80vh;
      margin-left: 5%;
      margin-top: 5%;
    }
  }

  @media only screen and (max-width: 1440px) {

    .working-with-others {
      height: 100vh;
      padding-bottom: 5%;
      margin-top: 0%;

      &__title-content {
        top: -5%;
        height: 25vh;

        &__text {
          
        }

        /* &__img {
          height: 20vh;
          position: relative;
          top: 5%;
        } */
      }

      &__timeline {
        height: 75vh;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .working-with-others {
      margin-top: 25%;

      &__title-content {

        &__text {
          
        }

        /* &__img {
          height: 20vh;
          position: relative;
          top: 5%;
        } */
      }

      &__timeline {
      }
    }
  }

  @media only screen and (max-width: 768px) {

    .working-with-others {
      height: 100vh;
      margin-top: 20%;

      &__title-content {
        height: 15vh;

        &__text {
          font-size: 25vw;
        }

        /* &__img {
          top: 0%;
        } */
      }

      &__timeline {
        height: 85vh;
        margin-top: 10%;
      }
    }
  }

  @media only screen and (max-width: 425px) {

    .working-with-others {
      height: 80vh;
      margin-top: 75%;

      &__title-content {
        top: -2%;

        &__text {}

        /* &__img {
          top: -15%;
        } */
      }

      &__timeline {
        position: relative;
      }
    }
  }

    @media only screen and (max-width: 425px) {

    .working-with-others {
      height: 80vh;
      margin-top: 75%;

      &__title-content {
        top: -2%;
        margin-bottom: 5%;

        &__text {}

        /* &__img {
          top: -15%;
        } */
      }

      &__timeline {
        position: relative;

      }
    }
  }
</style>