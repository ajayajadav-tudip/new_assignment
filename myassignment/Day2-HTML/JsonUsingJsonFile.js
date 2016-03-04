function myFunction(arr)
{
   var out="<table border=1 width=100%><tr><th>FirstName</th><th>LastName</th><th>RollNo</th><th>Subjects</th></tr>";
   var i;
   
   for(i=0;i<arr.length;i++)
   {
	   out+="<tr><td>"+
	   arr[i].FName+"</td><td>"+
	   arr[i].LName+"</td><td>"+
	   arr[i].Rollno+"</td><td>"+
	   arr[i].Subjects+"</td></tr>";
	   
   }
   out+="</table>";
   
   document.getElementById("id1").innerHTML=out;
}