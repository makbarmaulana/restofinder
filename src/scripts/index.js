import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const nav = document.querySelector('.nav');
const drawer = document.querySelector('#drawer');
const contents = document.querySelector('.contents');

drawer.addEventListener('click', function () {
  nav.classList.toggle('active');
});

document.addEventListener('click', function ({ target }) {
  if (target !== drawer && target !== nav) {
    nav.classList.remove('active');
  }
});

import('../DATA.json').then(({ default: data }) => {
  const { restaurants } = data;
  let contentItem = '';

  restaurants.forEach((restaurant) => {
    contentItem += `
    <article class="content__item">
      <img class="content__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="content__detail">
        <p class="content__detail_rating">Rating: ${restaurant.rating} / 5</p>
        <h3 class="content__detail_name">${restaurant.name}</h3>
        <p class="content__detail_description">${restaurant.description}</p>
        <p class="content__detail_city">Kota ${restaurant.city}</p>
      </div>
    </article>
    `;

    contents.innerHTML = contentItem;
  });
});
