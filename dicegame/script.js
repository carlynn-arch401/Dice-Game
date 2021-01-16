
const firstRandomNum = Math.floor(Math.random() *6) + 1
const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';
document.queryOfSelectorAll ('img')[0]. setAttribute ('src', secondDiceImage);

const secondRandomNum = Math.floor(Math.random() *6) + 1
const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';
document.queryOfSelectorAll ('img')[0]. setAttribute ('src', secondDiceImage);
if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML =' Player 1 Wins';
}
else if (firstRandomNum < secondRandomNum) {
        document.querySelector('h1').innerHTML =' Player 2 Wins';
}
else (firstRandomNum = secondRandomNum) {
    document.querySelector('h1').innerHTML =' DRAW';

}