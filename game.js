function changeImage(src) {
  document.getElementById('preview').src=src;
}

var firstChoice = document.getElementById('first');
var secondChoice = document.getElementById('second');
var score = 0;
var scoreText = document.getElementById('score');
var round = 1;

function handleAnswer(id){
  if (id === 'first') {
    alert('you chose the first option!');
    score += 13;
    updateScore(score);
  } else {
    alert('you chose the second option!');
    score += 5;
    updateScore(5);
  }
}

function updateScore(score) {
  scoreText.innerText = score;
}
