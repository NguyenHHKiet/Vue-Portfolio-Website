<script setup>
import { useState } from "../../composables";
import MotionWrap from "../../wrapper/MotionWrap.vue";

const items = [
    {
        title: "E-commerce Website Frontend",
        description: "Project name: Building an e-commerce website",
        projectLink: "https://rjs-asm03-nguyenhhkiet.vercel.app/",
        codeLink: "https://github.com/NguyenHHKiet/ecommerce_website_frontend",
        imgUrl: "https://raw.githubusercontent.com/NguyenHHKiet/ecommerce_website_frontend/master/image.png",
        tags: ["React JS", "Web App"],
    },
    {
        title: "Movie Website Frontend",
        description: "Project name: Building a movie watching website",
        projectLink: "https://movie-website-frontend.vercel.app/",
        codeLink: "https://github.com/NguyenHHKiet/movie_website_frontend",
        imgUrl: "https://raw.githubusercontent.com/NguyenHHKiet/movie_website_frontend/master/image.png",
        tags: ["React JS", "Web App"],
    },
    {
        title: "Devcamper API",
        description:
            "Project name: Create a real-world backend for a bootcamp directory app",
        projectLink: "https://devcamper-api-one.vercel.app/",
        codeLink: "https://github.com/NguyenHHKiet/devcamper-api",
        imgUrl: "https://i.ytimg.com/vi/EsUL2bfKKLc/sddefault.jpg",
        tags: ["Node JS"],
    },
    {
        title: "REST API SERVER BOUTIQUE APPLE",
        description: "Project name: REST API SERVER BOUTIQUE APPLE",
        projectLink: "https://server-boutique-tau.vercel.app/",
        codeLink: "https://github.com/NguyenHHKiet/server-boutique",
        imgUrl: "https://i.ytimg.com/vi/EsUL2bfKKLc/sddefault.jpg",
        tags: ["Node JS"],
    },
];

const [filterWork, setFilterWork] = useState([...items]);
const [activeFilter, setActiveFilter] = useState("All");

const handleWorkFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
        if (item === "All") {
            setFilterWork(items);
        } else {
            setFilterWork(items.filter((work) => work.tags.includes(item)));
        }
    }, 500);
};
</script>

<template>
    <MotionWrap :id="'work'" :className="'app__works app__primarybg'">
        <h2 class="head-text">My Creative <span>Portfolio</span> Section</h2>

        <div class="app__work-filter">
            <div
                v-for="(item, index) in [
                    'Web App',
                    'Mobile App',
                    'React JS',
                    'Node JS',
                    'All',
                ]"
                :key="index"
                @click="() => handleWorkFilter(item)"
                :class="`app__work-filter-item app__flex p-text ${
                    activeFilter === item ? 'item-active' : ''
                }`"
            >
                {{ item }}
            </div>
        </div>

        <div class="app__work-portfolio">
            <div
                v-motion-slide-visible-bottom
                class="app__work-item app__flex"
                v-for="(work, index) in filterWork"
                :key="index"
            >
                <div class="app__work-img app__flex">
                    <img :src="work.imgUrl" :alt="work.name" />
                    <div
                        v-motion
                        :initial="{ opacity: 0 }"
                        :visible="{
                            opacity: 0,
                        }"
                        :hovered="{ opacity: 1 }"
                        :enter="{
                            opacity: 0,
                            transition: {
                                duration: 250,
                                ease: 'easeInOut',
                            },
                        }"
                        class="app__work-hover app__flex"
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                            :href="work.projectLink"
                        >
                            <div
                                v-motion
                                :initial="{ scale: 1 }"
                                :enter="{
                                    scale: 1,
                                    transition: {
                                        duration: 250,
                                    },
                                }"
                                :hovered="{ scale: 0.8 }"
                                class="app__flex"
                            >
                                <v-icon name="bi-eye-fill" />
                            </div>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            :href="work.codeLink"
                        >
                            <div
                                v-motion
                                :initial="{ scale: 1 }"
                                :enter="{
                                    scale: 1,
                                    transition: {
                                        duration: 250,
                                    },
                                }"
                                :hovered="{ scale: 0.8 }"
                                class="app__flex"
                            >
                                <v-icon name="bi-github" /></div
                        ></a>
                    </div>
                </div>
                <div class="app__work-content app__flex">
                    <h4 class="bold-text">{{ work.title }}</h4>
                    <p class="p-text" style="margin-top: 10px">
                        {{ work.description }}
                    </p>
                    <div class="app__work-tag app__flex">
                        <p class="p-text">{{ work.tags[0] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </MotionWrap>
</template>

<style lang="scss" scoped>
.app__works {
    flex: 1;
    width: 100%;
    flex-direction: column;
}

.app__work-filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin: 4rem 0 2rem;

    .app__work-filter-item {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: var(--white-color);
        color: var(--black-color);
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 0.5rem;

        &:hover {
            background-color: var(--secondary-color);
            color: var(--white-color);
        }

        @media screen and (min-width: 2000px) {
            padding: 1rem 2rem;
            border-radius: 0.85rem;
        }
    }

    .item-active {
        background-color: var(--secondary-color);
        color: var(--white-color);
    }
}

.app__work-portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .app__work-item {
        width: 270px;
        flex-direction: column;

        margin: 2rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--white-color);
        color: var(--black-color);

        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
        }

        @media screen and (min-width: 2000px) {
            width: 470px;
            padding: 1.25rem;
            border-radius: 0.75rem;
        }

        @media screen and (max-width: 300px) {
            width: 100%;
            margin: 1rem;
        }
    }
}

.app__work-img {
    width: 100%;
    height: 230px;

    position: relative;

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
    }

    @media screen and (min-width: 2000px) {
        height: 350px;
    }
}

.app__work-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;

    div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;

        margin: 1rem;
        font-family: var(--font-base);
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;

        svg {
            width: 50%;
            height: 50%;
            color: var(--white-color);
        }
    }
}

.app__work-content {
    padding: 0.5rem;
    width: 100%;
    position: relative;
    flex-direction: column;

    h4 {
        margin-top: 1rem;
        line-height: 1.5;
    }

    .app__work-tag {
        position: absolute;

        padding: 0.5rem 1rem;
        border-radius: 10px;
        background-color: white;
        top: -25px;
    }
}
</style>
