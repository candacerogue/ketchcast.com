<template>
  <div class="header">
    <div class="header__background">
      <div class="header__background__imagery">
        <div
          v-if="$mq === 'laptop'"
          class="header__background__imagery__animation safari_only_header"
        >
          <video width="500" height="500" autoplay loop muted playsinline>
            <source src="../assets/JK Header Gif.mp4" type="video/mp4">
          </video>
        </div>
        <div
          v-else-if="$mq === 'mobile'"
          class="header__background__imagery__animation"
        >
          <video width="300" height="300" poster="../assets/JK-Header-Img.png" autoplay loop muted playsinline>
            <source src="../assets/JK Header Gif.mp4" type="video/mp4">
          </video>
        </div>
        <div
          v-else
          class="header__background__imagery__animation"
        >
          <img src="../assets/JK-Header-Img.png"/>
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
      width: 100vw;
      height: 100vh;
      background-image: url(../assets/Background-frame.svg);
      background-repeat: no-repeat;
      background-size: 95% 95%;
      background-position: center;
      position: relative;

      &__imagery {
        position: relative;
        top: 10%;
        left: 15%;
        width: 100vw;
        height: 75vh;
        display: flex;
        align-self: center;
        display: flex;
        align-content: center;

        &__animation {
          position: relative;
          z-index: 99;
          width: 100vw;
          height: auto;
          z-index: 99;

          img {
            width: 35vw;
          }
        }

        &__head {
          width: 100%;
          height: auto;
          background-image: url(../assets/JK-Head.png);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          position: relative;
          right: 28%;
          bottom: 7%;
        }
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .header {

      &__background {
        margin: 0 auto;

        &__imagery {
          top: 15%;
          left: 20%;

          &__animation {

            img {
               position: relative;
               top: 0%;
               left: 10%;
            }
          }

          &__head {
           
          }
        }
      }
    }

  }

  @media only screen and (max-width: 1024px) {
    .header {

      &__background {

        &__imagery {
          top: 15%;
          left: 15%;


          &__animation {
            img {
              width: 50vw;
            }
          }

          &__head {
            right: 30%;
            bottom: 5%
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .header {
      height: 90vh;

      &__background {
        background-image: none;

        &__imagery {
          top: 0%;

          &__animation {

            img {
              width: 85vw;
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
      height: 80vh !important;

      &__background {

        &__imagery {
          top: 10%;

          &__animation {

            img {
              width: 50vw;
            }
          }

          &__head {
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .header {

      &__background {

        &__imagery {
          left: 10%;

          &__animation {

            img {
            }
          }

          &__head {
          }
        }
      }
    }
  }

  @media only screen and (max-width: 325px) {
    .header {
      &__background {

        &__imagery {
          position: relative;
          left: 0%;

          &__animation {

            img {
            }
          }

          &__head {
          }
        }
      }
    }
  }

/* Safari 10.1+ (alternate method) */

  @media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
      
      .safari_only_header {
        position: relative;
        top: 40%;
      }
    }
  }
</style>