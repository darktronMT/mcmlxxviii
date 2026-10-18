/* MCMLXXVIII signature mobile interaction v1.1
   First tap on a touch-only device shows the signature tooltip.
   A second tap on that same signature follows its link.
   Desktop hover, mouse clicks and keyboard links are unchanged.
*/
(() => {
  'use strict';
  const selector = '.mcmlxxviii-signature';
  const touchDevice = window.matchMedia('(hover: none) and (pointer: coarse)');

  function closeAll(except = null) {
    document.querySelectorAll(`${selector}.is-open`).forEach((link) => {
      if (link === except) return;
      link.classList.remove('is-open');
      link.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest(selector);
    if (!link) { closeAll(); return; }
    if (!touchDevice.matches) return;
    if (!link.classList.contains('is-open')) {
      event.preventDefault();
      closeAll(link);
      link.classList.add('is-open');
      link.setAttribute('aria-expanded', 'true');
      // No navigasjon ved første trykk. Andre trykk følger lenken.
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAll();
  });
  window.addEventListener('pageshow', () => closeAll());
  window.addEventListener('scroll', () => closeAll(), { passive: true });
})();
