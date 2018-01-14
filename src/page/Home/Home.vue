<style src="./Home.scss" module lang="scss"></style>
<script src="./Home.js"></script>

<template>
  <div :class="$style.page_wrapper">
    <div :class="$style.home">
      <div :class="$style.background" ref="pageBg"></div>
      <div :class="$style.contentWrapper" ref="content">
        <div :class="$style.content">
          <h1>Ron Feuler</h1>
          <h2>Creative Web Developer</h2>
          <p>Een <span>ervaring</span> bieden. Een <span>verhaal</span> vertellen. Iemand <span>vermaken</span>, <span>iets leren</span> of <span>informeren</span>.</p>
          <p>Met een team professionals tot het uiterste gaan om een <span>creatief concept</span> te vertalen naar een <span>gebruiksvriendelijke online beleving</span>. Bij voorkeur met toevoeging van <span>video</span>, <span>animaties</span> en <span>interactieve elementen</span> of in combinatie met <span>media</span>.</p>
          <p>Mijn naam is Ron Feuler, ik noem mijzelf <span>Creative Web Developer</span>, simpelweg omdat mijn interesses breder zijn dan enkel frontend of backend ontwikkeling.</p>

          <router-link :to="{ name: 'WebDevelopment' }" class="next"><span>&raquo;</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
