$(document).ready(function(){
	//check everything before submitting
	$("#register_button").live("click", function(event) {
		$(".required[value = '']").addClass('red-border');
		$(".required[value != '']").removeClass('red-border');

		if(//validate('', 'name', $("#form01").val()) && 
			validate('', 'age', $("#age").val()) &&
			//validate('', 'city', $("#city").val() &&
			//validate('', 'country', $("#country").val()) &&
			//validate('', 'education', $("#education").val())
			//validate('', 'profession', $("#profession").val()) &&
			//validate('', 'organization', $("#organization").val()) &&
			//validate('', 'motivation', $("#motivation").val())) &&
			$(".red-border").length == 0
			)
			return true;
		else {
			event.preventDefault();
		}
	});
  
	$(".course-materials").hide();                  //Initially hide all content
	$("#course-tabs li:first").attr("id","current");//Activate first tab
	$("#course-content div:first").fadeIn();        //Show first tab content
	
	$('#course-tabs a').click(function(e) {
		e.preventDefault();
		if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
			return       
		}
		else {
			$(".course-materials").hide();
			$("#course-tabs li").attr("id","");     //Reset id's
			$(this).parent().attr("id","current");  //Activate this
			$('#' + $(this).attr('name')).fadeIn(); //Show content for current tab
		}
	});


});

function checkRequired() {
	if($('input:text[value=""]').length > 0)
		return false;
	else
		return true;
}

function validate(tag, name, value) {
	var check = false;
	switch(name) {
		case "age":
			if(value.match(/^[1-9][0-9]{0,1}$/) != null) {
				$("#age").removeClass('red-border');
				check = true;
			}
			else {
				$("#age").addClass('red-border');
				check = false;
			}
			break;
		default:
			check = false;
			break;
	}
	return check;
}