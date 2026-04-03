<script setup lang="ts">
  import typeSpeedTest from "../../assets/typeSpeedTest.jpg";
  import adviceGeneratorApp from "../../assets/adviceGeneratorApp.jpg";
  import ipAddressTracker from "../../assets/ipAddressTracker.jpg";
  import weatherApp from "../../assets/weatherApp.jpg";
  const project1Tag = ["Vue 3", "Vite", "RWD", "Router"];
  const project2Tag = ["Vue 3", "Vite", "RWD", "API"];
  const project3Tag = ["Vue 3", "Vite", "RWD", "API", "Pinia"];
  const project4Tag = ["Vue 3", "Vite", "RWD", "API", "Pinia", "Router"];
</script>

<template>
  <section class="container">
    <div class="title">
      <h1>Project</h1>
      <div class="divider"></div>
    </div>
    <div class="panel">
      <div class="panelItem">
        <h2>TypeSpeedTest</h2>
        <img :src="typeSpeedTest" alt="typeSpeedTest" class="itemImg" />
        <h4>Tag</h4>
        <div class="itemTag">
          <span class="tagItem" v-for="item in project1Tag" :key="item">{{ item }}</span>
        </div>
        <div class="divider2"></div>
        <div class="itemtails">
          <a class="itemButton" href="https://github.com/edkiada/Type-Speed-Test" target="_blank">Source Code</a>
          <a class="itemButton" href="https://edkiada.github.io/Type-Speed-Test/" target="_blank">Live Project</a>
        </div>
      </div>
      <div class="panelItem">
        <h2>AdviceGeneratorApp</h2>
        <img :src="adviceGeneratorApp" alt="typeSpeedTest" class="itemImg" />
        <h4>Tag</h4>
        <div class="itemTag">
          <span class="tagItem" v-for="item in project2Tag" :key="item">{{ item }}</span>
        </div>
        <div class="divider2"></div>
        <div class="itemtails">
          <a class="itemButton" href="https://github.com/edkiada/AdviceGeneratorApp" target="_blank">Source Code</a>
          <a class="itemButton" href="https://edkiada.github.io/AdviceGeneratorApp/" target="_blank">Live Project</a>
        </div>
      </div>
      <div class="panelItem">
        <h2>ipAddressTracker</h2>
        <img :src="ipAddressTracker" alt="typeSpeedTest" class="itemImg" />
        <h4>Tag</h4>
        <div class="itemTag">
          <span class="tagItem" v-for="item in project3Tag" :key="item">{{ item }}</span>
        </div>
        <div class="divider2"></div>
        <div class="itemtails">
          <a class="itemButton" href="https://github.com/edkiada/ipAddressTracker" target="_blank">Source Code</a>
          <a class="itemButton" href="https://edkiada.github.io/ipAddressTracker/" target="_blank">Live Project</a>
        </div>
      </div>
      <div class="panelItem">
        <h2>weatherApp</h2>
        <img :src="weatherApp" alt="typeSpeedTest" class="itemImg" />
        <h4>Tag</h4>
        <div class="itemTag">
          <span class="tagItem" v-for="item in project4Tag" :key="item">{{ item }}</span>
        </div>
        <div class="divider2"></div>
        <div class="itemtails">
          <a class="itemButton" href="https://github.com/edkiada/weatherApp" target="_blank">Source Code</a>
          <a class="itemButton" href="https://edkiada.github.io/weatherApp/" target="_blank">Live Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
  @import "./project.css";
</style>