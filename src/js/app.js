import * as flsFunc from './moduls/func.js';

flsFunc.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const checkbox = document.getElementById('checkbox');
const moreButton = document.getElementById('moreButton');

checkbox.addEventListener('change', (e) => {
    checkbox.parentElement.nextElementSibling.classList.toggle('nav_active');
});

moreButton.addEventListener('click', (e) => {
    e.preventDefault();
    const more = document.getElementById('more');
    
    if (more) {
        
        if (more.style.maxHeight) {
            more.style.maxHeight = null;
        } else {
            more.style.maxHeight = more.scrollHeight + 'px';
        }
    }
});

window.onload = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.dataset.src ) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                } 
                entry.target.classList.add('visible');
            }
        })
    }, { threshold: 0.5 })

    
    document.querySelectorAll('.invisible').forEach(el => observer.observe(el));
}
