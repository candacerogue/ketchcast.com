<template>
    <div class="connect">
        <div class="connect__header"></div>
        <div class="connect__ready">
            <img src="../assets/ready.svg" alt="ready">
        </div>
        <div class="connect__connect-links">
            <div class="connect__connect-links__img">
            </div>
            <div class="connect__connect-links__links">
                <div class="connect__connect-links__links__gmail">
                    <a href="malito:john.ketchum3@gmail.com">
                        <img src="../assets/gmail.svg" alt="gmail">
                    </a>
                </div>
                <div class="connect__connect-links__links__twitter">
                    <a href="https://twitter.com/Ketchcast">
                        <img src="../assets/twitter-black.svg" alt="twitter">
                    </a>
                </div>
                <div class="connect__connect-links__links__linkedIn">
                    <a href="https://www.linkedin.com/in/john-ketchum-69156155/">
                        <img src="../assets/linkedin.svg" alt="linkedin">
                    </a>
                </div>
            </div>
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
        margin-top: 15%;
        margin-bottom: 5%;

        &__header {
            display: flex;
            order: 1;
            z-index: -1;
            flex-direction: column;
            background-image: url(../assets/Background-ready.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 100vw;
            height: 16rem;
        }

        &__ready {
            display: flex;
            order: 2;
            z-index: 1;
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
            max-height: 20vh;

            &__img {
                order: 1;
                background-image: url(../assets/to-connect.svg);
                background-repeat: no-repeat;
                background-size: contain;
                margin-left: 30%;
                width: 60vw;
                height: 16rem;
            }

            &__links {
                order: 2;
                width: 40vw;
                margin-left: 50%;
                margin-top: -4%;
                display: flex;
                flex-direction: row;
                align-items: baseline;
                position: relative;
                top: 2%;

                &__gmail {
                    order: 1;
                    width: 5rem;
                    height: 5rem;
                    margin: 1rem;
                }

                &__twitter {
                    order: 2;
                    width: 5rem;
                    height: 5rem;
                    margin: 1rem;
                }

                &__linkedIn {
                    order: 3;
                    width: 5rem;
                    height: 5rem;
                    margin: 1rem;
                }
            }
        }
    }

@media only screen and (max-width: 1500px) {
    .connect {
        height: 400px;
        margin-top: 10%;

        &__header {
            height: 8rem;
        }

        &__ready {

            img {
            }
        }

        &__connect-links {

            &__img {
            }

            &__links {
                margin-top: -2%;
                top: -20%;

                &__gmail {
                    width: 3rem;
                    height: 3rem;
                }

                &__twitter {
                    width: 3rem;
                    height: 3rem;
                }

                &__linkedIn {
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .connect {
        height: 400px;
        margin-top: 10%;
        margin-bottom: 0%;

        &__header {
            height: 8rem;
        }

        &__ready {

            img {
            }
        }

        &__connect-links {

            &__img {
            }

            &__links {
                margin-top: -2%;
                top: -30%;

                &__gmail {
                }

                &__twitter {
                }

                &__linkedIn {
                }
            }
        }
    }
}

@media only screen and (max-width: 425px) {
    .connect {
        height: 300px;
        margin-top: 15%;
        margin-bottom: 0%;

        &__header {
            height: 4rem;
        }

        &__ready {

            img {
            }
        }

        &__connect-links {
            max-height: 10vh;

            &__img {
            }

            &__links {

                &__gmail {
                    width: 2rem;
                    height: 2rem;
                    margin: .5rem;
                }

                &__twitter {
                    width: 2rem;
                    height: 2rem;
                    margin: .5rem;
                }

                &__linkedIn {
                    width: 2rem;
                    height: 2rem;
                    margin: .5rem;
                }
            }
        }
    }
}
</style>