import AOS from 'aos';
import tns from 'tiny-slider';
import 'aos/dist/aos.css';
import 'tiny-slider/dist/tiny-slider.css';
import '@css/index.css';

import { svgRequire, lazyLoadFun } from '_prototype.js';
import store from '_store.js';

// const $ = window.jQuery;

/* 一次載入使用到的 svg */
svgRequire();

window.PetiteVue.createApp({
  store, // 加入 store
  data: '',
  onInit() {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    // tns({
    //   container: '.coach-slider',
    //   items: 3,
    //   slideBy: 'page',
    //   autoplay: true,
    //   controls: false,
    //   nav: false
    // });
    const vm = this;

    vm.data = 'Home Init!!';
  },
  async mounted() {
    const vm = this;
    lazyLoadFun();
    vm.onInit();
    // loading 開始
    store.load.init();
    

    // 如果有 api 可以使用 async await

    // loading 結束
    store.load.finish();
  },
}).mount('.jWrap');
