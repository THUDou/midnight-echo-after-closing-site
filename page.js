'use strict';
// Keep the landing page usable without scripts. No tracking or external requests.
const closeDetailsOnEscape = (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('details[open]').forEach((item) => {
    item.open = false;
    item.querySelector('summary')?.focus();
  });
};
document.addEventListener('keydown', closeDetailsOnEscape);
