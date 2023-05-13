import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const nav = document.querySelector('#drawer');
const menu = document.querySelector('#menu');
const contents = document.querySelector('.contents');

menu.addEventListener('click', function () {
  menu.classList.toggle('active');
});

function closeMenu(event) {
  const isOutsideNavElement = !nav.contains(event.target);

  if (isOutsideNavElement) {
    menu.classList.remove('active');
  }
}

document.addEventListener('click', closeMenu);
document.addEventListener('keydown', closeMenu);

import('../DATA.json').then(({ default: data }) => {
  const { restaurants } = data;
  let contentItem = '';

  restaurants.forEach((restaurant) => {
    contentItem += `
    <article class="content__item" tabindex="0">
      <img class="content__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}" loading="lazy">
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
