<script setup>
import { useState } from "../../composables";

const items = ["home", "about", "work", "skills", "contact"];

const [toggle, setToggle] = useState(false);
</script>

<template>
    <nav class="app__navbar">
        <div class="app__navbar-logo">
            <img src="../../assets/vue.svg" alt="logo" />
        </div>
        <ul class="app__navbar-links">
            <li
                v-for="(item, index) in items"
                :key="`link-${index}`"
                class="app__flex p-text"
            >
                <div />
                <a :href="`#${item}`"> {{ item }}</a>
            </li>
        </ul>

        <div class="app__navbar-menu">
            <v-icon name="co-hamburger-menu" @click="() => setToggle(true)" />
            <div
                v-if="toggle"
                v-motion
                :initial="{ opacity: 0, x: 100 }"
                :enter="{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                        duration: 200,
                        type: 'keyframes',
                        ease: 'easeInOut',
                    },
                }"
            >
                <v-icon name="io-close" @click="() => setToggle(false)" />
                <ul>
                    <li v-for="(item, index) in items" :key="`link-${index}`">
                        <a :href="`#${item}`" @click="() => setToggle(false)">
                            {{ item }}</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.app__navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;
    background: rgba(rgb(255, 255, 255), 0.25);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(rgb(255, 255, 255), 0.15);
    position: fixed;
    z-index: 2;
}

.app__navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 90px;
        height: 20px;
    }

    @media screen and (min-width: 2000px) {
        width: 180px;
        height: 40px;
    }
}

.app__navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
        margin: 0 1rem;
        cursor: pointer;

        flex-direction: column;

        div {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: transparent;
            margin-bottom: 5px;
        }

        a {
            color: var(--gray-colors);
            text-decoration: none;
            flex-direction: column;
            text-transform: uppercase;
            font-weight: 500;

            transition: all 0.3s ease-in-out;

            &:hover {
                color: var(--secondary-color);
            }
        }

        &:hover {
            div {
                background: var(--secondary-color);
            }
        }
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
}

.app__navbar-menu {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--secondary-color);

    transition: all 0.3s ease-in-out;

    svg {
        width: 70%;
        height: 70%;
        color: var(--white-color);
        cursor: pointer;
    }

    div {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 5;
        padding: 1rem;

        width: 80%;
        height: 100vh;

        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;

        background: url("../../assets/bgWhite.png");
        background-color: var(--white-color);
        background-size: cover;
        background-repeat: repeat;

        box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);
        transition: all 0.3s ease-in-out;
        svg {
            width: 35px;
            height: 35px;
            color: var(--secondary-color);
            margin: 0.5rem 1rem;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;

            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

            li {
                margin: 1rem;
                a {
                    color: var(--gray-color);
                    text-decoration: none;
                    font-size: 1rem;
                    text-transform: uppercase;
                    font-weight: 500;

                    transition: all 0.3s ease-in-out;

                    &:hover {
                        color: var(--secondary-color);
                    }
                }
            }
        }
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
}
</style>
