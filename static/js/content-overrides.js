(function () {
  const serviceBefore = 'Wyliczanie wynagrodze\u0144 do wyp\u0142aty (bez prowadzenia pe\u0142nych kadr)';
  const serviceAfter = 'Wyliczanie wynagrodze\u0144 do wyp\u0142aty (bez prowadzenia pe\u0142nych kadr i szkole\u0144 BHP)';

  function updateContent() {
    const elements = document.querySelectorAll('*');

    elements.forEach((element) => {
      if (element.children.length === 0 && element.textContent.includes(serviceBefore)) {
        element.textContent = element.textContent.replace(serviceBefore, serviceAfter);
      }

      if (element.children.length === 0 && element.textContent === '+48 500 000 000') {
        element.textContent = '+48 600299246';
      }

      if (element.children.length === 0 && element.textContent === 'kontakt@piotrgatkowski.pl') {
        element.textContent = 'biuro@piotrgatkowski.pl';
      }
    });
  }

  const style = document.createElement('style');
  style.textContent = [
    '.service-list li:last-child { margin-bottom: 0 !important; }',
    '#uslugi .service-list.columns-2 li:last-child { margin-top: -0.75rem; }',
  ].join('');
  document.head.appendChild(style);

  updateContent();
  new MutationObserver(updateContent).observe(document.body, { childList: true, subtree: true });
})();
