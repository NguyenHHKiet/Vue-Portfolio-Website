<script setup>
// ✅ Declare props at the top level
const props = defineProps({
    active: { type: String },
});

const items = ["home", "about", "work", "skills", "contact"];
</script>

<template>
    <div class="app__navigation">
        <a
            v-for="(item, index) in items"
            :href="`#${item}`"
            :key="item + index"
            class="app__navigation-dot"
            :style="{ 'background-color': active === item ? '#313BAC' : '' }"
        />
    </div>
</template>
