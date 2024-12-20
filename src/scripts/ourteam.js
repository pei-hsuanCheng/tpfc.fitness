import AOS from 'aos';
import {tns} from 'tiny-slider/src/tiny-slider';;
import 'aos/dist/aos.css';
import 'tiny-slider/dist/tiny-slider.css';
import '@css/index.css';

import { svgRequire, lazyLoadFun, deviceType } from '_prototype.js';
import store from '_store.js';

// const $ = window.jQuery;

/* 一次載入使用到的 svg */
svgRequire();

window.PetiteVue.createApp({
  store, // 加入 store
  data: '',
  slider: null,
  onInit() {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    const vm = this;
    vm.data = 'Home Init!!';
  },
  async mounted() {
    const vm = this;
    lazyLoadFun();
    vm.onInit();
    // loading 開始
    store.load.init();
    // loading 結束
    store.load.finish();
    vm.windowResize()
    window.addEventListener('resize', vm.windowResize);
  },
  windowResize() {
    const vm = this;
    this.$nextTick(() => {
      if(vm.slider && vm.slider.destroy) vm.slider.destroy();
      if(deviceType()!=='p') {
        vm.slider = tns({
          container: '.coach-slider',
          items: 1,
          slideBy: 'page',
          autoplay: false,
          edgePadding: 40,
          gutter: 20,
          controlsContainer: '.m-slider-ctrl',
          nav: false,
          responsive: {
            740: {
              items: 2,
              edgePadding: 60,
              gutter: 40
            }
          }
        });
      }
    })
  }
}).mount('.jWrap');
