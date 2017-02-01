
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
	



	