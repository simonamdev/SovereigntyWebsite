// JavaScript Document

function showPage(id)
{
	var totalNumberOfPages = 5;
	for( i = 1; i <= totalNumberOfPages; i++)
	{
		if(document.getElementById('page'+i))
			document.getElementById('page'+i).style.display = 'none';
	}
	if(document.getElementById('page'+id))
		document.getElementById('page'+id).style.display = 'block';
}