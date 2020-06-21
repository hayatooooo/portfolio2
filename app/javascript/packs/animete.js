$(function(){
	anime({
		targets: '.text > span',
		scale: [0,1.3],
		duration: 500,
		easing: 'easeInElastic(100,10)',
		delay: anime.stagger(200)
	});	
});