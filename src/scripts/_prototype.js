import LazyLoad from 'vanilla-lazyload';

export const svgRequire = (req) => {
  const use = Array.prototype.slice.call(document.getElementsByTagName('use'));
  const requires = req || require.context('_svg/', true, /\.svg$/);
  use.forEach((elem) => {
    const { href } = elem;
    const svg = `${/(?!#).*/.exec(href.baseVal)[0]}.svg`;
    const files = {};

    requires.keys().forEach((filename) => {
      if (new RegExp(svg).test(new RegExp(filename))) {
        files[filename] = requires(filename);
      }
    });
  });
};

export const lazyLoadFun = () =>
  new LazyLoad({
    elements_selector: '.lazy',
    use_native: true,
  });

/* device */
export const deviceType = () => {
  const { innerWidth, screen } = window;
  const angle = screen.orientation ? screen.orientation.angle : 0;
  const { userAgent, maxTouchPoints } = navigator;
  const tabletRegex = /Android|webOS|iPad|BlackBerry/i;
  const mobileRegex = /iPad|iPhone|iPod/;
  const isTablet = tabletRegex.test(userAgent);
  const isMobile = mobileRegex.test(userAgent);

  if (
    innerWidth <= 740 ||
    isMobile ||
    (angle !== 0 && innerWidth > 730 && innerWidth < 815)
  ) {
    return 'm';
  }
  if (
    (angle === 0 &&
      (innerWidth > 740 || innerWidth > 810) &&
      (innerWidth <= 1024 || innerWidth <= 1080) &&
      maxTouchPoints) ||
    isTablet
  ) {
    return 't';
  }
  return 'p';
};
