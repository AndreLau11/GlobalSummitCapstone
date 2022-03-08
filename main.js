//closing and opening the hamburguer menu

const hamburguer = document.getElementById('hamburguer');
const navBar = document.getElementById('mobile-nav');
const closeIcon = document.getElementById('closeIcon');
const forums = document.getElementById('forums');
const aboutus = document.getElementById('aboutus');
const getintouch = document.getElementById('getintouch');

function closeTab() {
    navBar.classList.add('hidden');
    hamburguer.classList.remove('hidden');
}

function openTab() {
    hamburguer.classList.add('hidden');
    navBar.classList.remove('hidden');
}

hamburguer.addEventListener('click', openTab);
closeIcon.addEventListener('click', closeTab);
forums.addEventListener('click', closeTab);
aboutus.addEventListener('click', closeTab);
getintouch.addEventListener('click', closeTab);