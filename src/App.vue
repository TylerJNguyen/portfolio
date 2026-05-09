<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
window.alert("Note: this website is a WIP as I transition my portfolio to Vue.js, not all content is complete yet");
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <RouterLink :to="{name: 'projects'}">Projects</RouterLink>
      <RouterLink :to="{name: 'about'}">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-inline: 80%;
    margin-block: 2rem;
  }

  main {
    width: 60%;
    margin-inline: auto;
  }
</style>
