import {AbstractPageTransitionComponent, FlowType} from 'vue-transition-component';
import TweenLite from 'gsap';
import StudieTransitionController from './StudieTransitionController';
import SubMenuCV from "../../component/SubMenuCV";

export default {
  name: 'Studie',
  beforeCreate() {
    this.flow = FlowType.CROSS;
  },
  beforeRouteLeave(from, to, next) {
    this.$nextTick(next);
  },
  extends: AbstractPageTransitionComponent,
  components: {
    SubMenuCV,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new StudieTransitionController(this);
      this.isReady();
    },
    handleScroll(event) {
      if (event.deltaY < 0) {
        this.$router.push({ name: 'Werkervaring' });
      }
      if (event.deltaY > 0) {
        this.$router.push({ name: 'Contact' });
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
