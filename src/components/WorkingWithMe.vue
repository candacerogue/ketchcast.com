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
              <john-slick></john-slick>
            </div>
            <!-- <div class="prompt">Use Cursor to Scroll</div> -->
        </div>
    </div>
</template>

<script>
    import JohnSlick from './JohnSlick'
    export default {
        name: 'WorkingWithMe',
        components: { JohnSlick }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .working-with-me {
        display: flex;
        order: 3;
        width: 50%;
        height: 65vh;
        flex-direction: column;
        margin: auto;

        &__content {
            display: flex;
            flex-direction: column;
            background-color: black;
            width: 100%;
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
                height: 55vh;
                margin-top: 40%;
                margin-left: -10%;
            }
        }

    }

    /* .prompt {
        order: 3; 
        position: relative; 
        top: 50%;
        text-align: center;
        font-family: 'Bebas Neue', cursive;
        font-size: 2.5vw;
    } */

    @media only screen and (max-width: 1440px) {
        .working-with-me {
            
            &__content {
                height: 55vh;
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
                    height: 55vh;
                }
            }
        }

    }

    @media only screen and (max-width: 1024px) {

        .working-with-me {
            height: 60vh;
            
            &__content {
                height: 60vh;
                width: 50vw;
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
                    height: 55vh;
                    margin-top: 50%;
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {

        .working-with-me {
            height: 55vh;
            
            &__content {
                height: 45vh;
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
                    height: 45vh;
                    margin-top: 55%;
                }
            }
        }
    }

    @media only screen and (max-width: 425px) {

        .working-with-me {
            width: 100vw;
            height: 50vh;
            margin-left: 0%;
            margin-bottom: 10%;
            
            &__content {
                width: 100vw;
                height: 45vh;

                &__title-content {

                    &__text {
                    }

                    &__img {
                        width: 100vw;
                        margin-top: -15%;
                    }
                }

                &__slider {
                    display: flex;
                    order: 2;
                    z-index: 99;
                    width: 100%;
                    height: 45vh;
                    margin-top: 35%;
                    margin-left: 0%;
                }
            }
        }
    }
</style>