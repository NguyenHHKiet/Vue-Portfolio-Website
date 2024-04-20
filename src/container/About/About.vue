<script setup>
import { useState } from "../../composables";
import MotionWrap from "../../wrapper/MotionWrap.vue";

const [abouts, setAbouts] = useState([]);
</script>

<template>
    <MotionWrap :id="'about'">
        <h2 class="head-text">
            I know that <span>Good Apps</span>
            <br />
            means <span>Good Business</span>
            <br />
            and <span>Good Life</span>.
        </h2>

        <div class="app__profiles">
            <div
                v-motion
                :initial="{ opacity: 1 }"
                :hovered="{ scale: 1.1 }"
                :enter="{
                    transition: { duration: 500 },
                    scale: 1,
                }"
                v-for="(about, index) in [
                    { title: 'About', imgUrl: 'img', description: 'about' },
                    { title: 'Index', imgUrl: 'img', description: 'index' },
                ]"
                :key="about.title + index"
                class="app__profile-item"
            >
                <img :src="about.imgUrl" :alt="about.title" />
                <h2 className="bold-text" style="margin-top: 20px">
                    {{ about.title }}
                </h2>
                <p className="p-text" style="margin-top: 10px">
                    {{ about.description }}
                </p>
            </div>
        </div>
    </MotionWrap>
</template>

<style lang="scss" scoped>
.app__about {
    flex: 1;
    width: 100%;
    flex-direction: column;
}

.app__profiles {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.app__profile-item {
    width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 2rem;

    img {
        width: 100%;
        height: 170px;
        border-radius: 15px;
        object-fit: cover;
    }

    @media screen and (min-width: 2000px) {
        width: 370px;
        margin: 2rem 4rem;

        img {
            height: 320px;
        }
    }
}
</style>
