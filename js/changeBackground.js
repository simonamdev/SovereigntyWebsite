// JavaScript Document

function changeImg()
{
	var newImgNumber =Math.floor(Math.random()*2);
	document.getElementById('background').src = '../communitybackgrounds/background'+newImgNumber+'.png';
}
window.onload=changeImg;