// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery-ui.min.js

sayHello();

$(document).ready(function(){
//=include modules/select.js
//=include modules/menu.js


	/*begin 767*/
	var windowWidth = $(window).width();
	if(windowWidth < 767){
		var img =	$(".company__right-column").children("img").detach();
		$(".company__right-column ").append(img);

		/*begin services-sliders*/
		$('.js-services-slider').slick({
			arrows: true
		});
		/*end services-sliders*/
		$("#tabs").tabs({
			show: { effect: "fadeIn", duration: 300 },
			hide: { effect: "fadeOut", duration: 300}
		});

	}else{
		$("#tabs").tabs({
			show: { effect: "fadeIn", duration: 300, delay: 100 },
			hide: { effect: "fadeOut", duration: 300, delay: 100 }
		});

	};
	/*end >767*/


	/*begin lang*/
	$(".js-lang-btn").on("click", function(){
		$(".lang__list").slideToggle();
		$(".js-lang-btn").toggleClass("lang-btn-active");
	});
	/*end lang*/


	/*begin slick*/
	$('.js-slider').slick({
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
		pauseOnHover: false
	});
	/*end slick*/



	/*end ready*/
});