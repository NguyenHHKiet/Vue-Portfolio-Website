<script setup>
import { NavigationDots, SocialMedia } from "../components";
// ✅ Declare props at the top level
const props = defineProps({
    id: { type: String },
});
</script>

<template>
    <div
        v-motion-slide-visible-bottom
        :id="id"
        class="app__container"
        style="flex-direction: row; align-items: center"
    >
        <SocialMedia />
        <div class="app__wrapper app__flex">
            <div :class="`app__wrapper app__flex`">
                <slot />
            </div>
            <div class="copyright">
                <p class="p-text">@2024 Shell</p>
                <p class="p-text">All rights reserved</p>
            </div>
        </div>
        <NavigationDots :active="id" />
    </div>
</template>
