const imgReveal = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
};

export const imageObserver = new IntersectionObserver(imgReveal, {
  root: null,
  threshold: 0.05,
});
