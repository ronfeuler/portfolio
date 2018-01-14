<style src="./WebDevelopment.scss" module lang="scss"></style>
<script src="./WebDevelopment.js"></script>

<template>
	<div :class="$style.webdevelopment">
		<div :class="$style.background" ref="pageBg">
			<div :class="$style.slider" ref="slide1"></div>
			<div :class="$style.slider" ref="slide2"></div>
			<div :class="$style.slider" ref="slide3"></div>
			<div :class="$style.slider" ref="slide4"></div>
			<div :class="$style.slider" ref="slide5"></div>
			<div :class="$style.slider" ref="slide6"></div>
			<div :class="$style.front"></div>
		</div>
    <SubMenuWebDevelopment/>
		<div :class="$style.contentWrapper" ref="content">
			<div :class="$style.content">
				<h2>Web development [Frontend, Backend, Concept]</h2>
				<ul>
					<li>Websites, Big Builds en Communities<br/><span>[o.a. voor General Electric, Unilever]</span></li>
					<li>Online campagnes<br/><span>[o.a. voor Heineken, Lego, Veteranendag]</span></li>
					<li>Social media campagnes<br/><span>[<router-link :to="{ name: 'SocialMedia' }">zie voorbeelden</router-link>]</span></li>
					<li>Flash producties<br/><span>[<router-link :to="{ name: 'FlashProducties' }">zie voorbeelden</router-link>]</span></li>
				</ul>

        <router-link :to="{ name: 'Home' }" class="prev"><span>&laquo;</span></router-link>
        <router-link :to="{ name: 'SocialMedia' }" class="next"><span>&raquo;</span></router-link>
			</div>
		</div>
	</div>
</template>

