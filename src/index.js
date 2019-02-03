import headsTails from './heads-tails.js';
const flipForm = document.getElementById('flip-form');
const unicornImage = document.getElementById('unicorn-image');
const headsCount = document.getElementById('heads-count');

let heads = 0;
let tails = 0;

flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const coin = headsTails(randomNumber);
    let unicornImageSrc = '';
    
    if(coin === 'heads') {
        unicornImageSrc = '../assets/heads.jpg';
        heads++;
        console.log('heads: ', heads);
    } else {
        unicornImageSrc = '../assets/tails.jpg';
        tails++;
        console.log('tails: ', tails)
    }

    unicornImage.src = unicornImageSrc;
});
