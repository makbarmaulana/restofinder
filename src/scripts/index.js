import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const nav = document.querySelector('.nav');
const drawer = document.querySelector('#drawer');

drawer.addEventListener('click', function () {
  nav.classList.toggle('active');
});

document.addEventListener('click', function ({ target }) {
  if (target !== drawer && target !== nav) {
    nav.classList.remove('active');
  }
});
