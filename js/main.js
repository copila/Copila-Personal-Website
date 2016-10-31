$(function () {

	$(".fancybox").fancybox({

		openEffect : 'elastic',
		closeEffect : 'elastic',
		openSpeed : 500,
		closeSpeed : 500,

	});

	$("#cooking_drop").hide();

	$("#cooking_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#cooking_header").hasClass("active")) {

			$("#cooking_drop").slideUp().removeClass("open");
			$("#cooking_header").removeClass("active");
		}
		else{

			$("#cooking_header").addClass("active");
			$("#cooking_drop").slideDown();

		}
		
	
	});

	$("#people_drop").hide();

	$("#people_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#people_header").hasClass("active")) {

			$("#people_drop").slideUp().removeClass("open");
			$("#people_header").removeClass("active");
		}
		else{

			$("#people_header").addClass("active");
			$("#people_drop").slideDown();

		}
		
	
	});

		$("#tech_drop").hide();

	$("#tech_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#tech_header").hasClass("active")) {

			$("#tech_drop").slideUp().removeClass("open");
			$("#tech_header").removeClass("active");
		}
		else{

			$("#tech_header").addClass("active");
			$("#tech_drop").slideDown();

		}
		
	
	});

	$("#sports_drop").hide();

	$("#sports_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#sports_header").hasClass("active")) {

			$("#sports_drop").slideUp().removeClass("open");
			$("#sports_header").removeClass("active");
		}
		else{

			$("#sports_header").addClass("active");
			$("#sports_drop").slideDown();

		}
		
	
	});

		$("#fitness_drop").hide();

	$("#fitness_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#fitness_header").hasClass("active")) {

			$("#fitness_drop").slideUp().removeClass("open");
			$("#fitness_header").removeClass("active");
		}
		else{

			$("#fitness_header").addClass("active");
			$("#fitness_drop").slideDown();

		}
		
	
	});

		$("#outdoors_drop").hide();

	$("#outdoors_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#outdoors_header").hasClass("active")) {

			$("#outdoors_drop").slideUp().removeClass("open");
			$("#outdoors_header").removeClass("active");
		}
		else{

			$("#outdoors_header").addClass("active");
			$("#outdoors_drop").slideDown();

		}
		
	
	});

			$("#traveling_drop").hide();

	$("#traveling_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#traveling_header").hasClass("active")) {

			$("#traveling_drop").slideUp().removeClass("open");
			$("#traveling_header").removeClass("active");
		}
		else{

			$("#traveling_header").addClass("active");
			$("#traveling_drop").slideDown();

		}
		
	
	});

				$("#photo_drop").hide();

	$("#photo_header").click(function (eventobject) {
		eventobject.preventDefault();

		if ($("#photo_header").hasClass("active")) {

			$("#photo_drop").slideUp().removeClass("open");
			$("#photo_header").removeClass("active");
		}
		else{

			$("#photo_header").addClass("active");
			$("#photo_drop").slideDown();

		}
		
	
	});

	    $('.image').fancybox({
	      padding: 0,
	      helpers: {
	        overlay: {
	          locked: false
	        }
	      },
	    'beforeLoad': function(){
	      disable_scroll();
	        },
	     'afterClose': function(){
	       enable_scroll();
	      }
    	});


});