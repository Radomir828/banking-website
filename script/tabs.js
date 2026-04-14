// function for handling when changing tabs

import { allTabs, allContentElements } from './elements.js';
import { removeClass, addClass } from './utils.js';

export const handleTabs = e => {
  const clickedTab = e.target.closest('.operations__tab');
  if (!clickedTab) return;

  // removing active class for all tabs and content elements
  removeClass(allTabs, 'operations__tab--active');
  removeClass(allContentElements, 'operations__content--active');

  addClass(clickedTab, 'operations__tab--active');
  const contentId = clickedTab.dataset.tab;
  const content = document.querySelector(`.operations__content--${contentId}`);
  addClass(content, 'operations__content--active');
};
