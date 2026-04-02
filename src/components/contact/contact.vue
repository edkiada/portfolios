<script setup lang="ts">
  import phone from "../../assets/phone.svg";
  import email from "../../assets/mail.svg";
  import location from "../../assets/map.svg";
</script>

<template>
  <section class="container">
    <div class="title">
      <h1>Contact</h1>
      <div class="divider"></div>
    </div>
    <div class="panel">
      <div class="panelItem">
        <img :src="phone" alt="phone" class="icon">
        <div class="content">
          <p class="contentTitle">Phone</p>
          <p>+886 985179158</p>
        </div>
      </div>
      <div class="divider2"></div>
      <div class="panelItem">
        <img :src="email" alt="email" class="icon">
        <div class="content">
          <p class="contentTitle">Email</p>
          <p>yyh901277111@gmail.com</p>
        </div>
      </div>
      <div class="divider2"></div>
      <div class="panelItem">
        <img :src="location" alt="location" class="icon">
        <div class="content">
          <p class="contentTitle">Location</p>
          <p>Tainan, Taiwan</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
  @import "./contact.css"
</style>