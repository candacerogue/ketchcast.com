<template>
    <div class="working-with-me">
        <div class="working-with-me__content">
            <div class="working-with-me__content__title-content">
                <div class="working-with-me__content__title-content__text">
                    WORKING
                </div>
                <div class="working-with-me__content__title-content__img">
                </div>
            </div>
            <div class="working-with-me__content__slider">
                <!-- <john-slick
                    ref="johnSlick"
                    :options="slickOptions"
                    @setPosition="handleSetPosition"
                >
                <div
                    v-for="(media, index) in medias"
                    :key="index"
                >
                    <img
                        class="gallery-image"
                        src="media.url"
                    >
              </div>
                ></john-slick> -->
            </div>
        </div>
    </div>
</template>

<script>
    // import JohnSlick from './JohnSlick'
    export default {
        name: 'WorkingWithMe',
        // components: { JohnSlick },
        data() {
            return {
                currentSlide: 0,
                slickOptions: {
                    arrows: true,
                    dots: false,
                    infinite: false,
                    slidesToShow: 3,
                    swipe: true
                },
                medias: [
                  { url: "http://placehold.it/400x350" },
                  { url:  "http://placehold.it/400x350" },
                  { url:  "http://placehold.it/400x350" },
                  { url: "http://placehold.it/400x350" },
                  { url:  "http://placehold.it/400x350" },
                  { url:  "http://placehold.it/400x350" }
            ]

            }
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .working-with-me {
        display: flex;
        order: 3;
        width: 100%;
        height: 65vh;
        flex-direction: column;
        margin-top: 8%;
        margin-left: 25%;

        &__content {
            display: flex;
            flex-direction: column;
            background-color: black;
            width: 50%;
            height: 60vh;
            z-index: 1;

            &__title-content {
                width: 50%;
                height: 45rem;
                display: flex;
                flex-direction: column;
                order: 1;

                &__text {
                    font-family: 'Bebas Neue', cursive;
                    font-size: 16vw;
                    color: #BCA80E;
                    width: 50vw;
                    text-align: center;
                    order: 1;
                    position: absolute;
                    margin-top: -3.1%;
                }

                &__img {
                    display: flex;
                    order: 2;
                    background-image: url(../assets/with-me.svg);
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                    width: 50vw;
                    height: 300px;
                    position: absolute;
                    margin-top: 5%;
                }
            }

            &__slider {
                display: flex;
                order: 2;
                z-index: 99;
                width: 100%;
                height: 85vh;
            }
        }

    }

    .gallery-image img {
        width: 400px;
        height: 350px;
        object-fit: contain;
    }

    @media only screen and (max-width: 1440px) {


    .working-with-me {
        
        &__content {

            &__title-content {

                &__text {
                }

                &__img {
                    margin-top: 0%;
                }
            }

            &__slider {
                display: flex;
                order: 2;
                z-index: 99;
                width: 100%;
                height: 85vh;
            }
        }
    }

    .gallery-image img {
        width: 400px;
        height: 350px;
        object-fit: contain;
    }

    .slick-slide, .slick-current, .slick-active {
        width: 25vw !important;
        height: 25vw !important;
    }
    }
</style>