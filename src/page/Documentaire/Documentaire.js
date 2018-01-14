import {AbstractPageTransitionComponent, FlowType} from 'vue-transition-component';
import TweenLite from 'gsap';
import DocumentaireTransitionController from './DocumentaireTransitionController';
import SubMenuMediaProductions from "../../component/SubMenuMediaProductions";

export default {
  name: 'Documentaire',
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
      this.transitionController = new DocumentaireTransitionController(this);
      this.isReady();
    },
    handleScroll(event) {
      if (event.deltaY < 0) {
        this.$router.push({ name: 'Radio3FM' });
      }
      if (event.deltaY > 0) {
        this.$router.push({ name: 'Skills' });
      }
    },
  },
  mounted() {
    this.$refs.pageBg.style.opacity = 0;
    this.$refs.content.style.opacity = 0;
    TweenLite.to(this.$refs.pageBg, 0.8, { opacity: 1 });
    TweenLite.to(this.$refs.content, 0.8, { opacity: 1, delay: 0.4 });
    this.$refs.video.volume = 0.5;
    this.$refs.video.play();
  },
  created() {
    document.body.addEventListener('wheel', this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener('wheel', this.handleScroll);
  },
};
