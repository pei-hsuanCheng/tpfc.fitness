import {tns} from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@css/resevation.css';

import { svgRequire, lazyLoadFun, hdScroll, deviceType } from '_prototype.js';
import store from '_store.js';

// const $ = window.jQuery;

/* 一次載入使用到的 svg */
svgRequire();

window.PetiteVue.createApp({
  store,
  slider: null,
  commentSlider: null,
  memberResultSlider: null,
  mounted() {
    lazyLoadFun();
    store.load.init();
    this.$nextTick(() => {
      setTimeout(() => {
        AOS.init({
          offset: 120,
          duration: 800,
          easing: 'ease-in-out',
          once: true
        });

        if (deviceType() !== 'p') hdScroll();

        this.initSliders();
        window.addEventListener('resize', this.debouncedResize);

        setTimeout(() => {
          AOS.refreshHard();
        }, 300);
      }, 300);
    });

    store.load.finish();
  },

  // 📌 debounce for resize
  debouncedResize() {
    clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(() => {
      this.initSliders();
    }, 150);
  },

  initSliders() {
    this.$nextTick(() => {
      this.destroySliders();

      // 📱 平板 / 手機 only
      if (deviceType() !== 'p') {
        this.slider = this.createSlider('.training-rules-slider', {
          items: 1,
          slideBy: 'page',
          edgePadding: 40,
          gutter: 20,
          nav: false,
          controls: false,
          responsive: {
            740: {
              items: 2,
              edgePadding: 60,
              gutter: 20
            }
          }
        });

        this.commentSlider = this.createSlider('.comments-slider', {
          slideBy: 'page',
          items: 1,
          edgePadding: 40,
          gutter: 10,
          nav: true,
          controls: false,
          responsive: {
            740: {
              items: 2,
              edgePadding: 20
            }
          }
        });
      }

      // 💬 評價區輪播（全裝置都用）
      this.memberResultSlider = this.createSlider('.inbody-slider', {
        controlsContainer: '.inbody-slider-ctrl',
        items: 1,
        slideBy: 1,
        center: true,
        autoplay: false,
        nav: true,
        navPosition: 'bottom',
        mouseDrag: true,
        gutter: 10
      });
      this.memberResultSlider = this.createSlider('.body-shape-slider', {
        controlsContainer: '.body-shape-slider-ctrl',
        items: 1,
        slideBy: 1,
        center: true,
        autoplay: false,
        nav: true,
        navPosition: 'bottom',
        mouseDrag: true,
        gutter: 10
      });
    });
  },

  createSlider(containerSelector, options) {
    const el = document.querySelector(containerSelector);
    if (!el) return null;

    return tns({
      container: containerSelector,
      autoplay: false,
      loop: false,
      rewind: true,
      ...options
    });
  },

  destroySliders() {
    this.slider?.destroy();
    this.commentSlider?.destroy();
    this.memberResultSlider?.destroy();

    this.slider = null;
    this.commentSlider = null;
    this.memberResultSlider = null;
  }
}).mount('.jWrap');