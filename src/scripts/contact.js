import AOS from 'aos';
import 'aos/dist/aos.css';
import '@css/contact.css';

import { svgRequire, lazyLoadFun } from '_prototype.js';
import store from '_store.js';

/* 一次載入使用到的 svg */
svgRequire();

window.PetiteVue.createApp({
  store, // 加入 store
  data: '',
  onInit() {
    const vm = this;

    vm.data = 'About Init!!';
  },
  async mounted() {
    const vm = this;
    lazyLoadFun();
    vm.onInit();
    store.load.init();
    
    setTimeout(() => {
      AOS.init({
        offset: 120,
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }, 300)

    store.load.finish();
  },
}).mount('.jWrap');
