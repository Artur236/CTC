$(function(){
	$(window).scroll(function() {//при скролле меню фиксируется
		if ($(window).scrollTop() > 350) {
			$('.header .nav_bar').addClass('navbar-fixed-top');
			$('.slicknav_menu').css('marginTop', '10px');
		}
		else {
			$('.header .nav_bar').removeClass('navbar-fixed-top');
			$('.slicknav_menu').css('marginTop', '30px');
		}
		$(window).resize(function(){
			if ($(window).width() <= 320){
				$('.slide').removeClass('rslides');
				$('.slide').removeClass('rslides1');
			}	
		});
	});

	var ctx = document.getElementById('my_canvas').getContext('2d');//canvas - прогресс бар на главной странице
	var al = 0;
	var start = 0;
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;
	var diff;
	var gradient=ctx.createLinearGradient(0,0,170,0);
	function progressSim() {
		diff = al / 100 * Math.PI * 2;
		ctx.clearRect(0, 0, cw, ch);
		ctx.lineWidth = 5;
		ctx.fillStyle = '#fff';
		ctx.strokeStyle = gradient;
		gradient.addColorStop("0.1","#5acd79");
		gradient.addColorStop("1","#fdc21d");
		ctx.textAlign = 'center';
		ctx.font = "lighter 40px Arial";
		ctx.fillText(al + '%',  cw * 0.5, ch * 0.5 + 2, cw);
		ctx.beginPath(); 
		ctx.arc(100, 100, 70, start, diff + start, false);
		ctx.stroke();
		al = al + 1;
		if (al >= 76) {
			clearTimeout(sim);
		}
	}

	var sim = setInterval(progressSim, 50);
	window.onload = progressSim;

		// Slider
		$(function() {//слайдер на главной странице
			$(".rslides").responsiveSlides({
				auto:false,
				navContainer:"",
				nav:true
			}
			);
		});
		$(function(){
			$('#menu').slicknav();
		});
		$('img').retina({//ретина плагин для изображений
    // Check for data-retina attribute. If exists, swap out image
    dataRetina: true,
     // Suffix to append to image file name
     suffix: "",
     // Check if image exists before swapping out
     checkIfImageExists: false,
     // Callback function if custom logic needs to be applied to image file name
     customFileNameCallback: "",
     // override window.devicePixelRatio
     overridePixelRation: false
 });
	});


