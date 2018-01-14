<style src="./Studie.scss" module lang="scss"></style>
<script src="./Studie.js"></script>

<template>
	<div :class="$style.studie">
		<div :class="$style.background" ref="pageBg"></div>
    <SubMenuCV/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Studie</h2>
				<ul>
					<li>Hogeschool voor de Kunsten Utrecht - Digital Media Design<br/><span>[2003 - 2007, BA, EMMA]</span></li>
					<li>Fontys Hogescholen - Hogere Informatica<br/><span>[1999 - 2003, BA]</span></li>
				</ul>

        <router-link :to="{ name: 'Werkervaring' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'Contact' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
	</div>
</template>

