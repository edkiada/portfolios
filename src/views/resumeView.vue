<script setup lang="ts">
  import identity from "../components/identity/identity.vue";
  import navbar from "../components/navbar/navbar.vue";
  import resume from "../components/resume/resume.vue";
</script>

<template>
  <div class="main">
    <header>
      <identity />
      <navbar />
    </header>
    <main>
      <resume />
    </main>
  </div>
</template>

<style lang="css" scoped>
  @import "../styles/resumeView.css";
</style>