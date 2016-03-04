/*function myFunction(city)
{
  var city_val=document.getElementById("country").value;
  alert(city_val);
  
   alert(city.city_name);
  if(city_val==city.city_name){
    alert("inside");
  }
}



$(document).ready(function(){
	
	$("#country").load(function()
	{
		$("#state1").hide();
		$("#state2").hide();
	});
	
});*/

var india=[{display:"Maharashtra",value:"Maharashtra"},
{display:"Orissa",value:"Orissa"},
{display:"AndraPradesh",value:"AndraPradesh"}];

var USA=[{display:"Los-Angles",value:"Los-Angles"},
{display:"NewYork",value:"NewYork"},
{display:"Chicago",value:"Chicago"}];

$("#country").change(function()
{
	var country_name=$(this).val();
	alert(country_name);
	
	switch(country_name)
	{
		case 'India':
			list(india);
			break;
		case 'USA':
			list(USA);
			break;
		default:
			$("#state").html('');
	}
});

function list(arr)
{
	alert(arr);
	$("#state").html('');           //reset to blank
	$(arr).each(function(i)
	{
		$("#state").append("<option value="+arr[i].value+">"+arr[i].display+"</option>");
	});
}