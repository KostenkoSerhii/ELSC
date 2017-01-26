// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function(){
	/*begin ready*/
	var windowWidth = $(window).width();
	if(windowWidth < 767){
		var img =	$(".company__right-column").children("img").detach();
		$(".company__right-column ").append(img);

		/*begin services-sliders*/
		$('.js-services-slider').slick({
			arrows: true
		});
		/*end services-sliders*/

	};
	/*begin lang*/
	$(".js-lang-btn").on("click", function(){
		$(".lang__list").slideToggle();
		$(".js-lang-btn").toggleClass("lang-btn-active");
	});
	/*end lang*/

	/*select*/
	$('select').each(function(){
		var $this = $(this), 
		numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select_wrapper"></div>');
		$this.after('<div class="select-view"></div>');

		var $styledSelect = $this.next('div.select-view');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />');
		$list.addClass('select-options').insertAfter($styledSelect);
		for (var i = 0; i < numberOfOptions; i++) { 	
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-view.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle(300);
		});

		$listItems.click(function(e) {
			$(this).addClass("active");
			$listItems.not(this).removeAttr("class");

			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.slideUp();
		});

	});
	/*select*/

	/*begin menu*/

	var menuClone = $(".header__menu").clone(true);
	menuClone.attr("class", "menu-clone");
	$(".mobile-menu").append(menuClone);
	$(".js-menu-bnt-mobile").on("click", function(){
		$("body").addClass("js-body-ovh");
		$(".lang__list").slideUp();
		$(".lang-btn").removeClass("lang-btn-rov");
		$(".mobile-menu").slideDown();
	});
	$(".js-close-mobile-menu").on("click", function(){
		$("body").removeClass("js-body-ovh");
		$(".mobile-menu").slideUp();
	});
	/*end menu*/

	/*begin slick*/
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
		pauseOnHover: false
	});
	/*end slick*/



	/*end ready*/
});