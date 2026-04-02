<script setup lang="ts">
  import web from "../../assets/web.svg";
  import UI from "../../assets/UI.svg";
  import learn from "../../assets/learn.svg";
  import app from "../../assets/app.svg";
</script>

<template>
  <section class="container">
    <div class="aboutMe">
      <div class="title">
        <h1>ABOUT ME</h1>
        <div class="divider"></div>
      </div>
      <p>你好，歡迎來到我的作品集！我對軟體開發與尖端技術充滿熱情。</p>
        <p>大一： 探索開發領域，確立了從前後端切入的目標。</p>
        <p>大二： 鑽研 LeetCode 演算法，鍛鍊邏輯思維並維持手感，同時開始接觸前端語言。</p>
        <p>大三： 掌握 HTML / CSS / JavaScript並能熟練運用 Vue 3 框架搭配 Vite、Pinia、Router 開發完整的小型專案。</p>
        <p>雖然開發之路仍有迷茫，但我選擇在迷茫中持續前進!</p>
    </div>
    <div class="whatIdo">
      <div class="title">
        <h2>WHAT I DO</h2>
        <div class="divider"></div>
      </div>
      <div class="panel">
        <article class="panelItem panelBlue">
          <div class="panelTitle">
            <img :src="web" alt="web" class="icon">
            <h3>Web Development</h3>
          </div>
          <p>作為一個developer, 我對vue的強大功能著迷. Pinia和Router讓我能快速又不失擴展性的創建面向使用者的web應用.</p>
        </article>
        <article class="panelItem panelRed">
          <div class="panelTitle">
            <img :src="app" alt="app" class="icon">
            <h3>RWD and Componentization</h3>
          </div>
          <p>我已經開始習慣mobile-first開發了, 且能完全的組件化開發, 組件化不止可以防止CSS命名撞名的情況, 也可以讓整個架構變的可擴充和維護.</p>
        </article>
        <article class="panelItem panelBlue">
          <div class="panelTitle">
            <img :src="UI" alt="UI" class="icon">
            <h3>UI/UX Designing</h3>
          </div>
          <p>製作有視覺吸引力和直覺的使用者介面, 讓使用者體驗達到頂點讓我成就感很高, 以用戶為中心思考會變成我開發主軸.</p>
        </article>
        <article class="panelItem panelRed">
          <div class="panelTitle">
            <img :src="learn" alt="learn" class="icon">
            <h3>Keep Learning</h3>
          </div>
          <p>不斷學習和摸索這個領域的一切, 學習最尖端的技術和工具. </p>
          <q>不管霧多濃...闖進去就對了.</q>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
  @import "./aboutMe.css";
</style>