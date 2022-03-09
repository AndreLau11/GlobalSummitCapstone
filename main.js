// closing and opening the hamburguer menu

const hamburguer = document.getElementById('hamburguer');
const navBar = document.getElementById('mobile-nav');
const closeIcon = document.getElementById('closeIcon');
const aboutus = document.getElementById('aboutus');
const program = document.getElementById('program');
const join = document.getElementById('join');
const sponsor = document.getElementById('sponsor');
const news = document.getElementById('news');
const campaign = document.getElementById('campaign');

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
aboutus.addEventListener('click', closeTab);
program.addEventListener('click', closeTab);
join.addEventListener('click', closeTab);
sponsor.addEventListener('click', closeTab);
news.addEventListener('click', closeTab);
campaign.addEventListener('click', closeTab);