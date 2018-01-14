<style src="./TheMakingOfMedia.scss" module lang="scss"></style>
<script src="./TheMakingOfMedia.js"></script>

<template>
	<div :class="$style.tmom">
		<div :class="$style.background" ref="pageBg"></div>
    <SubMenuMediaProductions/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>The making of media</h2>
				<p>Door mijn grote interesse in media ben ik een online serie gestart over de ontwikkelingen in de mediawereld. Deze serie bestaat uit een podcastserie, artikelen en videoreportages. Ik doe de volledige productie zelf.</p>
				<p>Bekijk het resultaat op <a href="http://www.themakingofmedia.nl" target="_blank">themakingofmedia.nl</a></p>

        <router-link :to="{ name: 'MediaProducties' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'TheGuide' }" class="next"><span>&raquo;</span></router-link>
      </div>
		</div>
    <div :class="$style.videoWrapper">
      <div :class="$style.video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/G1VFkC47f90" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
	</div>
</template>

