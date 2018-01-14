<style src="./Werkervaring.scss" module lang="scss"></style>
<script src="./Werkervaring.js"></script>

<template>
	<div :class="$style.werkervaring">
		<div :class="$style.background" ref="pageBg"></div>
    <SubMenuCV/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Werkervaring</h2>
				<ul>
					<li>MediaMonks<br/><span>[Frontend developer: 2016 - heden]</span></li>
					<li>Merge Media / Emakina<br/><span>[Creative developer &amp; Media producer: 2007 - 2016]</span></li>
					<li>Divers<br/>
						<span>[Freelance werk: vanaf 2003]</span><br/>
						<span>[Stages: VARA, Océ, TU/e, Ti-Host]</span><br/>
						<span>[Vrijwillig verenigingswerk: bouw en onderhoud website Sint Wiro]</span><br/>
						<span>[Maatschappelijk: bouw, beheer en onderhoud Coming Out Zone]</span><br/>
					</li>
				</ul>

        <router-link :to="{ name: 'Skills' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'Studie' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
	</div>
</template>

