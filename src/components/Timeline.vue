<template>
    <div class="scrolling-wrapper-flexbox">
        <!-- <div class="card" id="even" style="margin-left: 150px;">
            <div class="dropdown-even">
                Working with a team of brilliant journalism,business, and product minds to launch media companies across the U.S.
            </div>
            <div class="title-even">
                <span>2020</span>
                <img src="../assets/AJP-Logo.png" alt="AJP-Logo">
            </div>
        </div> -->
        <div class="card" id="even" style="margin-left: 100px;">
            <div class="dropdown-even">
                Working with a team of journalism, product, and finance experts to launch sustainable media
                organizations across the country.
            </div>
            <div class="title-even safari_only_others">
                <span>2020</span>
                <img src="../assets/AJP-Logo.png" alt="AJP-Logo">
            </div>
        </div>
        <div class="card" id="odd">
            <div class="title">
                <span>2020</span>
                <img src="../assets/Plug.png" alt="The-Plug-Logo">
            </div>
            <div class="dropdown">
                Editing stories and managing projects on the Black Innovation economy.
            </div>
        </div>
        <!-- <div class="card" id="odd">
            <div class="title">
                <span>2019</span>
                <img src="../assets/Vox-Media-Podcast-Network.png" alt="Vox-Podcast-Logo">
            </div>
            <div class="dropdown">
                Spent three months serving as Managing Producer on a tech podcast launch.
            </div>
        </div> -->
        <div class="card" id="even">
            <div class="dropdown-even">
                Helped launch an editorial brand (Afrotech) focused on technology and how it impacts people of color.
            </div>
            <div class="title-even safari_only_others" style="margin-top: -6%">
                <span>2018-2019</span>
                <img src="../assets/Blavity-logo.png" alt="Blavity-Logo">
            </div>
        </div>
        <div class="card" id="odd">
            <div class="title">
                <span>2017</span>
                <img src="../assets/Poynter.png" alt="Pontyer-Logo">
            </div>
            <div class="dropdown">
                Participated in Poynter’s media leadership training with newsroom managers from around the world.
            </div>
        </div>
        <div class="card" id="even">
            <div class="dropdown-even">
                Board member helping the center on strategy and curriculum.
            </div>
            <div class="title-even safari_only_others">
                <span>2017</span>
                <img src="../assets/WVMIC.jpeg" alt="WVMIC-Logo">
            </div>
        </div>
        <div class="card" id="odd">
            <div class="title">
                <span>2017-2018</span>
                <img src="../assets/SBNation.jpg" alt="SBNation-Logo">
            </div>
            <div class="dropdown" style="margin-top: -5%;">
                Served as Deputy Editor for SB Nation, Vox Media’s sports website. I helped lead the day-to-day and
                managed a staff of producers, editors, and writers on night coverage.
            </div>
        </div>
        <div class="card" id="even">
            <div class="dropdown-even">
                Served as a Knight Innovator in residence while at CNN. I taught a class on food justice reporting and
                audience engagement.
            </div>
            <div class="title-even safari_only_others">
                <span>2016</span>
                <img src="../assets/WVMS.jpeg" alt="WVMS-Logo">
            </div>
        </div>
        <div class="card" id="odd">
            <div class="title">
                <span>2015</span>
                <img src="../assets/CNN.png" alt="CNN-Logo" style="width: 130px;">
            </div>
            <div class="dropdown" style="margin-top: -5%;">
                Worked on CNN’s inaugural social media team that was put in place before the 2016 election. My focus was
                optimizing content for Facebook, Twitter, and Instagram.
            </div>
        </div>
        <div class="card" id="even">
            <div class="dropdown-even">
                Built and led audience engagement strategy around investigative journalism.
            </div>
            <div class="title-even safari_only_others">
                <span>2015</span>
                <img src="../assets/Center-for-Public-Integrity.jpg" alt="Center-For-Public-Integrity-Logo">
            </div>
        </div>
        <div class="card" id="odd">
            <div class="title">
                <span>2014</span>
                <img src="../assets/NPR.png" alt="NPR-Logo">
            </div>
            <div class="dropdown">
                Worked as a producer for NPR’s Morning Edition creating content for broadcast and the web.
            </div>
        </div>
        <div class="card" id="even">
            <div class="dropdown-even">
                Worked with a team of journalist to launch a desk covering wealth, poverty, and income inequality after
                the financial crash of 2008.
            </div>
            <div class="title-even safari_only_others">
                <span>2012-2014</span>
                <img src="../assets/Marketplace.jpg" alt="Marketplace-Logo">
            </div>
        </div>
        <div class="card last" id="odd" style="margin-left: 10px;">
            <div class="title">
                <span>2008-2011</span>
                <img src="../assets/WCMU.jpg" alt="WCMU-Logo">
            </div>
            <div class="dropdown">
                Covered local politics and general news.
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Timeline',
        data() {
            return {
                clicked: true
            }
        }
    }
</script>
<style lang="scss">
    .scrolling-wrapper-flexbox {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        background-image: url(../assets/timeline-line.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
        width: 100vw;
        height: 55vh;

        &::-webkit-scrollbar {
            display: none;
        }

        .card {
            flex: 0 0 auto;
            color: white;
            width: 25vw;
            height: 30vw;
            flex-direction: column;
        }

        #odd {
            background-image: url(../assets/line-item.svg);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            width: 30vw;
            height: 28vh;
            display: flex;
            flex-direction: column;

            .title {
                order: 1;
                display: flex;
                flex-direction: row;
                position: relative;
                left: 90%;
                padding-left: 5%;

                img {
                    width: 250px;
                    height: 75px;
                    object-fit: contain;
                }

                span {
                    font-weight: bold;
                    font-size: 2.3vw;
                    margin-right: 5%;
                    white-space: nowrap;
                }
            }

            .dropdown {
                order: 2;
                position: relative;
                left: 90%;
                top: 5%;
                font-size: 1rem;
                padding: 5%;
            }
        }

        #even {
            position: relative;
            top: 50%;
            background-image: url(../assets/line-item-bottom.svg);
            background-repeat: no-repeat;
            background-size: contain;
            width: 30vw;
            height: 25vh;
            display: flex;
            flex-direction: column;

        }

        .dropdown-even {
            order: 1;
            position: relative;
            left: 55%;
            font-size: 1rem;
            padding: 5%;
        }

        .title-even {
            order: 2;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            position: relative;
            left: 55%;
            top: 0%;
            padding-left: 5%;

            img {
                width: 250px;
                height: 75px;
                object-fit: contain;
            }

            span {
                font-weight: bold;
                font-size: 2.3vw;
                margin-right: 5%;
                white-space: nowrap;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        .scrolling-wrapper-flexbox {
            &::-webkit-scrollbar {}

            .card {}

            #odd {

                .title {
                    left: 90%;

                    img {}

                    span {
                    }
                }

                .dropdown {
                    left: 90%;
                    width: 39vw;
                }
                .title {

                    img {}

                    span {}
                }
            }

            #even {}

            .dropdown-even {
                left: 70%;
                width: 35vw;
                padding: 5%;
            }

            .title-even {
                left: 70%;
                top: -15%;
                padding: 5%;

                img {}

                span {}
            }

        }
    }

    @media only screen and (max-width: 768px) {
        .scrolling-wrapper-flexbox {
            height: 53vh;
            &::-webkit-scrollbar {}

            .card {
                margin-left: 10%;
            }

            #odd {
                width: 30vw;
                height: 28vh;

                .title {
                    left: 100%;

                    img {}

                    span {
                    }
                }

                .dropdown {
                    left: 100%;
                    width: 49vw;
                    padding: 2%;
                }
            }

            #even {}

            .dropdown-even {
                left: 100%;
                width: 49vw;
                height: 25vh;
                padding: 2%;
            }

            .title-even {
                left: 100%;
                top: 0%;

                img {}

                span {
                }
            }

        }
    }

    @media only screen and (max-width: 425px) {
        .scrolling-wrapper-flexbox {
            height: 48vh;

            &::-webkit-scrollbar {
                height: 40vh;
            }

            .card {
                margin-left: 5%;
            }

            #odd {
                .title {
                    order: 1;
                    display: flex;
                    flex-direction: row;
                    position: relative;
                    left: 110%;

                    img {
                        width: 200px;
                        height: 50px;
                    }

                    span {
                        font-size: 2.5vw;
                    }
                }

                .dropdown {
                    left: 110%;
                    top: 3%;
                    font-size: 2.5vw;
                    width: 50vw;
                }
            }

            #even {
                padding: 5%;
            }

            .dropdown-even {
                order: 1;
                position: relative;
                left: 75%;
                font-size: 2.5vw;
                width: 50vw;
            }

            .title-even {
                order: 2;
                display: flex;
                flex-direction: row;
                align-items: center;
                position: relative;
                left: 75%;
                top: -15%;

                img {
                    width: 200px;
                    height: 50px;
                }

                span {
                    font-weight: bold;
                    font-size: 2.5vw;
                    margin-right: 5%;
                    white-space: nowrap;
                }
            }
        }

        .card .last {
            width: 50vw !important;
        }
    }

    @media only screen and (max-width: 375px) {
        .scrolling-wrapper-flexbox {
            height: 43vh;

            &::-webkit-scrollbar {}

            .card {
                margin-left: 15%;
            }

            #odd {
                margin-right: 25%;

                .title {
                    order: 1;
                    display: flex;
                    flex-direction: row;
                    position: relative;
                    left: 80%;
                    margin-left: 15%;

                    img {
                        width: 190px;
                        height: 40px;
                    }

                    span {
                        font-size: 3.7vw;
                    }
                }

                .dropdown {
                    left: 80%;
                    top: 3%;
                    font-size: 3.7vw;
                    width: 300px;
                    margin-left: 25%;
                }
            }

            #even {
                margin-left: 5%;
                height: 27vh;
            }

            .dropdown-even {
                order: 1;
                position: relative;
                /* left: 100%; */
                font-size: 3.7vw;
                margin-bottom: 20%;
                width: 240px;
                margin-left: 45%;
            }

            .title-even {
                order: 2;
                display: flex;
                flex-direction: row;
                align-items: center;
                position: relative;
                /* left: 100%; */
                top: -27%;
                margin-left: 45%;

                img {
                    width: 190px;
                    height: 40px;
                }

                span {
                    font-weight: bold;
                    font-size: 3.7vw;
                    margin-right: 5%;
                    white-space: nowrap;
                }
            }
        }

        .card .last {
            width: 50vw !important;
        }
    }

    @media only screen and (max-width: 325px) {
        .scrolling-wrapper-flexbox {
            height: 40vh;

            &::-webkit-scrollbar {}

            .card {}

            #odd {
                width: 55vw;
                height: 20vh;
                margin-right: 15%;

                .title {
                    left: 90%;

                    img {}

                    span {
                    }
                }

                .dropdown {
                    left: 90%;
                }
            }

            #even {
                width: 55vw;
                height: 15vh;
            }

            .dropdown-even {
                left: 70%;
                width: 260px;
            }

            .title-even {
                left: 70%;
                top: -45%;

                img {}

                span {
                }
            }

        }
    }


   /* Safari 10.1+ (alternate method) */

   @media not all and (min-resolution:.001dpcm){ 
       @supports (-webkit-appearance:none) {

            @media only screen and (max-width: 1024px) {
                .safari_only_others { 
                        top: 20% !important;  
                }

            }

        }
    }
</style>