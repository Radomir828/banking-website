// Reveal section

const showSection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const obj = {
  root: null,
  threshold: 0.15,
};

export const sectionObserver = new IntersectionObserver(showSection, obj);
