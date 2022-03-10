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

// Create the feature speakers area

const speakers = [
  {
    name: 'Shuntaro Furukawa',
    company: 'Nintendo',
    image: './images/speakers/Nintendo.jpg',
    position: 'Shuntaro Furukawa is a Japanese businessman and executive. He is the sixth and current president of the video game company Nintendo in Japan. He took over as company president in June 2018, succeeding Tatsumi Kimishima.',
  },
  {
    name: 'Phil Spencer',
    company: 'Microsoft - Xbox',
    image: './images/speakers/phil_spencer_xbox_one.jpg',
    position: 'Phil Spencer is an American business executive, and the CEO of Microsoft Gaming.[3] He is currently the head of the Xbox brand and leads the global creative and engineering teams responsible for gaming at Microsoft.',
  },
  {
    name: 'Jim Ryan',
    company: 'Sony - Play Station',
    image: './images/speakers/jryanPlayStation.jpg',
    position: 'The president, and CEO of SIE is Jim Ryan, replacing John (Tsuyoshi) Kodera, who stepped down in April 2019. Kodera would leave SIE in 2021.',
  },
  {
    name: 'Adam Sussman',
    company: 'Epic Games',
    image: './images/speakers/EpicGames.jpg',
    position: 'Adam has been a leader in consumer digital with over 25 years of experience at some of the most recognized and loved global brands. He has held senior leadership roles in gaming, entertainment, sport and e-commerce. Throughout his career, Adam has been a general manager, operator, strategist and creator. He has a proven track record for building great teams and driving enterprise growth and transformation.',
  },
  {
    name: 'John Hanke',
    company: 'Niantic',
    image: './images/speakers/john_hanke_niantic_reuters_small.jpg',
    position: 'John Hanke (born 1967) is an American technology executive. Hanke led Googles Geo product division, which includes Google Earth, Google Maps, StreetView, SketchUp, and Panoramio. He is founder and CEO of Niantic, Inc., a software company spun out of Google and the creator of Pokémon Go.',
  },
  {
    name: 'Sam Houser',
    company: 'Rockstar Games',
    image: './images/speakers/SamHouser.jpg',
    position: 'Sam Houser is a British video game producer. He is the co-founder and president of Rockstar Games and one of the creative driving forces behind the games in the Grand Theft Auto franchise, being producer since the third game.',
  },
];
const baseSpeakers = document.getElementById('baseSpeakers');
let counter = 0;

function loadSpeakers() {
  for (counter = 0; counter < speakers.length; counter += 1) {
    baseSpeakers.innerHTML += `<div id="subConference" class="subConference">
    <div class="picture">
        <img src="${speakers[counter].image}" alt="An image representing the ${speakers[counter].company} headquarters.">
    </div>
    <div>
        <h5>${speakers[counter].name}</h5>
        <p class="speakerPosition">${speakers[counter].company}</p>
        <p class="positionDescription">${speakers[counter].position}</p>
    </div>
</div>`;
  }
}

document.addEventListener('DOMContentLoaded', loadSpeakers, false);