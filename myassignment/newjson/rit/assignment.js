$(document).ready(function(){
    $("#flip").click(function(){
        $("#studentDiv").slideToggle("slow");
    });

	 $("#addstudent").hide();
	$("#addStudentbutton").click(function(){
        $("#addstudent").slideToggle();
    });

		$("#closeAddStu").click(function(){
        $("#addstudent").hide();
    });

	 $("#deletestudent").hide();
	$("#deleteStudentbutton").click(function(){
        $("#deletestudent").slideToggle();
    });

	$(".closeDelStu").click(function(){
        $("#deletestudent").hide();
    });

	 $("#updateStu").hide();
	$("#updateStudentButton").click(function(){
        $("#updateStu").slideToggle();
    });



});