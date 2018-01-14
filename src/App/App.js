import {FlowManager, AbstractRegistrableComponent} from 'vue-transition-component';
import MainMenu from './../component/MainMenu';

export default {
  name: 'App',
  extends: AbstractRegistrableComponent,
  components: {
    MainMenu,
  },
  methods: {
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};
