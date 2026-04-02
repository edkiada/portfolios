<script setup lang="ts">
  import user from "../../assets/mujica.jpg";
  import facebook from "../../assets/facebook.svg";
  import github from "../../assets/github.svg";
  import front from "../../assets/front.svg";
  import IG from "../../assets/IG.svg";
</script>

<template>
  <section class="container">
    <img :src="user" alt="user" class="avatar" />
    <h1>謝 沛宸</h1>
    <p>Front-end Learner</p>
    <div class="socialMedia">
      <a class="iconLink" href="https://www.facebook.com/Nakrothed/?locale=zh_TW" target="_blank">
        <img :src="facebook" alt="facebook" class="icon" />
      </a>
      <a class="iconLink" href="https://github.com/edkiada" target="_blank">
        <img :src="github" alt="github" class="icon" />
      </a>
      <a class="iconLink" href="https://www.frontendmentor.io/profile/edkiada" target="_blank">
        <img :src="front" alt="front" class="icon" />
      </a>
      <a class="iconLink" href="https://www.instagram.com/chen09.02.oho/" target="_blank">
        <img :src="IG" alt="IG" class="icon" />
      </a>
    </div>
  </section>
</template>

<style lang="css" scoped>
  @import "./identity.css";
</style>