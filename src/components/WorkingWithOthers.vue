<template>
  <div class="working-with-others">
    <div class="working-with-others__title-content">
      <div class="working-with-others__title-content__text">
        WORKING
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
    height: 95vh;
    margin-top: 10%;

    &__title-content {
      width: 100%;
      height: 40vh;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: baseline;
      order: 1;
      position: relative;
      top: -10%;

      &__text {
        font-family: 'Bebas Neue', cursive;
        font-size: 20vw;
        color: white;
        width: 56%;
        text-align: left;
      }

      &__img {
        display: flex;
        order: 1;
        background-image: url(../assets/with-others.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 44%;
      }
    }

    &__timeline {
      display: flex;
      order: 2;
      width: 100%;
      height: 60vh;
      margin-left: 5%;
    }
  }

  @media only screen and (max-width: 1440px) {

    .working-with-others {
      height: 80vh;
      padding-bottom: 5%;

      &__title-content {
        top: -5%;

        &__text {}

        &__img {
          height: 20vh;
          position: relative;
          top: 5%;
        }
      }

      &__timeline {}
    }
  }

  @media only screen and (max-width: 768px) {

    .working-with-others {
      height: 70vh;

      &__title-content {

        &__text {}

        &__img {
          top: 0%;
        }
      }

      &__timeline {}
    }
  }

  @media only screen and (max-width: 425px) {

    .working-with-others {
      height: 55vh;

      &__title-content {
        top: -2%;

        &__text {}

        &__img {
          top: -15%;
        }
      }

      &__timeline {
        position: relative;
        bottom: 10%;
      }
    }
  }
</style>