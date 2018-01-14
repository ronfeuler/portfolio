<style src="./SubMenuMediaProductions.scss" module lang="scss"></style>
<script src="./SubMenuMediaProductions.js"></script>

<template>
  <div :class="$style.menu" ref="menu">
    <router-link :to="{ name: PageNames.THEMAKINGOFMEDIA }"><span>The making of media</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.THEGUIDE }"><span>The Guide</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.LOWLANDSTV }"><span>Lowlands TV</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.RADIO3FM }"><span>3FM</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.DOCUMENTAIRE }"><span>Documentaire</span><div :class="$style.circle"></div></router-link>
  </div>
</template>
