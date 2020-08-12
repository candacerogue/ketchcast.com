<template>
    <div class="follow-me">
        <div class="follow-me__content">
            <div class="follow-me__content__title-content">
                <div class="follow-me__content__title-content__text">
                    Follow Me On
                </div>
                <div class="follow-me__content__title-content__img">
                    <img src="../assets/twitter-white.svg" alt="twitter">
                </div>
            </div>
        </div>
        <div class="follow-me__timeline">
            <Timeline id="ketchcast" sourceType="profile" :options="{ tweetLimit: '5', theme: 'dark'}"/>
        </div>
    </div>
</template>

<script>
    import { Timeline } from 'vue-tweet-embed'
    
    export default {
        name: 'FollowMe',
        components: { Timeline }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .follow-me {
        display: flex;
        order: 5;
        width: 100%;
        height: auto;
        flex-direction: column;

        &__content {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            background-color: black;
            width: 65%;
            height: 90vh;
            order: 1;
            z-index: -1;

            &__title-content {
                height: 45rem;
                display: flex;
                flex-direction: column;
                order: 1;

                &__text {
                    font-family: 'Bebas Neue', cursive;
                    font-size: 10vw;
                    color: white;
                    text-align: center;
                    order: 1;
                    margin-top: 3%;
                }

                &__img {
                    display: flex;
                    order: 2;
                    width: auto;
                    height: 150px;
                    justify-content: center;

                    img {
                        width: 7rem;
                        height: auto;
                    }
                }
            }
        }

        &__timeline {
            display: flex;
            order: 2;
            z-index: 1;
            position: relative;
            bottom: 400px;
            margin: 0 auto;

            #twitter-widget-0 {
                width: 600px !important;
                /* height: 800px !important; */
                box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.5), 0 6px 22px 0 rgba(0, 0, 0, 0.5);
            }
        }
    }

    @media only screen and (max-width: 1440px) {
        .follow-me__timeline {
            bottom: 300px;
        }
    }
    @media only screen and (max-width: 1024px) {

        .follow-me {

            &__content {
                width: 100%;
                height: 75vh;

                &__title-content {

                    &__text {}

                    &__img {
                        height: 75px;

                        img {
                            width: 10vw;
                        }
                    }
                }
            }

            &__timeline {
                bottom: 250px;

                #twitter-widget-0 {
                    width: 500px !important;
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {

        .follow-me {

            &__content {
                width: 100%;
                height: 30rem;

                &__title-content {

                    &__text {}

                    &__img {
                        height: 75px;

                        img {
                            width: 10vw;
                        }
                    }
                }
            }

            &__timeline {
                bottom: 250px;

                #twitter-widget-0 {
                    width: 500px !important;
                }
            }
        }
    }

    @media only screen and (max-width: 425px) {
        .follow-me {
            margin-top: -30%;

            &__content {
                height: 25rem;

                &__title-content {

                    &__text {}

                    &__img {

                        img {}
                    }
                }
            }

            &__timeline {

                #twitter-widget-0 {
                    width: 300px !important;
                }
            }
        }
    }
</style>