<style src="./MediaProducties.scss" module lang="scss"></style>
<script src="./MediaProducties.js"></script>

<template>
  <div :class="$style.mediaproducties">
    <div :class="$style.background" ref="pageBg"></div>
    <SubMenuMediaProductions/>
    <div :class="$style.contentWrapper" ref="content">
      <div :class="$style.content">
        <h2>Media producties</h2>
        <ul>
          <li>Het Crypto Valuta Tijdperk<br/><span>[YouTube serie, start begin 2018]</span></li>
          <li>The making of media<br/><span>[Podcast / video serie sinds 2017, <router-link :to="{ name: 'TheMakingOfMedia' }">lees verder</router-link>]</span></li>
          <li>The Guide<br/><span>[Crossmediaal format, <router-link :to="{ name: 'TheGuide' }">lees verder</router-link>]</span></li>
          <li>Lowlands TV<br/><span>[Serie korte video's, <router-link :to="{ name: 'LowlandsTv' }">lees verder</router-link>]</span></li>
          <li>Radio 3FM<br/><span>[Vaste gast, <router-link :to="{ name: 'Radio3FM' }">lees verder</router-link>]</span></li>
          <li>Op Weg Naar Het Wereld Muziek Concours<br/><span>[Documentaire 50 minuten, <router-link :to="{ name: 'Documentaire' }">lees verder</router-link>]</span></li>
        </ul>

        <router-link :to="{ name: 'FlashProducties' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'TheMakingOfMedia' }" class="next"><span>&raquo;</span></router-link>
      </div>
    </div>
  </div>
</template>

