<script setup lang="ts">
  import education from "../../assets/education.svg";
  const workSkills = ["vue", "JavaScript", "HTML5", "CSS3", "vite", "git", "TypeScript", "Pinia", "Vue Router"];
  const softSkills = ["Problem Solving", "Communication", "Adaptability", "Time Management"];
</script>

<template>
  <section class="container">
    <div class="title">
      <h1>Resume</h1>
      <div class="divider"></div>
    </div>
    <div class="education">
      <div class="educationTitle">
        <img :src="education" alt="education" class="educationIcon" />
        <h2>Education</h2>
      </div>
      <article class="educationItem">
        <span class="time">2025</span>
        <span class="course">Responsive Web Design</span>
        <span>freeCodeCamp</span>
      </article>
      <article class="educationItem">
        <p class="time">2023 - present</p>
        <p class="course">uniersity</p>
        <p>NPTU</p>
      </article>
    </div>
    <div class="Skills">
      <h2>Work Skills</h2>
      <div class="SkillPanel">
        <span class="SkillItem" v-for="item in workSkills" :key="item">{{ item }}</span>
      </div>
    </div>
    <div class="Skills">
      <h2>Soft Skills</h2>
      <div class="SkillPanel">
        <span class="SkillItem" v-for="item in softSkills" :key="item">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
  @import "./resume.css";
</style>