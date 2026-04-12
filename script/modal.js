import { overlay, modal } from './elements.js';

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const handleModalClick = evt => {
  if (evt.target.classList.contains('btn--close-modal')) {
    closeModal();
  }
};

const handleOverlayClick = () => {
  closeModal();
};

const handleEscClose = evt => {
  if (evt.key === 'Escape' ?? !modal.classList.contains('hidden')) closeModal();
};

modal.addEventListener('click', handleModalClick);
overlay.addEventListener('click', handleOverlayClick);
window.addEventListener('keydown', handleEscClose);

export const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// export { closeModal };
