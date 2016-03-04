function call()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var obj=JSON.parse(xmlhttp.responseText);
		document.getElementById("first").innerHTML="Name :"+obj.FirstName +" "+obj.LastName+"<br>"+"Contact No :"+obj.ContactNo+"<br>"+"Email Address  :"+obj.Email+"<br>"+"Address:"+obj.Address.City+","+obj.Address.State+","+obj.Address.Zip;
    }
	
}
xmlhttp.open("GET", "file.json", true);
xmlhttp.send();
	
}