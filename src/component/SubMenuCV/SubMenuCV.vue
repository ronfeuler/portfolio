<style src="./SubMenuCV.scss" module lang="scss"></style>
<script src="./SubMenuCV.js"></script>

<template>
  <div :class="$style.menu" ref="menu">
    <router-link :to="{ name: PageNames.SKILLS }"><span>Skills</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.WERKERVARING }"><span>Werkervaring</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.STUDIES }"><span>Studies</span><div :class="$style.circle"></div></router-link>

  </div>
</template>
