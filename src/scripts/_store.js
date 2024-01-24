module.exports = window.PetiteVue.reactive({
  nav: {
    active: null,
    items: [{
      label: 'Home',
      url: '/'
    }, {
      label: 'About',
      url: '/about.html'
    }, {
      label: 'Work',
      url: '/work.html'
    }],
    onClick(e) {
      const vm = this;

      vm.active = !vm.active;
      console.log(e);
    }
  },
  load: {
    isDone: false,
    init() {
      const vm = this;

      vm.isDone = false;
    },
    finish() {
      const vm = this;

      vm.isDone = true;
    }
  }
});
