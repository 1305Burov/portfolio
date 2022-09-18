import * as flsFunc from './moduls/func.js';

flsFunc.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';


const checkbox = document.getElementById('checkbox');
const more = document.getElementById('more');
const moreButton = document.getElementById('moreButton');
let isMore = false;
checkbox.addEventListener('change', () => {
    checkbox.parentElement.nextElementSibling.classList.toggle('nav_active');
})

moreButton.addEventListener('click', () => {
    isMore = !isMore;
    more.classList.toggle('projects-list__hidden');
    isMore ? moreButton.textContent = 'View less' : moreButton.textContent = 'View more';
})


