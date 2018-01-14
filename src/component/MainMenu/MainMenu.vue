<style src="./MainMenu.scss" module lang="scss"></style>
<script src="./MainMenu.js"></script>

<template>
  <div :class="$style.menu" ref="menu">
    <router-link :to="{ name: PageNames.HOME }"><span>Home</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.WEBDEVELOPMENT }"><span>Web Development</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.SOCIALMEDIA }" :class="$style.sub"><span>Social Media</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.FLASHPRODUCTIES }" :class="$style.sub"><span>Flash producties</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.MEDIAPRODUCTIES }"><span>Media Producties</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.THEMAKINGOFMEDIA }" :class="$style.sub"><span>The making of media</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.THEGUIDE }" :class="$style.sub"><span>The Guide</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.LOWLANDSTV }" :class="$style.sub"><span>Lowlands TV</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.RADIO3FM }" :class="$style.sub"><span>Radio 3FM</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.DOCUMENTAIRE }" :class="$style.sub"><span>Documentaire</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.SKILLS }"><span>CV</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.WERKERVARING }" :class="$style.sub"><span>Werkervaring</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.STUDIES }" :class="$style.sub"><span>Studies</span><div :class="$style.circle"></div></router-link>
    <router-link :to="{ name: PageNames.CONTACT }"><span>Contact</span><div :class="$style.circle"></div></router-link>
  </div>
</template>
