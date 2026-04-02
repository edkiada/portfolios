<script setup lang="ts">
  import identity from "../components/identity/identity.vue";
  import navbar from "../components/navbar/navbar.vue";
  import contact from "../components/contact/contact.vue";
</script>

<template>
  <div class="main">
    <header>
      <identity />
      <navbar />
    </header>
    <main>
      <contact />
    </main>
  </div>
</template>

<style lang="css" scoped>
  @import "../styles/main.css";
</style>