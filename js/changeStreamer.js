// JavaScript Document

function setStreamer(stream)
{
	document.getElementById('streamsource').src = 'https://player.twitch.tv/?channel=' + stream;
	document.getElementById('chatsource').src = 'https://www.twitch.tv/' + stream + '/chat?popout=';
	document.getElementById('StreamersName').innerHTML = stream;
	document.getElementById('StreamersName').href = 'https://www.twitch.tv/' + stream;
	document.getElementById('StreamFeed').style.display = 'block';
	document.getElementById('OtherStreams').style.top = '100%';
	document.getElementById('follow').href = 'https://www.twitch.tv/' + stream;
	document.getElementById('Donate').href = 'https://streamlabs.com/' + stream;
	document.getElementById('Subscribe').href = 'https://secure.twitch.tv/products/' + stream + '/ticket/new';
	getStreamerInfo(stream);
}

var twitchAPI = new XMLHttpRequest();
	
function getStreamerInfo(streamer)
{
	
	twitchAPI.open('GET', "https://api.twitch.tv/kraken/channels/" + streamer, true);
	twitchAPI.setRequestHeader('Client-ID', 'ji36kztzgizwvlq7oob8r7krk2ac1b');
	twitchAPI.send();
 
	twitchAPI.onreadystatechange = processTest;
}

function processTest()
{
	if (twitchAPI.readyState == 4 && twitchAPI.status == 200)
	{
    	var twitchAPIresponse = JSON.parse(twitchAPI.responseText);
		document.getElementById('GamePlayed').innerHTML = twitchAPIresponse.game;
		document.getElementById('GamePlayed').href = 'https://www.twitch.tv/directory/game/' + twitchAPIresponse.game;
	}
}