<script setup lang="ts">
  import identity from "../components/identity/identity.vue";
  import navbar from "../components/navbar/navbar.vue";
  import aboutMe from "../components/aboutMe/aboutMe.vue";
</script>

<template>
  <div class="main">
    <header>
      <identity />
      <navbar />
    </header>
    <main>
      <aboutMe />
    </main>
  </div>
</template>

<style lang="css" scoped>
  @import "../styles/main.css";
</style>