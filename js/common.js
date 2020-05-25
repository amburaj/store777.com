$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 7000,
    video: true,
  });
});


$(document).ready(function(){
	$("#sampleForm").submit(function(event){
		event.preventDefault();
		if(!validate(this)){
			$("#sampleFormError").html("Ops, Looks like there are some errors!").slideDown(500);
		}else{
			$("#sampleFormError").slideUp(500).html("");
			$(this).children(".validate").removeClass("field-error");
			// paste your ajax code here;
		}
		
	});
	
	$(".form-control").focus(function(){
		$(this).parent().addClass("activeInput");
	});
	
	$(".form-control").blur(function(){
		var val = $(this).val();
		if(val == ""){
			$(this).parent().removeClass("activeInput");
		}else{
			$(this).parent().removeClass("activeInput").addClass("passiveInput");
		}
	});
	
	function validate(formID){
		var status = true;
		$(formID).children(".validate").each(function(){
			var type = $(this).children(".form-control").attr("type");
			if(type == "text"){
				var val = $(this).children(".form-control").val();
				val = val.replace(/\s+/, "");
				if(val == ""){
					$(this).children(".error-text").html("Please fill up the following field");
					$(this).addClass("field-error");
					status = false;
				}
			}else if(type == "email"){
				var target = $(this).children(".form-control");
				var val = $(this).children(".form-control").val();
				var atpos = val.indexOf("@");
    			var dotpos = val.lastIndexOf(".");
				if(val == ""){
					$(this).children(".error-text").html("Please fill up the following field");
					$(this).addClass("field-error");
					status = false;
				}else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=val.length) {
					$(this).children(".error-text").html("Please enter a proper email address");
					$(this).addClass("field-error");
					status = false;
				}
			}else if(type == "number"){
				var val = $(this).children(".form-control").val();
				if(val == ""){
					$(this).children(".error-text").html("Please fill up the following field");
					$(this).addClass("field-error");
					status = false;
				}else if (!$.isNumeric(val)) {
					$(this).children(".error-text").html("Please enter numeric digits");
					$(this).addClass("field-error");
					status = false;
				}
			}
		})
		return status;
	}
})


