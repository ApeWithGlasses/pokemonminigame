//PLAYER 1 VARIABLES & FUNCTIONS
const player1Btn = document.querySelector('#player1-btn');
const title1 = document.querySelector('#title1');
const pokemonCard1 = document.querySelector('.player1-card');
const circle1 = document.querySelector('.circle1');
const imageNumber = 0;

player1Btn.addEventListener('click', () => {
    title1.style.margin = "7px 0 10px 0";

    const imageNumber = Math.floor(Math.random() * 9) + 1;

    //CIRCLE STYLES
    circle1.style.width = "100%"
    circle1.style.height = "300px";
    circle1.style.backgroundColor = "#075BEF";
    circle1.style.boxShadow = "0 0 10px 3px #0075BE";
    circle1.style.border = "10px solid #0A285F";
    circle1.style.borderRadius = "50%";
    circle1.style.backgroundImage = 'url(sources/pokemon' + imageNumber + '.png)';
    circle1.style.backgroundSize = "cover";
    circle1.style.backgroundPosition = "center";
});

//PLAYER 2 VARIABLES & FUNCTIONS
const player2Btn = document.querySelector('#player2-btn');
const title2 = document.querySelector('#title2');
const pokemonCard2 = document.querySelector('.player2-card');
const circle2 = document.querySelector('.circle2');

player2Btn.addEventListener('click', () => {
    title2.style.margin = "7px 0 10px 0";

    const imageNumber = Math.floor(Math.random() * 9) + 1;

    //CIRCLE STYLES
    circle2.style.width = "100%"
    circle2.style.height = "300px";
    circle2.style.backgroundColor = "#075BEF";
    circle2.style.boxShadow = "0 0 10px 3px #0075BE";
    circle2.style.border = "10px solid #0A285F";
    circle2.style.borderRadius = "50%";
    circle2.style.backgroundImage = 'url(sources/pokemon' + imageNumber + '.png)';
    circle2.style.backgroundSize = "cover";
    circle2.style.backgroundPosition = "center";
});