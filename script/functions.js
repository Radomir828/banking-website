// functions for smoothe scrolling
import { logo } from './elements.js';

export const smoothScroll = element =>
  element.scrollIntoView({ behavior: 'smooth' });

export const handleNavHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const parent = link.closest('.nav');
    const siblings = parent.querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
