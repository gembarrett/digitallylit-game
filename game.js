// function changeImage(src) {
//   document.getElementById('preview').src=src;
// }

var firstChoice = document.getElementById('first');
var secondChoice = document.getElementById('second');
var score = 0;
var scoreText = document.getElementById('score');
var round = 1;

var array = [
  "Black and white cat",
  "Tortoiseshell cat",
  "Grey cat",
  "Ginger cat"
];

function handleAnswer(id){
  if (id === 'first') {
    alert('you chose the first option!');
    score = score + 13;
    updateScore(score);
  } else {
    alert('you chose the second option!');
    score = score + 5;
    updateScore(score);
  }
}

function updateScore(score) {
  scoreText.innerText = score;
}

function updateText(current) {
  firstChoice.innerText = array[current+2];
  secondChoice.innerText = array[current+1];
}
