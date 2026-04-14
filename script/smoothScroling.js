// functions for smoothe scrolling when we click on 'Learn more' element

const sectionOne = document.getElementById('section--1');

export const smoothScrollToSectionOne = () =>
  sectionOne.scrollIntoView({ behavior: 'smooth' });
