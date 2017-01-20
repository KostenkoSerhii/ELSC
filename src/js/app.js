// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function(){
	/*begin ready*/

	/*begin lang*/
	$(".lang-btn").on("click", function(){
		$(".lang__list").slideToggle();
		$(".lang-btn").toggleClass("lang-btn-rov");
	});
	/*end lang*/

	/*begin menu*/

	var menuClone = $(".header__menu").clone(true);
	menuClone.attr("class", "menu-clone");
	$(".mobile-menu").append(menuClone);
	$(".menu-bnt-mobile").on("click", function(){
		$("body").addClass("body-ovh");
		$(".lang__list").slideUp();
		$(".lang-btn").removeClass("lang-btn-rov");
		$(".mobile-menu").slideDown();
	});
	$(".close-mobile-menu").on("click", function(){
		$("body").removeClass("body-ovh");
		$(".mobile-menu").slideUp();
	});
	/*end menu*/

/*begin slick*/
 $('.slider').slick({
 	dots: true
  });
/*end slick*/
	/*end ready*/
});