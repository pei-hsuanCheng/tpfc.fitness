const htmlPage = require('./htmlPage/index.js');

module.exports = {
  port: 65534,
  ieVersion: 10, // 10 或 0
  projectName: 'first class fitness',
  copyright: 'FIRST CLASS FITNESS © 2022 ALL RIGHT RESERVED.',
  desktopMinWidth: 1366,
  mobileMaxWidth: 740,
  basicMobileWidth: 320,
  copyStatic: true,
  docker: false,
  https: true,
  rootDirectory: 'auto',
  jsMinifyExclude: /\/static/,
  buildJSExtension: null,
  component: '_components/',
  js: 'scripts/',
  css: 'assets/css/',
  imgs: 'assets/img/',
  fonts: null,
  static: 'static/',
  svg: '_svg',
  commonPlugins: {
    jquery: 'static/scripts/plugin/jquery-3.7.0.min.js?[fullhash:8]',
    'petite-vue': 'static/scripts/plugin/petite-vue@0.4.1/petite-vue.iife.js?[fullhash:8]',
  },
  plugins: () => {
    const def = [];
    const publish = def.concat(
      htmlPage.HtmlWebpackPlugin,
    );

    return publish;
  },
};
