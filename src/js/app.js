// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function(){
/*begin ready*/

/*begin lang*/
$(".mobile-lang-btn").on("click", function(){
	$(".lang__list").slideToggle();
	$(".mobile-lang-btn").toggleClass("mobile-lang-btn-rov");
});
/*end lang*/

/*begin menu*/

var menuClone = $(".header__menu").clone(true);
menuClone.attr("class", "menu-clone");
$(".mobile-menu").append(menuClone);
$(".menu-bnt-mobile").on("click", function(){
	$(".mobile-menu").toggleClass("mobile-menu-active");
});

$(".close-mobile-menu").on("click", function(){
$(".mobile-menu").removeClass("mobile-menu-active");
});
/*end menu*/


/*end ready*/
});