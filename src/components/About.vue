<template>
    <div class="about">
        <div class="about__about-content">
            <div class="about__about-content__img">
            </div>
            <div class="about__about-content__bio">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .about {
        width: 100%;
        height: 50vh;
        display: flex;
        order: 2;
        margin-bottom: 7%;

        &__about-content {
            width: 80%;
            height: 40vh;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: baseline;

            &__img {
                display: flex;
                order: 1;
                background-image: url(../assets/About.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                width: 40vw;
                padding-top: 50%;
            }

            &__bio {
                display: flex;
                order: 2;
                align-content: center;
                width: 30vw;
                font-size: 1.5vw;
                padding-top: 8%;
                padding-left: 3%;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .about {
            height: 30vh;

            &__about-content {
                width: 85%;

                &__bio {
                font-size: 1.7vw;
            }
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .about {

            &__about-content {
                flex-direction: column;

                &__img {
                    width: 80vw;
                    height: 20vh;
                }

                &__bio {
                    display: flex;
                    order: 2;
                    align-content: center;
                    width: 80vw;
                    height: 10vh;
                    padding: 0rem;
                    padding-top: 0rem;
                    font-size: 3.5vw;
                }
            }
        }
    }

    @media only screen and (max-width: 425px) {
        .about {
            height: 50vh;
        }
    }
</style>