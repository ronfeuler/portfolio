<style src="./Documentaire.scss" module lang="scss"></style>
<script src="./Documentaire.js"></script>

<template>
	<div :class="$style.documentaire">
		<div :class="$style.background" ref="pageBg"></div>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Documentaire 'Op weg naar het Wereld Muziek Concours' 2005<br/><span>[Open studieproject, volledige productie]</span></h2>

        <router-link :to="{ name: 'Radio3FM' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'Skills' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
    <SubMenuMediaProductions/>
		<div :class="$style.videoWrapper">
			<video width="500" height="300" controls loop :class="$style.video" ref="video">
				<source src="/video/wmc.mp4" type="video/mp4">
				<source src="/video/wmc.webm" type="video/webm">
				<source src="/video/wmc.ogg" type="video/ogg">
				<p>Helaas, je browser ondersteunt geen HTML5 video... Ik ben ermee bezig, kom over enkele dagen even terug!</p>
			</video>
		</div>
	</div>
</template>

