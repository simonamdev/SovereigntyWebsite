// JavaScript Document
var twitchAPI = new XMLHttpRequest();

function getStreamerInfo(streamer)
{
	
	twitchAPI.open('GET', "https://api.twitch.tv/kraken/channels/" + streamer, true);
	twitchAPI.setRequestHeader('Client-ID', 'ji36kztzgizwvlq7oob8r7krk2ac1b');
	twitchAPI.send();
 
	twitchAPI.onreadystatechange = processTest;
}


			
function processTest(e)
{
	if (twitchAPI.readyState == 4 && twitchAPI.status == 200)
	{
    	var twitchAPIresponse = JSON.parse(twitchAPI.responseText);
		alert(twitchAPIresponse.display_name);
	}
}
 