<style src="./SubMenuWebDevelopment.scss" module lang="scss"></style>
<script src="./SubMenuWebDevelopment.js"></script>

<template>
  <div :class="$style.menu" ref="menu">
    <router-link :to="{ name: PageNames.SOCIALMEDIA }"><span>Social Media</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.FLASHPRODUCTIES }"><span>Flash Producties</span><div :class="$style.circle"></div></router-link>
  </div>
</template>

