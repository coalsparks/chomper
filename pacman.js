var pos = 0;
var pageWidth = window.innerWidth;
var direction = 0;
var mouthState = 1;
var guy = document.getElementById('guy');
var mouth = document.getElementById('mouth');
var speed = 100;

function chomping() {
  checkPageBounds(pos);
   // move the mouth either toward or away, relative to the guy (depending on the direction)
   let offset = 150 - 400 * direction + 100 * mouthState;
   mouth.style.left = offset + 'px';
   mouthState = (mouthState + 1) % 2; // close or open the mouth
 
  if (mouthState) {
    pos = pos + speed - speed * 2 * direction;
    guy.style.left = pos + 'px';
  } // if the mouth is closed, move the character



  waitTime = setTimeout(chomping, 300);
}

function Run() {
  document.removeEventListener('click', Run);
  let waitTime;
  chomping();
  document.addEventListener('click', stopChomping);
  document.getElementById('instructions').innerHTML = 'Click to stop!';
}

function stopChomping() {
  clearTimeout(waitTime);
  document.addEventListener('click', Run);
  document.getElementById('instructions').innerHTML =
    'Click to start chomping!';
}

function checkPageBounds(spot) {
  imgWidth = 200;
  let pageWidth = window.innerWidth;
  if (spot > pageWidth - imgWidth || spot < 0) {
    direction = (direction + 1) % 2; // flip the direction
    mouthState = 1; // it's subtle but the mouth needs to be reset at the turn
    pos = pos < 0 ? 0 : pageWidth - imgWidth; // make sure we don't run out of bounds!
  }
}

document.addEventListener('click', Run);
// originally the event listener referenced document.body but the user had to click the div to make that work
