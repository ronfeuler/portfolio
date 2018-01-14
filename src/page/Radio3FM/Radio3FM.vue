<style src="./Radio3FM.scss" module lang="scss"></style>
<script src="./Radio3FM.js"></script>

<template>
	<div :class="$style.radio3fm">
		<div :class="$style.background" ref="pageBg"></div>
    <SubMenuMediaProductions/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>3FM Martijn Muijs<br/><span>[Vaste gast]</span></h2>

        <router-link :to="{ name: 'LowlandsTv' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'Documentaire' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
		<div :class="$style.videoWrapper">
			<video width="500" height="300" controls loop :class="$style.video" ref="video">
				<source src="/video/muijs.mp4" type="video/mp4">
				<source src="/video/muijs.webm" type="video/webm">
				<source src="/video/muijs.ogg" type="video/ogg">
				<p>Helaas, je browser ondersteunt geen HTML5 video... Ik ben ermee bezig, kom over enkele dagen even terug!</p>
			</video>
		</div>
	</div>
</template>

