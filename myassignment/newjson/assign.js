 $(document).ready(function(){
 $("#updateByNameDiv").hide();
	$("#updateStudentButton").click(function(){
        $("#updateByNameDiv").slideToggle();
		});
});



function showStudentList(){
	studentList(Students);
	}

 function studentList(arr){
 var out = "<table border=1 width=100%><tr><th>First Name</th><th>Last Name</th><th>Roll Number</th> <th>Subjects</th></tr>";
    var row;
    for(row = 0; row < arr.length; row++) {
        out += "<tr><td>" + arr[row].firstName + "</td><td >" + 
			  arr[row].lastName + "</td><td >" +
			  arr[row].rollNo + "</td><td >" +
			  arr[row].subjects +"</td></tr>" ;
	}
	out +="</table>";
	document.getElementById("studentDiv").innerHTML = out;
 }

 function addStudentInfo(){
	var newStu = {"firstName":document.getElementById("newFirstName").value,
			"lastName":document.getElementById("newLastName").value,
			"rollNo":document.getElementById("newRollNo").value,
			"subjects":document.getElementById("newSubjects").value, }; 

		Students.push(newStu);
		studentList(Students);
		document.getElementById("newFirstName").value="";
		document.getElementById("newLastName").value="";
		document.getElementById("newRollNo").value="";
		document.getElementById("newSubjects").value="";
 }

var upd=0;var upnew=0;
function updateByName(){
    for(upd = 0; upd < Students.length; upd++) {
    if(Students[upd].firstName==document.getElementById("updateByName").value){
		document.getElementById("updateFirstName").value=Students[upd].firstName;
		document.getElementById("updateLasttName").value=Students[upd].lastName;
		document.getElementById("updateRollNo").value=Students[upd].rollNo;
		document.getElementById("updateSubjects").value=Students[upd].subjects;
	break;  }
    }upnew=(upd);
     
}

function updateInDb(){
		
		Students[upnew].firstName=document.getElementById("updateFirstName").value;
		Students[upnew].lastName=document.getElementById("updateLasttName").value;
		Students[upnew].rollNo=document.getElementById("updateRollNo").value;
		Students[upnew].subjects=document.getElementById("updateSubjects").value;
		 
		 studentList(Students);
		document.getElementById("updateFirstName").value="";
		document.getElementById("updateLasttName").value="";
		document.getElementById("updateRollNo").value="";
		document.getElementById("updateSubjects").value="";
		document.getElementById("updateByName").value="";
}

 function deleteStudent(){
 findAndRemove(Students, "firstName", document.getElementById("deleteByName").value);
 studentList(Students);
 }



 function findAndRemove(array, property, value) {
 for(i=0;i<=array.length;i++){
  if(array[i].firstName==value){
	Students.splice(i, 1);
	studentList(Students);
	document.getElementById("deleteByName").value="";
	
  }
 }
}
