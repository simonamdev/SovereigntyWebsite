// JavaScript Document

function setStreamer(stream)
{
	document.getElementById('streamsource').src = 'https://player.twitch.tv/?channel=' + stream;
	document.getElementById('chatsource').src = 'https://www.twitch.tv/' + stream + '/chat?popout=';
}