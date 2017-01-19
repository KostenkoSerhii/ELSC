// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function(){
/*begin ready*/

/*begin lang*/
var cloneLang = $(".lang__list").clone(true);
cloneLang.attr("class", "lang__list-clone");
$(".header__top-line").prepend(cloneLang);


$(".mobile-lang-wiev").on("click", function(){
	$(".lang__list-clone").slideToggle();
});
$(".lang__list-clone .lang__item").on("click", function(){
	var img = $(this).find("img").clone(true);
	$(".mobile-lang-wiev").append(img);
	$(".mobile-lang-wiev").find("img").first("img").remove();
});

/*end lang*/




/*end ready*/
});