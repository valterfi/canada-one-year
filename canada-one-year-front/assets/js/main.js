/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});

		});

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

			function isInView(el) {
				var rect = el.getBoundingClientRect();           // absolute position of video element
				return !(rect.top > $(window).height() || rect.bottom < 0);   // visible?
			  }
			  
			  $(document).on("scroll", function() {
				$( "video" ).each(function() {
				  if (isInView($(this)[0])) {                    // visible?
					//if ($(this)[0].paused) $(this)[0].play();    // play if not playing
				  }
				  else {
					if (!$(this)[0].paused) $(this)[0].pause();  // pause if not paused
				  }
				});  
			  });

				// $(document).on({
				// 	ajaxStart: function() { 
				// 		console.log('ajaxStart');    
				// 		$body.addClass("loading");
				// 	},
				// 	ajaxStop: function() { 
				// 		console.log('ajaxStop'); 
				// 		$body.removeClass("loading");
				// 	}    
				// });

				$( document ).ready(function() {
					$body = $("body");
					$body.removeClass("loading");
					console.log("tirou");
				});

				$(window).bind("load", function() {
					console.log("aqui");
					$('#movie-area').load('assets/html/bastidores-movie.html');  
					$('#video1').load('assets/html/1-movie.html');
					$('#video2').load('assets/html/2-movie.html');
					$('#video3').load('assets/html/3-movie.html');
					$('#video4').load('assets/html/4-movie.html');
					$('#video5').load('assets/html/5-movie.html');
					$('#video6').load('assets/html/6-movie.html');
					$('#video7').load('assets/html/7-movie.html');
					$('#video8').load('assets/html/8-movie.html');
					$('#video9').load('assets/html/9-movie.html');
					$('#video10').load('assets/html/10-movie.html');
					$('#video11').load('assets/html/11-movie.html');
					$('#video12').load('assets/html/12-movie.html');
					$('#video13').load('assets/html/13-movie.html');
					$('#video14').load('assets/html/14-movie.html');
					$('#video15').load('assets/html/15-movie.html');
					$('#video16').load('assets/html/16-movie.html');
					$('#carousel-id-2').load('assets/html/2-carousel-movie.html');
					$('#carousel-id-3').load('assets/html/3-carousel-movie.html');
					$('#carousel-id-4').load('assets/html/4-carousel-movie.html');
					$('#carousel-id-5').load('assets/html/5-carousel-movie.html');
				}); 

				let baseUrl = 'http://localhost:5000/words/'

				var chart;

				$.getJSON(baseUrl, function(data) {

					anychart.onDocumentReady(function () {

						// create data   
						// var data = [
						// 	{x: "avançamento", value: 80},
						// 	{x: "includes", value: 56},
						// 	{x: "lists", value: 44},
						// 	{x: "meaning", value: 40},
						// 	{x: "useful", value: 36},
						// 	{x: "different", value: 32},
						// 	{x: "grammar", value: 28},
						// 	{x: "teaching", value: 24},
						// 	{x: "example", value: 20},
						// 	{x: "thing", value: 12}
						// ];
					
						// create a chart and set the data
						chart = anychart.tagCloud(data);
					
						// set the chart title
						//chart.title("Tag Cloud Chart: Data (x, value)");
					
						// set the container id
						chart.container("container");
					
						// initiate drawing the chart
						chart.draw();
					});

				});

				$(".box form").submit(function( event ) {
					//alert( "Handler for .submit() called." );
					event.preventDefault();

					let message = $(this).serializeArray().reduce(function(obj, item) {
						obj[item.name] = item.value;
						return obj;
					}, {});

					$.getJSON('https://jsonip.com/', function(data) {

						phrase = {
							description: message.palavrinha,
							ip: data.ip
						}

						$.ajax({
							url: baseUrl,
							method: 'POST',
							data: JSON.stringify(phrase),
							contentType: "application/json"
						}).done(function() {

							$.getJSON(baseUrl, function(data) {
								// create a chart and set the data

								$("#container").empty();

								chart = anychart.tagCloud(data);
							
								// set the chart title
								//chart.title("Tag Cloud Chart: Data (x, value)");
							
								// set the container id
								chart.container("container");
							
								// initiate drawing the chart
								chart.draw();

								$("#palavrinhaId").val("");

								// 3
								$("html, body").animate({ scrollTop: $('#contact').offset().top }, 800);
							});

						});

					});
					
				});

				function loadCloud() {
					
				}

})(jQuery);