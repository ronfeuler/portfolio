<style src="./SocialMedia.scss" module lang="scss"></style>
<script src="./SocialMedia.js"></script>

<template>
	<div :class="$style.socialmedia">
		<div :class="$style.background" ref="pageBg">
			<div :class="$style.slider" ref="slide1"></div>
			<div :class="$style.slider" ref="slide2"></div>
			<div :class="$style.slider" ref="slide3"></div>
			<div :class="$style.slider" ref="slide4"></div>
			<div :class="$style.slider" ref="slide5"></div>
			<div :class="$style.slider" ref="slide6"></div>
			<div :class="$style.slider" ref="slide7"></div>
			<div :class="$style.front"></div>
		</div>
    <SubMenuWebDevelopment/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Social media</h2>
				<ul>
					<li>Veteranendag Virtuele Erehaag<br/><span>[Concept, UX, videoproductie, Flash realisatie]</span></li>
					<li>Joulz Kabeltrekkerz<br/><span>[Facebook app, concept, technische realisatie]</span></li>
					<li>Social Media Expert presentaties</li>
					<li>Westcon Essentials<br/><span>[Sociaal platform, concept, technische realisatie]</span></li>
					<li>Bonduelle Pittige tantes<br/><span>[Facebook app, technische realisatie]</span></li>
					<li>En vele apps meer...</li>
				</ul>

        <router-link :to="{ name: 'WebDevelopment' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'FlashProducties' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
	</div>
</template>

