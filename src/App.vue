<script setup>
import "./App.scss";

import { Navbar } from "./components";
import { Header, About, Work, Footer, Skills } from "./container";
</script>

<template>
  <div class="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>
</template>

<style scoped></style>
