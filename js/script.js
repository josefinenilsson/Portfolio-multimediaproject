/* Geolocation */


//navigator.geolocation.getCurrentPosition(gotIt,aintGotIt);
			
//function gotIt(pos) {
//var myLatlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
	//var mapOptions = {
		//zoom: 18,
		//center: myLatlng,
		//mapTypeId: google.maps.MapTypeId.ROADMAP
//}
//var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
//var marker = new google.maps.Marker({
	//position: myLatlng,
	//map: map,
	//title: 'You are here!'
//});
//}

//google.maps.event.addDomListener(window, 'load', initialize);			
//function aintGotIt(error){
//alert(error.message);
//}


/* Local storage */

window.onload = function(){
	if(localStorage.length>0){
		document.querySelector("nameinput").placeholder=localStorage.name;
		document.getElementById("mailinput").value
		localStorage.setItem("mailinput") = "värdet du vill spara i variabeln"
		
			

		document.write.innerHTML="<h1>Welcome " + localStorage.name + '!</h1><button onclick="localStorage.clear();location.reload()">Clear memory</button>';
	}
}
function remember(){
	val = document.getElementById("name").value;
	localStorage.name=val;
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

//video

var video = document.getElementById('video');
video.addEventListener('click',function(){
video.play();
},false);



