// JavaScript Document

function changeMalicPhoto()
{
	var Lyra = ["http://i.imgur.com/iflJvu4.gif", "http://i.imgur.com/VqZF6XI.png", "http://i.imgur.com/cs01iSi.png", "http://i.imgur.com/Q0igIdx.gif", "http://i.imgur.com/RekHFC2.png", "http://i.imgur.com/8wJSaYW.gif", "http://i.imgur.com/eiqcbC5.png", "http://i.imgur.com/R7Qgz7B.png", "http://i.imgur.com/VJ6RwjK.png", "http://i.imgur.com/DaycLHh.gif", "http://i.imgur.com/2woJNAT.gif", "http://i.imgur.com/CkD6nDD.gif", "http://i.imgur.com/cnOfzau.png", "http://i.imgur.com/q6AznNf.png", "http://i.imgur.com/DEkVQYD.jpg", "http://i.imgur.com/Zp8tJ6Q.gif", "http://i.imgur.com/HaXXBdS.png", "http://i.imgur.com/zoevx0Q.png", "http://i.imgur.com/bvM90Kh.png", "http://i.imgur.com/YC8OgFI.png", "http://i.imgur.com/YMAUzxT.gif", "http://i.imgur.com/Uu7ZS1a.png", "http://i.imgur.com/khQC8pW.png", "http://i.imgur.com/9VLgLGY.png", "http://i.imgur.com/A3eJcmQ.png", "http://i.imgur.com/W4BSwMQ.png", "http://i.imgur.com/VN999tl.png", "http://i.imgur.com/Rhfk6gD.png", "http://i.imgur.com/3BIO3z7.gif", "http://i.imgur.com/hudDor1.png", "http://i.imgur.com/JNkrIUJ.png", "http://i.imgur.com/8Dl8XmT.png", "http://i.imgur.com/abElus0.gif", "http://i.imgur.com/eH5FLuP.png", "http://i.imgur.com/9Isk5Kn.gif"]
	var newImgNumber =Math.floor(Math.random()*Lyra.length);
	document.getElementById('MalicPhoto').src = Lyra[newImgNumber];
}
window.onload=changeMalicPhoto;