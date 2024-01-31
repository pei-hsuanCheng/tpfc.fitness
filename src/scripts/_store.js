module.exports = window.PetiteVue.reactive({
  nowPage: window.location.pathname,
  nav: {
    active: null,
    items: [
      {
        label: '課程項目',
        url: '/service.html',
      },
      {
        label: '人才招募',
        url: '/careers.html',
      },
      {
        label: '教練團隊',
        url: '/ourteam.html',
      },
      {
        label: '預約諮詢',
        url: '/contact.html',
      },
      {
        label: '交通資訊',
        url: '/information.html',
      },
    ],
    onClick(e) {
      const vm = this;

      vm.active = !vm.active;
      console.log(e);
    },
  },
  social: [
    {
      icon: 'logo_fb',
      label: 'Facebook',
      url: 'https://www.facebook.com/tpfc.fit',
    },
    {
      icon: 'logo_ig',
      label: 'Instagram',
      url: 'https://www.instagram.com/tpfc.fit/',
    },
    {
      icon: 'logo_tiktok',
      label: 'TikTok',
      url: 'http://www.tiktok.com/@tpcf.fit',
    },
  ],
  load: {
    isDone: false,
    init() {
      const vm = this;

      vm.isDone = false;
    },
    finish() {
      const vm = this;

      vm.isDone = true;
    },
  },
});
