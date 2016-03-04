function loadDoc()
{
	var xmlhttp=new XMLHttpRequest();
	var url="JsonHttp.txt";
	
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var obj=JSON.parse(xmlhttp.responseText);
			myFunction(obj);
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function myFunction(arr)
{
	var out="";
	
	var i;

    for(i=0;i<arr.length;i++)
	{
		out+= '<a href="'+arr[i].url+'"a>'+arr[i].display +'</a><br>';
		
	}
	document.getElementById("id1").innerHTML=out;
}