// these are global variables which can be used anywhere
var totalScore = 0;
var round = 1;

// get the text from html that we want to update
// html has to load before we can get this so load js after the body
var scoreText = document.getElementById('score');

// function that receives the score
function handleAnswer(score){
  // call the other function to change the images
  updateImage();

  // update the total score with that answer's score
  totalScore = totalScore + score;

  // update the score shown
  scoreText.innerText = totalScore;

  // start the next round
  round = round + 1;
};

// function that updates the image
function updateImage() {
  // these are local variables which can only be used in this function
  // match the current panel id by concatenating word and round number
  var active = 'p' + round;
  // increase the round number to get the next panel's id
  var next = 'p' + (round + 1);

  // use those ids to find them on the page
  var activePanel = document.getElementById(active);
  var nextPanel = document.getElementById(next);

  // hide the active panel, show the next panel
  activePanel.classList.remove('active');
  nextPanel.classList.add('active');
}
