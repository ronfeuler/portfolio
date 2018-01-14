<style src="./Contact.scss" module lang="scss"></style>
<script src="./Contact.js"></script>

<template>
	<div :class="$style.contact">
		<div :class="$style.background" ref="pageBg"></div>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Contact</h2>
				<p>
					<a href="https://www.linkedin.com/in/ronfeuler" target="_blank" :class="$style.linkedin"><span>LinkedIn</span></a>
					<a href="https://www.facebook.com/ronfeuler" target="_blank" :class="$style.facebook"><span>Facebook</span></a>
					<a href="https://twitter.com/ronfeuler" target="_blank" :class="$style.twitter"><span>Twitter</span></a>
				</p>

        <router-link :to="{ name: 'Studie' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'Home' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
	</div>
</template>

