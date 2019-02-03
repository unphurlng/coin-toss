import headsTails from './heads-tails.js';
const flipForm = document.getElementById('flip-form');
const unicornImage = document.getElementById('unicorn-image');



flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const coin = headsTails(randomNumber);
    let unicornImageSrc = '';
    
    if(coin === 'heads') {
        unicornImageSrc = '../assets/heads.jpg';
    } else {
        unicornImageSrc = '../assets/tails.jpg';
    }
    
    unicornImage.src = unicornImageSrc;
});
