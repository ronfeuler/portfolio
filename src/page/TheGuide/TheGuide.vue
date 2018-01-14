<style src="./TheGuide.scss" module lang="scss"></style>
<script src="./TheGuide.js"></script>

<template>
	<div :class="$style.theguide">
		<div :class="$style.background" ref="pageBg"></div>
    <SubMenuMediaProductions/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Crossmediaal concept: The Guide 2006<br/><span>[Afstudeerproject, concept + productie]</span></h2>

        <router-link :to="{ name: 'TheMakingOfMedia' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'LowlandsTv' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
		<div :class="$style.videoWrapper">
			<video width="500" height="300" controls loop :class="$style.video" ref="video">
				<source src="/video/theguide.mp4" type="video/mp4">
				<source src="/video/theguide.webm" type="video/webm">
				<source src="/video/theguide.ogg" type="video/ogg">
				<p>Helaas, je browser ondersteunt geen HTML5 video... Ik ben ermee bezig, kom over enkele dagen even terug!</p>
			</video>
		</div>
	</div>
</template>

