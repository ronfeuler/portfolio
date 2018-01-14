import {AbstractPageTransitionComponent, FlowType, TransitionEvent, ComponentType} from 'vue-transition-component';

import HomeTransitionController from './HomeTransitionController';
import TweenLite from "gsap";

export default {
  name: 'Home',
  beforeCreate() {
    this.flow = FlowType.CROSS;
  },
  beforeRouteLeave(from, to, next) {
    this.$nextTick(next);
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeTransitionController(this);
      this.isReady();
    },
    handleScroll(event) {
      if (event.deltaY > 0) {
        this.$router.push({ name: 'WebDevelopment' });
      }
    },
  },
  mounted() {
    this.$refs.pageBg.style.opacity = 0;
    this.$refs.content.style.opacity = 0;
    TweenLite.to(this.$refs.pageBg, 0.8, {opacity: 1});
    TweenLite.to(this.$refs.content, 0.8, {opacity: 1, delay: 0.4});
  },
  created() {
    document.body.addEventListener('wheel', this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener('wheel', this.handleScroll);
  },
};
