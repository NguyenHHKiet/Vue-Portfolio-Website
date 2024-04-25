<script setup>
import { useState } from "../../composables";
import MotionWrap from "../../wrapper/MotionWrap.vue";

import { images } from "../../constants";

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
});
const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const { username, email, message } = formData;

const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = () => {
    setLoading(true);

    const contact = {
        _type: "contact",
        name: formData.username,
        email: formData.email,
        message: formData.message,
    };
    console.log(contact);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
};
</script>

<template>
    <MotionWrap :id="'contact'" :class="'app__footer app__whitebg'">
        <h2 class="head-text">Take a coffee & chat with me</h2>

        <div class="app__footer-cards">
            <div class="app__footer-card">
                <img :src="images.email" alt="email" />
                <a href="mailto:nhoangkiet35@gmail.com" class="p-text">
                    nhoangkiet35@gmail.com
                </a>
            </div>
            <div class="app__footer-card">
                <img :src="images.mobile" alt="phone" />
                <a href="tel:+84 914 162 505" class="p-text">
                    +84 914 162-505
                </a>
            </div>
        </div>
        <div class="app__footer-form app__flex" v-if="!isFormSubmitted">
            <div class="app__flex">
                <input
                    class="p-text"
                    type="text"
                    placeholder="Your Name"
                    name="username"
                    :value="username"
                    :onChange="handleChangeInput"
                />
            </div>
            <div class="app__flex">
                <input
                    class="p-text"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    :value="email"
                    :onChange="handleChangeInput"
                />
            </div>
            <div>
                <textarea
                    class="p-text"
                    placeholder="Your Message"
                    name="message"
                    :value="message"
                    :onChange="handleChangeInput"
                />
            </div>
            <button type="button" class="p-text" @click="handleSubmit">
                {{ !loading ? "Send Message" : "Sending..." }}
            </button>
        </div>
        <div v-else>
            <h3 class="head-text">Thank you for getting in touch!</h3>
        </div>
    </MotionWrap>
</template>

<style lang="scss" scoped>
.app__footer {
    flex: 1;
    width: 100%;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
}

.app__footer-cards {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 4em 2rem 2rem;

    .app__footer-card {
        min-width: 290px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        margin: 1rem 0;
        padding: 1rem;
        border-radius: 10px;
        cursor: pointer;
        background-color: #fef4f5;

        transition: all 0.3s ease-in-out;

        img {
            width: 40px;
            height: 40px;
            margin: 0 0.7rem;
        }

        p {
            font-weight: 500;
        }
        a {
            text-decoration: none;
            font-weight: 500;
        }
        &:hover {
            box-shadow: 0 0 25px #fef4f5;
        }

        @media screen and (max-width: 450px) {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
}

.app__footer-cards .app__footer-card:last-child {
    background-color: #f2f7fb;
}

.app__footer-cards .app__footer-card:last-child:hover {
    box-shadow: 0 0 25px #f2f7fb;
}

.app__footer-form {
    width: 60%;
    flex-direction: column;
    margin: 1rem 2rem;

    div {
        width: 100%;

        margin: 0.75rem 0;
        border-radius: 10px;
        cursor: pointer;
        background-color: var(--primary-color);

        transition: all 0.3s ease-in-out;

        input,
        textarea {
            width: 100%;
            padding: 0.95rem;
            border: none;
            border-radius: 7px;
            background-color: var(--primary-color);

            font-family: var(--font-base);
            color: var(--secondary-color);
            outline: none;
        }

        textarea {
            height: 170px;
        }

        &:hover {
            box-shadow: 0 0 25px var(--primary-color);
        }
    }

    button {
        padding: 1rem 2rem;
        border-radius: 10px;
        border: none;
        background-color: var(--secondary-color);

        font-weight: 500;
        color: var(--white-color);
        outline: none;
        margin: 2rem 0 0 0;
        font-family: var(--font-base);

        transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
        cursor: pointer;

        &:hover {
            background-color: #2430af;
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 1rem 0;
    }
}
</style>
