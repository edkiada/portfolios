<script setup lang="ts">
  import home from "../../assets/home.svg";
  import resume from "../../assets/resume.svg";
  import project from "../../assets/project.svg";
  import contact from "../../assets/contact.svg";
  import { useRouter, useRoute } from "vue-router";
  import { computed } from "vue";

  const route = useRoute();
  const router = useRouter();
  const currentPath = computed(() => route.path.replace("/", ""));
  const navigateTo = (path: string) => {
    router.push(`/${path}`);
  };
</script>

<template>
  <section class="navbar">
    <button type="button" class="navbarItem" @click="navigateTo('')" :class="{ currentPage: currentPath === ''}">
      <img :src="home" alt="home" class="icon" />
      <span>Home</span>
    </button>
    <button type="button" class="navbarItem" @click="navigateTo('resume')" :class="{ currentPage: currentPath === 'resume'}">
      <img :src="resume" alt="resume" class="icon" />
      <span>Resume</span>
    </button>
    <button type="button" class="navbarItem" @click="navigateTo('project')" :class="{ currentPage: currentPath === 'project'}">
      <img :src="project" alt="project" class="icon" />
      <span>Project</span>
    </button>
    <button type="button" class="navbarItem" @click="navigateTo('contact')" :class="{ currentPage: currentPath === 'contact'}">
      <img :src="contact" alt="contact" class="icon" />
      <span>Contact</span>
    </button>
  </section>
</template>

<style lang="css" scoped>
  @import "./navbar.css";
</style>