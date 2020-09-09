<template>
    <div class="about">
        <div class="about__about-content">
            <div class="about__about-content__img">
            </div>
            <div class="about__about-content__bio">
                Hey there, it’s John. Thanks for coming through and learning a bit more about me. You’re probably
                wondering what I’m all about, so here’s the short version: i’m a journalist dedicated to telling the
                world’s most important stories and putting people in a position to do their best work. Over the past
                decade, I’ve worked in every corner of the media industry as a producer, reporter, and editor. From
                helping launch Marketplace’s Wealth and Poverty Desk, to producing for NPR’s Morning Edition, to running
                social media accounts at CNN, I’ve approached each place I’ve worked with intention, determination, and
                a hunger to drive innovation across the media industry. I’m currently on the startups team at the
                American Journalism Project, where I help launch media organizations across the U.S.<br />
                <br />
                I’ve done a lot and have worked with so many amazing people. Check out the timeline below to see what
                I’ve been up to. Also, if you’d like to check out some of my work, please take a look at some articles
                I’ve written, interactive projects I’ve created, audio interviews I’ve produced, and more.
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
        height: 70vh;
        display: flex;
        order: 2;
        margin-bottom: 25%;

        &__about-content {
            width: 80%;
            height: 50vh;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: baseline;

            &__img {
                display: flex;
                order: 1;
                background-image: url(../assets/About.png);
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
                width: 40vw;
                font-size: 1.4vw;
                padding-top: 8%;
                padding-left: 3%;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .about {
            height: 40vh;

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
            height: 60vh;

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
        }
    }
</style>