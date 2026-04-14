'use strict';

import {
  btnsOpenModal,
  btnLearnMore,
  navContainer,
  sectionOne,
  tabContainer,
} from './elements.js';
import { openModal } from './modal.js';
import { smoothScroll } from './smoothScroling.js';
import { handleTabs } from './tabs.js';

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

// implementig tab components

tabContainer.addEventListener('click', evt => {
  handleTabs(evt);
  // const allTabs = document.querySelectorAll('.operations__tab');

  // allTabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  // const clickedTab = e.target.closest('.operations__tab');
  // if (!clickedTab) return;
  // clickedTab.classList.add('operations__tab--active');

  // const contentId = clickedTab.dataset.tab;
  // const content = document.querySelector(`.operations__content--${contentId}`);
  // const allContentElements = document.querySelectorAll('.operations__content ');
  // allContentElements.forEach(el =>
  //   el.classList.remove('operations__content--active'),
  // );

  // content.classList.add('operations__content--active');
});
