//Popover logic
(function( window, undefined ){


	var open    = document.getElementById( "open_popover" );
	var open1   = document.getElementById( "open1" );
	var open2   = document.getElementById( "open2" );
	var close   = document.getElementById( "close_popover" );
	var popover = document.getElementById( "popover" );

	var show = function(){
		popover.style.display = "block";
	};

	var hide = function(){
		popover.style.display = "none";
	};

	//fires when I click the contact us link in 
	//the main nav
	open.addEventListener( "click", function( e ){

		e.preventDefault();
		show();
	} );

	//fires when I click the contact us link in 
	//the main nav
	if( open1 ){
		open1.addEventListener( "click", function( e ){

			//console.log( e, this );
			e.preventDefault();
			show();
		} );
	}

	if( open2 ){
		open2.addEventListener( "click", function( e ){

			//console.log( e, this );
			e.preventDefault();
			show();
		} );
	}

	//fires when I click the close button
	close.addEventListener( "click", function( e ){

		e.preventDefault();
		hide();
	} );

})( window, undefined );