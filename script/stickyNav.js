import { nav } from './elements.js';

const navHeight = nav.getBoundingClientRect().height;
// Zelimo da kada nam viewport predje (header - navigation.heaight) da se pojavi stcky navigation
const stickyNav = entries => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const obj = {
  root: null, // root null znaci da element u odnosu na koji posmatramo header je viewport
  threshold: 0, // znaci da ce kolbek proraditi kada se header ne vidi u odnosu na viewport
  rootMargin: `-${navHeight}px`,
};

export const headerObserver = new IntersectionObserver(stickyNav, obj);
