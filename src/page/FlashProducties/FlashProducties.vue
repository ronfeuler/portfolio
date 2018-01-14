<style src="./FlashProducties.scss" module lang="scss"></style>
<script src="./FlashProducties.js"></script>

<template>
	<div :class="$style.flashproducties">
		<div :class="$style.background" ref="pageBg">
			<div :class="$style.slider" ref="slide1"></div>
			<div :class="$style.slider" ref="slide2"></div>
			<div :class="$style.slider" ref="slide3"></div>
			<div :class="$style.slider" ref="slide4"></div>
			<div :class="$style.front"></div>
		</div>
    <SubMenuWebDevelopment/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Flash producties</h2>
				<ul>
					<li>VARA Greinz<br/><span>[Technische realisatie online magazine]</span></li>
					<li>The Letter<br/><span>[Technische realisatie]</span></li>
					<li>Merge Media Magazine<br/><span>[Concept, technische realisatie, projectmanagement]</span></li>
					<li>Syntens Innovatie Magazine<br/><span>[Concept, technische realisatie, projectmanagement]</span></li>
					<li>En heel veel Flash producties en banners meer...</li>
				</ul>

        <router-link :to="{ name: 'SocialMedia' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'MediaProducties' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
	</div>
</template>

