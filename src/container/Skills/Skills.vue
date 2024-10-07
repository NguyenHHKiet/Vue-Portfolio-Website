<script setup>
import MotionWrap from "../../wrapper/MotionWrap.vue";
import { skillItems, experienceItems } from "../../constants";
</script>

<template>
  <MotionWrap :id="'skills'" :class="'app__skills app__whitebg'">
    <h2 class="head-text">Skills & Experiences</h2>

    <div class="app__skills-container">
      <div class="app__skills-list">
        <div
          v-motion-fade-visible
          class="app__skills-item app__flex"
          v-for="skill in skillItems"
          :key="skill.name"
        >
          <div class="app__flex" :style="`background-color: ${skill.bgColor}`">
            <img :src="skill.icon" :alt="skill.name" />
          </div>
          <p class="p-text">{{ skill.name }}</p>
        </div>
      </div>
      <div class="app__skills-exp">
        <div
          v-motion-fade-visible
          class="app__skills-exp-item"
          v-for="experience in experienceItems"
          :key="experience.year"
        >
          <div class="app__skills-exp-year">
            <p class="bold-text">{{ experience.year }}</p>
          </div>
          <div v-motion class="app__skills-exp-works">
            <div v-for="work in experience.works" :key="work.name">
              <div
                v-motion-pop-visible
                :key="work.name"
                class="app__skills-exp-work"
              >
                <h4 class="bold-text">
                  {{ work.name }}
                </h4>
                <p class="p-text">
                  {{ work.company }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MotionWrap>
</template>

<style lang="scss" scoped>
.app__skills {
  flex: 1;
  width: 100%;
  flex-direction: column;
}

.app__skills-container {
  width: 80%;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
}

.app__skills-list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  margin-right: 5rem;

  @media screen and (max-width: 900px) {
    margin-right: 0;
    justify-content: center;
    align-items: center;
  }
}

.app__skills-item {
  flex-direction: column;
  text-align: center;

  margin: 1rem;

  transition: all 0.3s ease-in-out;

  div {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: white;

    img {
      width: 50%;
      height: 50%;
    }

    &:hover {
      box-shadow: 0 0 25px #ffeaea;
    }

    @media screen and (min-width: 2000px) {
      width: 150px;
      height: 150px;
    }

    @media screen and (max-width: 450px) {
      width: 70px;
      height: 70px;
    }
  }

  p {
    font-weight: 500;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 2000px) {
    margin: 1rem 2rem;

    p {
      margin-top: 1rem;
    }
  }
}

.app__skills-exp {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
  }
}

.app__skills-exp-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;
}

.app__skills-exp-works {
  flex: 1;

  .app__skills-exp-work {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;
    cursor: pointer;

    h4 {
      font-weight: 500;
    }

    p {
      font-weight: 400;
      color: var(--gray-color);
      margin-top: 5px;
    }
  }
}

.app__skills-exp-year {
  margin-right: 3rem;

  p {
    font-weight: 800;
    color: var(--secondary-color);
  }

  @media screen and (max-width: 450px) {
    margin-right: 1rem;
  }
}

.skills-tooltip {
  max-width: 300px !important;
  background-color: var(--white-color) !important;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
  border-radius: 5px !important;
  padding: 1rem !important;
  color: var(--gray-color) !important;
  text-align: center !important;
  line-height: 1.5 !important;
  opacity: 1 !important;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem !important;
    max-width: 500px !important;
    line-height: 2 !important;
  }
}
</style>
