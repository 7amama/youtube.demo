$(document).ready(function(){
	
	//Fix Errors - http://www.learningjquery.com/2009/01/quick-tip-prevent-animation-queue-buildup/
	
	//Remove outline from links
	$("a").click(function(){
		$(this).blur();
	});
	
	//When mouse rolls over
	$(".title").mouseover(function(){
		$(this).stop().animate({height:'130px'},{queue:false, duration:800, easing: 'easeOutBounce'})
		$('.match-title').css('height', '130px');
		$('.get-info').css('height', '130px');
	});
	
	//When mouse is removed
	$(".title").mouseout(function(){
		$(this).stop().animate({height:'100px'},{queue:false, duration:800, easing: 'easeOutBounce'})
		$('.match-title').css('height', '100px');
		$('.get-info').css('height', '100px');
	});
	
});