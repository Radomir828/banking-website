// Modal windows

import { overlay } from './elements.js';

const handleClick = evt => {
  // console.log(evt.target);
};

export const openModal = modalWIndow => {
  modalWIndow.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalWIndow.addEventListener('click', handleClick);
};

document.addEventListener('keydown', evt => {
  console.log('target:', evt.target);
  console.log('currentTarget:', evt.currentTarget);
});
