// アニメーション
 const animationObserve = function doObserve(element, rootMargin, once = true, callback) {
  const targets = document.querySelectorAll(element);

  const observer = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add('is_active');
        if (once) {
          observer.unobserve(item.target);
        }
        if (callback && typeof callback === 'function') {
          callback(item.target);
        }
      } else {
        item.target.classList.remove('is_active');
      }
    });
  }, {
    root: null,
    rootMargin: rootMargin,
  });

  targets.forEach(function (target) {
    observer.observe(target);
  });
};
animationObserve('.io', '30% 0px -30% 0px', true);