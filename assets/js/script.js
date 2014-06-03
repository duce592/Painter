var boxColor = "white";



$(document).ready(function(){

	
	
	$('#blueBox').on('click', function(){
		boxColor = "blue";
		$('#blueBox', '#redBox', '#yellowBox', '#whiteBox').removeClass( "selector" );
		$(this).addClass("selector");
	});
	
	$('#redBox').on('click', function(){
		boxColor = "red";
		$('#blueBox', '#redBox', '#yellowBox', '#whiteBox').removeClass( "selector" );
		$(this).addClass("selector");
	});
	
	$('#yellowBox').on('click', function(){
		boxColor = "yellow";
		$('#blueBox', '#redBox', '#yellowBox', '#whiteBox').removeClass( "selector" );
		$(this).addClass("selector");
	});
	
	$('#whiteBox').on('click', function(){
		boxColor = "white";
		$('#blueBox', '#redBox', '#yellowBox', '#whiteBox').removeClass( "selector" );
		$(this).addClass("selector");
	});
	
	
	$('.box').on('click', function(){
		if(boxColor == "blue" ){
			$(this).removeClass( "red white yellow" ).addClass( "blue" );
		}
		else if(boxColor == "red" ){
			$(this).removeClass( "blue white yellow" ).addClass( "red" );
		}
		else if(boxColor == "yellow" ){
			$(this).removeClass( "red white blue" ).addClass( "yellow" );
		}
		else {
			$(this).removeClass( "red blue yellow" ).addClass( "white" );
		}
	});





});