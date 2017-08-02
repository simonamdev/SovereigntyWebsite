// JavaScript Document

var allowedKeys = {
  66: 'b',
  82: 'r',
  65: 'a',
  73: 'i',
  78: 'n',
  80: 'p',
  79: 'o',
  87: 'w',
  69: 'e',
  82: 'r'
};

// the 'official' Konami Code sequence
var konamiCode = ['b', 'r', 'a', 'i', 'n', 'p', 'o', 'w', 'e', 'r'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() 
{
	alert("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
  	document.getElementById('Unicorn').src = 'https://player.twitch.tv/?video=v158178904&autoplay=true';
}