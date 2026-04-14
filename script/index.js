'use strict';

import {
  modal,
  overlay,
  btnCloseModal,
  btnsOpenModal,
  btnLearnMore,
} from './elements.js';
import { openModal } from './modal.js';
import { smoothScrollToSectionOne } from './smoothScroling.js';

btnsOpenModal.forEach(buttonModal => {
  buttonModal.addEventListener('click', () => {
    openModal();
  });
});

btnLearnMore.addEventListener('click', smoothScrollToSectionOne);
