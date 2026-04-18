'use strict';

import {
  btnsOpenModal,
  btnLearnMore,
  navContainer,
  sectionOne,
  tabContainer,
  nav,
  header,
  allSeсtions,
  images,
} from './elements.js';
import { openModal } from './modal.js';
import { smoothScroll, handleNavHover } from './functions.js';
import { handleTabs } from './tabs.js';
import { headerObserver } from './stickyNav.js';
import { sectionObserver } from './sectionReveal.js';
import { imageObserver } from './imgLazyLoad.js';

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
});

// effect when we hover header element, all other links fade out
nav.addEventListener('mouseover', handleNavHover.bind(0.5));
nav.addEventListener('mouseout', handleNavHover.bind(1));

// sticky navigation
headerObserver.observe(header);

// reveal sections
allSeсtions.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// image lazy load
images.forEach(image => {
  imageObserver.observe(image);
});
