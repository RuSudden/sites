$(function() {
	let filter = $("[data-filter]");
	/* Filter
	==================================*/
	filter.on("click", function(event) {
		event.preventDefault();

		let cat = $(this).data('filter');

		if(cat == 'all') {
			$("[data-pop]").removeClass("hide");	
		} else {
			$("[data-pop]").each(function() {

				let workcat = $(this).data('pop');

				if(workcat != cat) {
					$(this).addClass('hide')
				} else {
					$(this).removeClass('hide');
				}
			});
		}	
	});


	/* Modal
	=========================*/
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]")

	modalCall.on("click", function(event) {
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
		$("body").addClass('no-scroll');



		setTimeout(function(){
			$(modalId).find(".modal__dialog").css ({
				transform: "rotateX(0)"
			});
		}, 200);
	});



	modalClose.on("click", function(event) {
		event.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('.modal');

		$(modalParent).find(".modal__dialog").css ({
			transform: "rotateX(90deg)"
		});

		setTimeout(function(){
			modalParent.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 200);
	});



	$(".modal").on("click", function(event) {
		let $this = $(this);

		$(this).find(".modal__dialog").css ({
			transform: "rotateX(90deg)"
		});

		setTimeout(function(){
			$this.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 200);	
	});

	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation();
	});


		/* SmoothScroll
	=========================*/

	$(document).ready(function(){
		$('a[href^="#"]').bind('click.smoothscroll',function (e) {
			e.preventDefault();
	
			var target = this.hash,
			$target = $(target);
	
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
	
	});

});