<script setup>
import "./App.scss";

import { Navbar } from "./components";
import { Header, About, Work, Footer } from "./container";
</script>

<template>
    <div class="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Footer />
    </div>
</template>

<style scoped></style>
