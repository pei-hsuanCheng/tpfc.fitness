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

export const lazyLoadFun = () => {
  return new LazyLoad({
    elements_selector: '.lazy',
    use_native: true,
  });
}

/* device */
export const deviceType = () => {
  const angle = window.screen.orientation ? window.screen.orientation.angle : 0;
  const PCMinWidth = 1024;
  const mobileWidth = 740;
  const userAgent = navigator.userAgent;
  const isPCPad =
    angle === 0 &&
    window.innerWidth > mobileWidth &&
    window.innerWidth < PCMinWidth; // 在桌機時 resize 模擬 Pad 的尺寸
  const isAndroidPad = /Android|webOS|BlackBerry/i.test(userAgent);
  const is16BelowPad = /iPad/i.test(userAgent); // ios 16 以下的系統
  const is17AbovePad = angle !== 0 && /Mac OS X/i.test(userAgent); // iso 17 以上的系統
  const isAndroidMobile = /Android|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
  const isIPhoneMobile =
    (angle !== 0 && window.innerWidth > 730 && window.innerWidth < 815) ||
    /iPhone/i.test(userAgent);

  if (window.innerWidth <= mobileWidth || isAndroidMobile || isIPhoneMobile) {
    return 'm'
  }
  if (isPCPad || isAndroidPad || is16BelowPad || is17AbovePad) {
    return 't'
  }

  return 'p'
};

export const scrollToAnimate = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elementBottom = entry.target.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        // 如果元素已经非常靠近视窗底部，直接添加类
        if (viewportHeight - elementBottom < 120) {
            $(entry.target).addClass('aos-animate');
        }
    }
    });
  }, {
      root: null,
      threshold: 0.1,
      rootMargin: '-120px 0px -120px 0px'
  });

  const config = { childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
      mutationsList.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1 && $(node).is('[data-aos]')) { // Check if it's an element node
                  observer.observe(node);
              }
          });
      });
  };

  const domObserver = new MutationObserver(callback);
  domObserver.observe(document.body, config);

  $('[data-aos]').each(function() {
      observer.observe(this);
  });

  $('[data-aos]').each(function() {
    const rect = this.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) { // 检查元素是否在视窗内
        $(this).addClass('aos-animate');
    }
  });
}