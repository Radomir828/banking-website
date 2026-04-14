'use strict';

import {
  btnsOpenModal,
  btnLearnMore,
  navContainer,
  sectionOne,
} from './elements.js';
import { openModal } from './modal.js';
import { smoothScroll } from './smoothScroling.js';

btnsOpenModal.forEach(buttonModal => {
  buttonModal.addEventListener('click', () => {
    openModal();
  });
});
// smooth scroll to section 1
btnLearnMore.addEventListener('click', () => smoothScroll(sectionOne));

// page navigation
navContainer.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const element = document.querySelector(`${e.target.getAttribute('href')}`);
    smoothScroll(element);
  }
});
