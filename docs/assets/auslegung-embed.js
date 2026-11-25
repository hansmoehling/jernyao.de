(function () {
  'use strict';

  const frames = Array.from(document.querySelectorAll('iframe[data-jy-module]'));
  window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin) return;
    const frame = frames.find(function (candidate) {
      return event.source === candidate.contentWindow;
    });
    if (!frame) return;
    const data = event.data;
    if (!data || data.type !== 'jy-module-height' || typeof data.height !== 'number' ||
        !Number.isFinite(data.height) || data.height < 100 || data.height > 20000) return;
    const height = Math.ceil(data.height);
    frame.style.height = height + 'px';
    frame.setAttribute('height', String(height));
  });
}());
