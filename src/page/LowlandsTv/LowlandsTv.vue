<style src="./LowlandsTv.scss" module lang="scss"></style>
<script src="./LowlandsTv.js"></script>

<template>
	<div :class="$style.lowlandstv">
		<div :class="$style.background" ref="pageBg"></div>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Lowlands TV<br/><span>[Video producties]</span></h2>

        <router-link :to="{ name: 'TheGuide' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'Radio3FM' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
    <SubMenuMediaProductions/>
		<div :class="$style.videoWrapper">
			<video width="500" height="300" controls loop :class="$style.video" ref="video">
				<source src="/video/lowlands.mp4" type="video/mp4">
				<source src="/video/lowlands.webm" type="video/webm">
				<source src="/video/lowlands.ogg" type="video/ogg">
				<p>Helaas, je browser ondersteunt geen HTML5 video... Ik ben ermee bezig, kom over enkele dagen even terug!</p>
			</video>
		</div>
	</div>
</template>

