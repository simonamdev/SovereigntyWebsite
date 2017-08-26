// JavaScript Document

var Factionresponse;
var CelestialBodiesresponse;
var StationData;
var requestedFaction = "";
var requestedSystem = "";
var requestedStation = "";
           
function getFactionData(system)
{
    var FactionData = new XMLHttpRequest();
    FactionData.open('GET', "https://www.edsm.net/api-system-v1/factions?systemName=" + system + "&showHistory", false);
    FactionData.send();
    Factionresponse = JSON.parse(FactionData.responseText);
    requestedFaction = system;
}
function getCelestialBodyData(system)
{
    var CelestialData = new XMLHttpRequest();
    CelestialData.open('GET', "https://www.edsm.net/api-system-v1/factions?systemName=" + system + "&showHistory", false);
    CelestialData.send();
    CelestialBodiesresponse = JSON.parse(CelestialData.responseText);
    requestedSystem = system;
}
function getStationData(system)
{
    var StationData = new XMLHttpRequest();
    StationData.open('GET', "https://www.edsm.net/api-system-v1/factions?systemName=" + system + "&showHistory", false);
    StationData.send();
    StationData = JSON.parse(StationData.responseText);
    requestedStation = system;
}





function getName(system)
{
    if (requestedFaction!=system)
	{
        getFactionData(system);
    }
   
    for(x=0; x < Factionresponse.factions.length; x++)
    {
        if(Factionresponse.factions[x].name == "The Imperial Inquisition" || Factionresponse.factions[x].name == "The Sovereignty")
        {
            return Factionresponse.factions[x].name;
        }
    }
}

function getInfluence(system)
{
    if (requestedFaction!=system)
	{
        getFactionData(system);
    }
   
    for(x=0; x < Factionresponse.factions.length; x++)
    {
        if(Factionresponse.factions[x].name == "The Imperial Inquisition" || Factionresponse.factions[x].name == "The Sovereignty")
        {
            return Factionresponse.factions[x].influence;
        }
    }
}

function getState(system)
{
    if (requestedFaction!=system)
	{
        getFactionData(system);
    }
   
    for(x=0; x < Factionresponse.factions.length; x++)
    {
        if(Factionresponse.factions[x].name == "The Imperial Inquisition" || Factionresponse.factions[x].name == "The Sovereignty")
        {
            return Factionresponse.factions[x].state;
        }
    }
}



function getStarClass(system)
{
    if (requestedSystem!=system)
	{
        getCelestialBodyData(system);
    }
   
    return CelestialBodiesresponse.bodies[0].subType;
}
function getStarImage(system)
{
    if (requestedSystem!=system)
	{
        getCelestialBodyData(system);
    }
   
    if(CelestialBodiesresponse.bodies[0].subType == "The Imperial Inquisition")
    {
    	return "";
    }
}
function getScoopable(system)
{
    if (requestedSystem!=system)
	{
        getCelestialBodyData(system);
    }
   
    return CelestialBodiesresponse.bodies[0].isScoopable;
}