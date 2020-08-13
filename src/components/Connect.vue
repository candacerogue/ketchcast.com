<template>
    <div class="connect safari_only">
        <div class="connect__header"></div>
        <div class="connect__ready">
            <img src="../assets/ready.svg" alt="ready">
        </div>

        <div class="connect__connect-links">
            <div class="connect__connect-links__gif"></div>
            <div class="connect__connect-links__img"></div>
        </div>
        <div class="connect__links">
            <span class="connect__connect-links__links__gmail">
                <a href="malito:john.ketchum3@gmail.com">
                    <img style="width: 5vw; height: auto; margin: 3%;" src="../assets/gmail.svg" alt="gmail">
                </a>
            </span>
            <span class="connect__connect-links__links__twitter">
                <a href="https://twitter.com/Ketchcast">
                    <img style="width: 5vw; height: auto; margin: 3%;" src="../assets/twitter-black.svg" alt="twitter">
                </a>
            </span>
            <span class="connect__connect-links__links__linkedIn">
                <a href="https://www.linkedin.com/in/john-ketchum-69156155/">
                    <img style="width: 5vw; height: auto; margin: 3%;" src="../assets/linkedin.svg" alt="linkedin">
                </a>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Connect'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .connect {
        display: flex;
        order: 4;
        width: 100vw;
        height: 70vh;
        flex-direction: column;
        margin-top: 24%;
        margin-bottom: 5%;

        &__header {
            display: flex;
            order: 1;
            flex-direction: column;
            background-image: url(../assets/Background-ready.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 100vw;
            height: 40vh;
        }

        &__ready {
            display: flex;
            order: 2;
            margin-top: -7%;
            ;

            img {
                width: 50vw;
                height: auto;
                margin-left: 5%;
            }
        }

        &__connect-links {
            display: flex;
            order: 3;
            flex-direction: column;
            height: 30vh;
            margin-left: 20%;
            margin-bottom: 2%;

            &__gif {
                order: 1;
                background-image: url(../assets/arrow-electrocution.gif);
                background-repeat: no-repeat;
                background-size: contain;
                width: 40vw;
                height: 30rem;
                position: relative;
                top: -10%;
                z-index: 1;
            }

            &__img {
                order: 2;
                background-image: url(../assets/connect-with-me.svg);
                background-repeat: no-repeat;
                background-size: contain;
                width: 40vw;
                height: 10rem;
                z-index: 99;
                position: relative;
                top: -70%;
                left: 20%;
            }

        }

        &__links {
            order: 4;
            width: 20vw;
            height: 20vh;
            margin-left: 50%;
            position: relative;
            right: 10%;
            bottom: 35%;

            &__gmail {}

            &__twitter {}

            &__linkedIn {}
        }
    }

    @media only screen and (max-width: 1024px) {

        .connect {
            margin-top: 25%;

            &__header {}

            &__ready {

                img {}
            }

            &__connect-links {

                &__img {}

                &__gif {}

            }

            &__links {
                position: relative;
                right: 2%;
                bottom: 32%;

                &__gmail {}

                &__twitter {}

                &__linkedIn {}
            }
        }
    }

    @media only screen and (max-width: 800px) {
        .connect {
            margin-top: 24%;
            &__header {}

            &__ready {

                img {}
            }

            &__connect-links {

                &__img {}

                &__gif {}

            }

            &__links {
                right: 0%;
                left: 10%;
                bottom: 30%;

                &__gmail {}

                &__twitter {}

                &__linkedIn {}
            }
        }
    }

     /* Safari 10.1+ (alternate method) */

     @media not all and (min-resolution:.001dpcm)
    { @supports (-webkit-appearance:none) {

        .connect__connect-links__gif {
            top: 15%;
        }

        .connect__connect-links__img {
                order: 2;
                background-image: url(../assets/to-connect-fallback.png);
                background-repeat: no-repeat;
                background-size: contain;
                width: 40vw;
                height: 10rem;
                z-index: 99;
                position: relative;
                top: -50%;
                left: 20%;
            }

        .connect__links {
            bottom: 25%;
        }

        @media only screen and (max-width: 800px) {

            .connect__links {
                right: 15%;
                left: 0%;
                bottom: 15%;
            }
            .safari_only { 

                 height: 80vh !important;

            }
        }
        @media only screen and (max-width: 425px) {
            .connect__ready {
                margin-top: -15%;
            }
            
            .connect__links {
                left: 0%;
                top: -20%;
            }

            .connect__connect-links__gif {
            top: 0%;
        }

            .connect__connect-links__img {
                    order: 2;
                    background-image: url(../assets/to-connect-fallback.png);
                    background-repeat: no-repeat;
                    background-size: contain;
                    width: 40vw;
                    height: 10rem;
                    z-index: 99;
                    position: relative;
                    top: -60%;
                    left: 20%;
                }
            }
    }}

    @media only screen and (max-width: 425px) {
        .connect {
            height: 45vh;
            &__header {}

            &__ready {

                img {}
            }

            &__connect-links {

                &__img {}

                &__gif {}

            }

            &__links {
                height: 20vh;
                position: relative;
                right: 0%;
                left: 10%;
                bottom: 57%;

                &__gmail {}

                &__twitter {}

                &__linkedIn {}
            }
        }
    }

    @media only screen and (max-width: 375px) {
        .connect {
            &__header {}

            &__ready {

                img {}
            }

            &__connect-links {

                &__img {}

                &__links {
                    margin-top: -65%;
                    position: relative;
                    right: 0%;
                    left: 10%;
                    bottom: 55%;

                    &__gmail {}

                    &__twitter {}

                    &__linkedIn {}
                }
            }
        }
    }

    @media only screen and (max-width: 320px) {
        .connect {
            &__header {}

            &__ready {

                img {}
            }

            &__connect-links {

                &__img {}

                &__links {
                    bottom: 61%;

                    &__gmail {}

                    &__twitter {}

                    &__linkedIn {}
                }
            }
        }
    }
</style>