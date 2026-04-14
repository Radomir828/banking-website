// c is class
export const removeClass = (elements, c) => {
  if (!elements) return;
  const arr = elements instanceof Element ? [elements] : elements;
  arr.forEach(el => el.classList.remove(c));
};

export const addClass = (elements, c) => {
  if (!elements) return;
  const arr = elements instanceof Element ? [elements] : elements;
  arr.forEach(el => el.classList.add(c));
};
