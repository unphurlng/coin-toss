
function headsTails(randomNumber) {
    let coin = '';
    
    if(randomNumber < 0.5) {
        coin = 'Heads';
    }
    return coin;
}

export default headsTails;

