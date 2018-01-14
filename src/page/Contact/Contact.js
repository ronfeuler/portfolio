import {AbstractPageTransitionComponent, FlowType} from 'vue-transition-component';
import TweenLite from 'gsap';
import ContactTansitionController from './ContactTansitionController';

export default {
  name: 'Contact',
  beforeCreate() {
    this.flow = FlowType.CROSS;
  },
  beforeRouteLeave(from, to, next) {
    this.$nextTick(next);
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ContactTansitionController(this);
      this.isReady();
    },
    handleScroll(event) {
      if (event.deltaY < 0) {
        this.$router.push({ name: 'Studie' });
      }
      if (event.deltaY > 0) {
        this.$router.push({ name: 'Home' });
      }
    },
  },
  mounted() {
    this.$refs.pageBg.style.opacity = 0;
    this.$refs.content.style.opacity = 0;
    TweenLite.to(this.$refs.pageBg, 0.8, { opacity: 1 });
    TweenLite.to(this.$refs.content, 0.8, { opacity: 1, delay: 0.4 });
  },
  created() {
    document.body.addEventListener('wheel', this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener('wheel', this.handleScroll);
  },
};
