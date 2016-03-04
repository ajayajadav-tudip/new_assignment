
$(document).ready(function(){
	//window.ready(function(){
		
		checkname();
		checksurname();
		checkemail();
		checkmb();
			
    $("input").focus(function(){
        $(this).css("background-color", "#F8F8FF");
	});
	
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
	
	
	$("#b1").focusout(function(){
        if($(this).val()=="")
		{
			alert("field can not empty");
			$(this).focus();
		}	
	});
	
	$("#b2").focusout(function(){
        if($(this).val()=="")
		{
			alert("field can not empty");
			$(this).focus();
		}	
	});
	
	$("#b3").focusout(function(){
        if($(this).val()=="")
		{
			alert("field can not empty");
			$(this).focus();
		}	
	});
	
	$("#b4").focusout(function(){
        if($(this).val()=="")
		{
			alert("field can not empty");
			$(this).focus();
		}	
	});
	
	$("#b5").focusout(function(){
        if($(this).val()=="")
		{
			alert("field can not empty");
			$(this).focus();
		}	
	});
	
	$("#b6").focusout(function(){
        if($(this).val()=="")
		{
			alert("field can not empty");
			$(this).focus();
		}	
	});
    

	});
	
	
	
	
	
	function checkname()
{
 $("#b1").on("change", function()
 {
  var fname=document.getElementById('b1').value;
  var letters = /^[A-Za-z]+$/;
  
  if(!fname.match(letters))
  {
   alert("Invalid name");
  }
 });
}


function checksurname()
{
 $("#b2").on("change", function()
 {
  var fname=document.getElementById('b2').value;
  var letters = /^[A-Za-z]+$/;
  
  if(!fname.match(letters))
  {
   alert("Invalid name");
  }
 });
}

function checkemail()
{
 $("#b6").on("change", function()
 {
  var e=document.getElementById('b6').value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e))
  {
   alert("Invalid e-mail");
  }
 });
}

function checkmb()
{
 $("#b5").on("change", function()
 {
  var mb=document.getElementById("b5").value;
  var phno = /^\d{10}$/;
  if(!mb.match(phno))
  {
   alert("Invalid mobile number");
  }
 });
}




