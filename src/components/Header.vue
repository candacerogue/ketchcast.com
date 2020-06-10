<template>
  <div class="header">
    <div class="header__background">
      <div class="header__background__imagery">
        <div class="header__background__imagery__animation">
          <img src="@/assets/JK-GIF-white.gif" />
        </div>
        <div class="header__background__imagery__head">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .header {
    display: flex;
    order: 1;
    background-color: black;
    width: 100%;
    height: 100vh;

    &__background {
      width: 100%;
      height: 100%;
      background-image: url(../assets/Background-frame.png);
      background-repeat: no-repeat;
      background-size: 95% 95%;
      background-position: center;
      position: relative;

      &__imagery {
        position: absolute;
        top: 5%;
        left: 5%;
        width: 100vw;
        height: 75vh;
        display: flex;
        align-self: center;

        &__animation {
          position: relative;
          left: 10%;
          z-index: 99;

          img {
            width: 52vw;
            z-index: 99;
          }
        }

        &__head {
          width: 100%;
          height: auto;
          background-image: url(../assets/JK-Head.png);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: left;
        }
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .header {

      &__background {

        &__imagery {
          top: 15%;

          &__animation {}

          &__head {}
        }
      }
    }

  }

  @media only screen and (max-width: 1024px) {
    .header {

      &__background {

        &__imagery {
          top: 15%;
          right: 7%;

          &__animation {
            img {
              width: 80vw;
            }
          }

          &__head {
            visibility: hidden;
          }
        }
      }
    }

  }

  @media only screen and (max-width: 768px) {
    .header {
      height: 70vh;

      &__background {
        background-image: none;

        &__imagery {
          top: 0%;
          right: 5%;

          &__animation {

            img {
              width: 100vw;
            }
          }

          &__head {
            visibility: hidden;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .header {
      height: 60vh;

      &__background {
        background-image: none;

        &__imagery {
          top: 15%;
          right: 5%;

          &__animation {

            img {}
          }

          &__head {
            visibility: hidden;
          }
        }
      }
    }
  }
</style>