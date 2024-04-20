<script setup>
import { images } from "../../constants";
</script>

<template>
    <header class="app__header app__flex" id="home">
        <div
            v-motion-roll-visible-left
            :initial="{ opacity: 0, x: -100 }"
            :enter="{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 200,
                },
            }"
            class="app__header-info"
        >
            <div class="app__header-badge">
                <div class="badge-cmp app__flex">
                    <span>✌️</span>
                    <div style="margin-left: 20px">
                        <p class="p-text">Hello, I am</p>
                        <h1 class="head-text">Shell</h1>
                    </div>
                </div>

                <div class="tag-cmp app_flex">
                    <p class="p-text">Web Developer</p>
                    <p class="p-text">Freelancer</p>
                </div>
            </div>
        </div>

        <div
            v-motion-pop-visible
            :initial="{ opacity: 0 }"
            :enter="{
                opacity: 1,
                transition: {
                    duration: 500,
                    delay: 500,
                },
            }"
            class="app__header-img"
        >
            <img :src="images.profile" alt="profile_bg" />
            <img
                v-motion-pop-visible
                :initial="{ scale: 0 }"
                :enter="{
                    scale: 1,
                    transition: {
                        duration: 1000,
                        type: 'keyframes',
                        ease: 'easeInOut',
                    },
                }"
                :src="images.circle"
                class="overlay_circle"
            />
        </div>

        <div
            v-motion-pop-visible
            :initial="{ opacity: 0, scale: 0 }"
            :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1000,
                    ease: 'easeInOut',
                },
            }"
            class="app__header-circles"
        >
            <div
                v-for="(circle, index) in [
                    images.react,
                    images.redux,
                    images.sass,
                ]"
                :key="`circle-${index}`"
                class="circle-cmp app__flex"
            >
                <img :src="circle" alt="circle" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
#home {
    position: relative;
    background: url("../../assets/bgIMG.png");
    background-size: cover;
    background-repeat: repeat;
    background-position: center;

    .app__wrapper {
        padding: 0;
        .copyright {
            display: none;
        }
    }
}

.app__header {
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: row;

    padding: 6rem 2rem 0;

    @media screen and (min-width: 2000px) {
        padding-top: 8rem;
    }
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
    @media screen and (max-width: 450px) {
        padding: 6rem 1rem 2rem;
    }
}

.app__header-info {
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;

    @media screen and (max-width: 2000px) {
        width: 100%;
        margin-right: 0;
    }
}

.app__header-badge {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    .badge-cmp,
    .tag-cmp {
        padding: 1rem 2rem;
        border: var(--white-color);
        border-radius: 15px;
        flex-direction: row;
        width: auto;

        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    .tag-cmp {
        flex-direction: column;
        margin-top: 3rem;

        p {
            width: 100%;
            text-transform: uppercase;
            text-align: right;
        }
    }

    span {
        font-size: 2.5rem;
        @media screen and (min-width: 2000px) {
            font-size: 5rem;
        }
    }

    @media screen and (max-width: 1200px) {
        justify-content: flex-start;
        align-items: flex-start;
    }
}

.app__header-circles {
    flex: 0.75;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    margin-left: 1rem;

    div {
        width: 100px;
        height: 100px;
        border-radius: 50%;

        background: var(--white-color);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

        img {
            width: 60%;
            height: 60%;
        }
    }

    div:nth-child(1) {
        width: 100px;
        height: 100px;
    }
    div:nth-child(2) {
        margin: 1.75rem;
        width: 150px;
        height: 150px;
    }
    div:nth-child(3) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 2000px) {
        div:nth-child(1) {
            width: 400px;
            height: 400px;
        }
        div:nth-child(2) {
            width: 170px;
            height: 170px;
        }
        div:nth-child(3) {
            width: 200px;
            height: 200px;
        }
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 0;

        div {
            margin: 1rem;
        }
    }
}

.app__header-img {
    flex: 1;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;

    img {
        width: 100%;
        object-fit: contain;
        z-index: 1;
    }

    .overlay_circle {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        width: 100%;
        height: 90%;
    }

    @media screen and (max-width: 1200px) {
        margin: 2rem 0;
    }
}
</style>
