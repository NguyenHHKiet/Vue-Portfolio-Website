<script setup>
import { useState } from "../../composables";
import MotionWrap from "../../wrapper/MotionWrap.vue";
import { images } from "../../constants";

const [abouts, setAbouts] = useState([]);
const items = [
  {
    title: "Frontend Development",
    imgUrl: images.about01,
    description: "I am a good frontend",
  },
  {
    title: "Fullstack Development",
    imgUrl: images.about02,
    description: "I am a good fullstack",
  },
  {
    title: "Mobile Development",
    imgUrl: images.about03,
    description: "I am a good react native",
  },
  {
    title: "NodeJS Development",
    imgUrl: images.about04,
    description: "I am a good node.js",
  },
];
</script>

<template>
  <MotionWrap :id="'about'" :class="'app__whitebg app__about'">
    <h2 class="head-text">
      I know that <span>Good Apps</span>
      <br />
      means <span>Good Business</span>
      <br />
      and <span>Good Life</span>.
    </h2>

    <div v-motion-slide-visible-bottom class="app__profiles">
      <div
        :initial="{ opacity: 1 }"
        :hovered="{ scale: 1.1 }"
        :enter="{
          transition: { duration: 500 },
          scale: 1,
        }"
        v-for="(about, index) in items"
        :key="about.title + index"
        class="app__profile-item"
      >
        <img :src="about.imgUrl" :alt="about.title" />
        <h2 class="bold-text" style="margin-top: 20px">
          {{ about.title }}
        </h2>
        <p class="p-text" style="margin-top: 10px">
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
