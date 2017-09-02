// JavaScript Document

var allowedKonamiKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};
var allowedBrainpowerKeys = {
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


var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var brainPower = ['b', 'r', 'a', 'i', 'n', 'p', 'o', 'w', 'e', 'r'];

var konamiCodePosition = 0;
var brainPowerPosition = 0;

document.addEventListener('keydown', function(e) 
{
	var Konamikey = allowedKonamiKeys[e.keyCode];
	var Brainpowerkey = allowedBrainpowerKeys[e.keyCode];
  	
	var requiredKonamiKey = konamiCode[konamiCodePosition];
  	var requiredBrainpowerKey = brainPower[brainPowerPosition];
	
	if (Konamikey == requiredKonamiKey) 
  	{

    	konamiCodePosition++;

    	if (konamiCodePosition == konamiCode.length) 
		{
      		rainbows();
      		konamiCodePosition = 0;
    	}
  	} 
	else 
  	{
    	konamiCodePosition = 0;
  	}
	
	if (Brainpowerkey == requiredBrainpowerKey) 
  	{

    	brainPowerPosition++;

    	if (brainPowerPosition == brainPower.length) 
		{
      		brainpower();
      		brainPowerPosition = 0;
    	}
  	} 
	else 
  	{
    	brainPowerPosition = 0;
  	}
});

function rainbows() 
{
	alert("Delivering rainbows!");
	document.getElementById('Unicorn').src = 'https://www.youtube.com/embed/17o1OlroNSE?autoplay=1';
	document.getElementById('Unicorn').style.display = 'block';
}

function brainpower() 
{
	if(document.getElementById('Unicorn').style.display == 'block')
	{
		alert("O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA");
  		document.getElementById('Unicorn').src = 'https://player.twitch.tv/?video=v158178904&autoplay=true';
	}
}