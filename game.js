// function changeImage(src) {
//   document.getElementById('preview').src=src;
// }

var totalScore = 0;
var scoreText = document.getElementById('score');
var round = 1;

function handleAnswer(score){
  totalScore = totalScore + score;
  updateImage();
  scoreText.innerText = totalScore;
  round = round + 1;
};

function updateImage() {
  var active = 'p' + round;
  var next = 'p' + (round + 1);
  var activePanel = document.getElementById(active);
  var nextPanel = document.getElementById(next);

  activePanel.classList.remove('active');
  nextPanel.classList.add('active');
}
