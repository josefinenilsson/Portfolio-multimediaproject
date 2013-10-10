

/* Local storage */

window.onload = function(){
	if(localStorage.length>0){
		document.getElementById("name").value=localStorage.namn;
		document.getElementById("email").value=localStorage.email;

		
		
}


	
}
function remember(){
	val = document.getElementById("name").value;
	emailstring = document.getElementById("email").value;
	localStorage.namn=val;
	localStorage.email=emailstring;
	window.location.reload();
}

/* Show and hide classes css */

//.hidden{
	//display:none;
//} 



/* Interactive javascript*/


/*  Flexslider */

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


//

$('body').flipLightBox({ lightbox_flip_speed: 500, lightbox_border_color: '#666666' })





