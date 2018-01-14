import {AbstractPageTransitionComponent, FlowType} from 'vue-transition-component';
import TweenLite from 'gsap';
import FlashProductiesTransitionController from './FlashProductiesTransitionController';
import SubMenuWebDevelopment from "../../component/SubMenuWebDevelopment";

export default {
  name: 'FlashProducties',
  beforeCreate() {
    this.flow = FlowType.CROSS;
  },
  beforeRouteLeave(from, to, next) {
    this.$nextTick(next);
  },
  extends: AbstractPageTransitionComponent,
  components: {
    SubMenuWebDevelopment,
  },
  data() {
    return {
      currentSlide: 10,
      slideTimer: null,
    };
  },
  methods: {
    setBackgroundImageSize() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const imgWidth = 1600;
      const imgHeight = 1000;

      if (window.outerWidth < 768) {
        // mobile
        this.$refs.pageBg.style.top = '0px';
        this.$refs.pageBg.style.left = '0px';
        this.$refs.pageBg.style.width = '100%';
        this.$refs.pageBg.style.height = '63vw';
      } else if ((windowWidth / windowHeight) > (imgWidth / imgHeight)) {
        // desktop breed window
        const newHeight = Math.ceil((windowWidth / imgWidth) * imgHeight);
        const newTop = Math.round((windowHeight - newHeight) / 2);
        this.$refs.pageBg.style.top = `${newTop.toString()}px`;
        this.$refs.pageBg.style.left = '0px';
        this.$refs.pageBg.style.width = `${windowWidth.toString()}px`;
        this.$refs.pageBg.style.height = `${newHeight.toString()}px`;
      } else {
        // desktop small window
        const newWidth = Math.ceil((windowHeight / imgHeight) * imgWidth);
        const newLeft = Math.round((windowWidth - newWidth) / 2);
        this.$refs.pageBg.style.top = '0px';
        this.$refs.pageBg.style.left = `${newLeft.toString()}px`;
        this.$refs.pageBg.style.width = `${newWidth.toString()}px`;
        this.$refs.pageBg.style.height = `${windowHeight.toString()}px`;
      }
    },
    startSlider() {
      this.slideTimer = setInterval(() => {
        this.currentSlide += 1;
        if (this.currentSlide > 4) {
          this.currentSlide = 1;
          this.$refs.slide2.style.opacity = 0;
          this.$refs.slide3.style.opacity = 0;
          TweenLite.to(this.$refs.slide4, 0.8, {opacity: 0});
        } else {
          TweenLite.to(this.$refs[`slide${this.currentSlide}`], 0.8, {opacity: 1});
        }
      }, 3000);
    },
    handleAllComponentsReady() {
      this.transitionController = new FlashProductiesTransitionController(this);
      this.isReady();
    },
    handleScroll(event) {
      if (event.deltaY < 0) {
        this.$router.push({ name: 'SocialMedia' });
      }
      if (event.deltaY > 0) {
        this.$router.push({ name: 'MediaProducties' });
      }
    },
  },
  mounted() {
    this.setBackgroundImageSize();
    window.addEventListener('resize', this.setBackgroundImageSize);
    this.startSlider();
    this.$refs.pageBg.style.opacity = 0;
    this.$refs.content.style.opacity = 0;
    TweenLite.to(this.$refs.pageBg, 0.8, { opacity: 1 });
    TweenLite.to(this.$refs.content, 0.8, { opacity: 1, delay: 0.4 });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setBackgroundImageSize);
    clearInterval(this.slideTimer);
  },
  created() {
    document.body.addEventListener('wheel', this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener('wheel', this.handleScroll);
  },
};
