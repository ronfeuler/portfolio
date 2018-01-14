<style src="./Skills.scss" module lang="scss"></style>
<script src="./Skills.js"></script>

<template>
	<div :class="$style.skills">
		<div :class="$style.background" ref="pageBg"></div>
    <SubMenuCV/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Skills</h2>
				<ul :class="$style.toggleitem">
					<li>Frontend developer<br/><span>[o.a. HTML, SCSS, JS, Typescript, Vue.js, Photoshop, CMS templating]</span></li>
          <li>Media producer<br/><span>[Podcast, AV producties, Premiere Pro, After Effects]</span></li>
					<li>Backend developer<br/><span>[PHP, MySQL, Wordpress]</span></li>
					<li>Creative developer<br/><span>[Multimedia projects, Online video producties, Creative marketing campaigns, UX &amp; Interaction design]</span></li>
					<li>Social developer<br/><span>[Facebook apps, Social campaigns]</span></li>
				</ul>

        <router-link :to="{ name: 'Documentaire' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'Werkervaring' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
	</div>
</template>

