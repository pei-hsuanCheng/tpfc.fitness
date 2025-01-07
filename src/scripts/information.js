import AOS from 'aos';
import {tns} from 'tiny-slider/src/tiny-slider';
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
    // tns();
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
    // vm.windowResize()
    // window.addEventListener('resize', vm.windowResize);
    this.$nextTick(() => {
      vm.slider = tns({
        container: '.env-slider',
        controlsContainer: '.m-slider-ctrl',
        items: 1,
        slideBy: 1,
        center: true,
        autoplay: false,
        nav: false,
        mouseDrag: true,
        gutter: 10,
        edgePadding: 50,  // 較小的邊緣填充
        responsive: {
          640: {
            items: 1,
          },
          700: {
            edgePadding: 50,  // 螢幕寬度介於700px至900px
            items: 1,
          },
          900: {
            edgePadding: 100, // 螢幕寬度大於900px時的設定
            gutter: 34,
            items: 1,
          }
        }
      })
    })
  },
  windowResize() {
    const vm = this;
    // const sliderWidth = window.innerWidth;
    // const slideWidth = sliderWidth * 0.7;
    // const edgePadding = (sliderWidth - slideWidth) / 2;

    this.$nextTick(() => {
      vm.slider = tns({
        container: '.env-slider',
        controlsContainer: '.m-slider-ctrl',
        items: 3,
        slideBy: 1,
        center: true,
        autoplay: false,
        loop:true,
        nav: false,
        mouseDrag: true,
        gutter: 20,
        edgePadding: 30,  // 較小的邊緣填充
        responsive: {
          640: {
            edgePadding: 20,  // 螢幕寬度小於640px時的設定
            items: 2
          },
          768: {
            edgePadding: 25,  // 螢幕寬度介於700px至900px
            items: 3
          },
          1024: {
            edgePadding: 30, // 螢幕寬度大於900px時的設定
            items: 3
          }
        }
      })
    })
  }
}).mount('.jWrap');
