$(document).ready(function() {
	//	var canvas=document.getElementById("canvasUniverse");
	//	context = canvas.getContext('2d');
	//	img = new Image();
	//	img.src = 'img/planets/logo_earth.png';
	//	img.onload = function() {
	//		context.drawImage(img, 50, 50, 150, 150);
	//	}
	var count = 1;
	$(".earthDiv").ready(function() {
//		preLoadImage();
//		window.setTimeout(addEarthBackGround, 3500);
		count++;
		$(".moonDiv").fadeIn(2500);
		
	});

	function addEarthBackGround() {
//		$("#earthDiv").addClass("backgroundEarth");
//		console.log("addEarth()" + count);

	}

	function preLoadImage() {
//		setTimeout(function() {
//			//      // XHR to request a JS and a CSS  
//			//      var xhr = new XMLHttpRequest();  
//			//      xhr.open('GET', 'http://domain.tld/preload.js');  
//			//      xhr.send('');  
//			//      xhr = new XMLHttpRequest();  
//			//      xhr.open('GET', 'http://domain.tld/preload.css');  
//			//      xhr.send('');  
//			//      // preload image
//			for(var i=0;i<15;i++){
//			new Image().src = "img/planets/moveEarth"+i+".png";
//			}
//		}, 0);
	}
	
}

);