<script setup lang="ts">
  import identity from "../components/identity/identity.vue";
  import navbar from "../components/navbar/navbar.vue";
  import project from "../components/project/project.vue";
</script>

<template>
  <div class="main">
    <identity class="identity"/>
    <navbar class="navbar"/>
    <project class="content"/>
  </div>
</template>

<style lang="css" scoped>
  @import "../styles/main.css";
</style>