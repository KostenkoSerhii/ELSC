'use strict';

/*begin menu*/

$('.header__menu-item a').each(function () {
	// получаем все нужные нам ссылки
	var location = window.location.href; // получаем адрес страницы
	var link = this.href; // получаем адрес ссылки
	if (location == link) {
		// при совпадении адреса ссылки и адреса окна
		$(this).addClass('is-active'); //добавляем класс
	}
});

var menuClone = $(".header__menu").clone(true);
menuClone.attr("class", "menu-clone");
$(".mobile-menu").append(menuClone);
$(".js-menu-bnt-mobile").on("click", function () {
	$("body").addClass("js-body-ovh");
	$(".lang__list").slideUp();
	$(".lang-btn").removeClass("lang-btn-rov");
	$(".mobile-menu").slideDown();
});
$(".js-close-mobile-menu").on("click", function () {
	$("body").removeClass("js-body-ovh");
	$(".mobile-menu").slideUp();
});
/*end menu*/