import {AbstractPageTransitionComponent, FlowType} from 'vue-transition-component';
import TweenLite from 'gsap';
import TheGuideTransitionController from './TheGuideTransitionController';
import SubMenuMediaProductions from "../../component/SubMenuMediaProductions";

export default {
  name: 'TheGuide',
  beforeCreate() {
    this.flow = FlowType.CROSS;
  },
  beforeRouteLeave(from, to, next) {
    this.$nextTick(next);
  },
  extends: AbstractPageTransitionComponent,
  components: {
    SubMenuMediaProductions,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new TheGuideTransitionController(this);
      this.isReady();
    },
    handleScroll(event) {
      if (event.deltaY < 0) {
        this.$router.push({ name: 'TheMakingOfMedia' });
      }
      if (event.deltaY > 0) {
        this.$router.push({ name: 'LowlandsTv' });
      }
    },
  },
  mounted() {
    this.$refs.video.volume = 0.5;
    this.$refs.video.play();
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
