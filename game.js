function changeImage(src) {
  document.getElementById('preview').src=src;
}

var firstChoice = document.getElementById('first');
var secondChoice = document.getElementById('second');

function handleAnswer(id){
  if (id === 'first') {
    alert('you chose the first option!');
  } else {
    alert('you chose the second option!');
  }
}
