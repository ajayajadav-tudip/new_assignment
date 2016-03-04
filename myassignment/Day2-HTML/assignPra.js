function loadDoc(){

	   var xhttp= new XMLHttpRequest();
		xhttp.onreadystatechange=function(){
		  if(xhttp.readyState==0)
		  {
		    alert("Request Not Intialized");
		  }
		  if(xhttp.readyState==1)
		  {
		    alert("connection established");
		  }
		  if(xhttp.readyState==2)
		  {
		    alert("Request received");
		  }
		  if(xhttp.readyState==3)
		  {
		    alert("Request processed");
		  }
		  if(xhttp.readyState==4 && xhttp.status==200)
		  {
		    myFunction(xhttp);
		  }
		};
		xhttp.open("GET","example.xml",true);
		xhttp.send();
      }
 	  
	  function myFunction(xml){

	    var i;
		var xmlDoc=xml.responseXML;
		var table="<tr><th>FirstName</th><th>LastName</th><th>Rollno</th><tr>";
		var x=xmlDoc.getElementsByTagName("student");
		
		for(i=0; i<x.length; i++)
		{
			table +="<tr><td>"+
			x[i].getElementsByTagName("firstname")[0].childNodes[0].nodeValue+
			"</td><td>"+
			x[i].getElementsByTagName("lastname")[0].childNodes[0].nodeValue+
			"</td><td>"+
			x[i].getElementsByTagName("rollno")[0].childNodes[0].nodeValue+"</td></tr>";
		}
		document.getElementById("displayData").innerHTML=table;
	  }