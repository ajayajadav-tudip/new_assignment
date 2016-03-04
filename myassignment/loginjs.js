		function validateForm() {
			var x = document.forms["myForm"]["fname"].value;
			var y = document.forms["myForm"]["fname1"].value;
			if (x == null || x == "" || y == null || y == "") {
			alert("fields must be filled out");
			return false;
			}
			if ( x == "admin" && y == "admin"){
			alert ("Login successfully");
			window.location = "#"; // Redirecting to other page.
			return false;
			}
			else{
			alert("Invalid Input");
			//document.forms["myForm"]["fname"].value="";
			//document.forms["myForm"]["fname1"].value="";
			}
			}	
