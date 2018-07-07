$(document).ready(function() {
	$(".enterButton").click(animationEnter);
	preLoadImage();
	if(document.body.clientHeight>600){
		console.log(parseInt($(".bottomDiv").css("bottom"))+50+"px");
		console.log($(".bottomDiv").length)
		$(".bottomDiv").each(function(){
			$(this).css("bottom",parseInt($(this).css("bottom"))+50+"px");
			console.log(parseInt($(this).css("bottom"))+30+"px");
		});
		}
	console.log(document.body.clientHeight);
	function animationEnter() {
		console.log("call animationEnter()");
		$(".moonDiv").fadeOut(2500);
		$(".planetCanvas").animate({ margin: '0px auto' }, 500, earthMove);
		//		$("#earthDiv").css("position","fixed");
		function earthMove() {
			$("#earthDiv").animate({
				opacity: '0',
				width: '50px',
				height: '50px',
				left: '0px',
				top: '0px',
			}, 1500, function() {
				$(".allCanvas").animate({
					opacity: '0.3',
				}, 1500);
				$(".enterButton").animate({
					opacity: '0.1',
				}, 1500);
				setTimeout(function() {
					window.location = "HomePage.html";
				}, 0)
			});
		}
	}
	setTimeout(alertAll,7000);
	function alertAll(){
		$(".rightquotes").fadeIn(1000);
		$(".leftquotes").fadeIn(1000);
		$(".natureWin1").fadeIn(1500);
	}
	setTimeout(enterNextPage,10000);
	function enterNextPage(){
		$(".rightquotes").fadeOut(1000);
		$(".leftquotes").fadeOut(1000);
		$(".natureWin1").fadeOut(1000);
		$(".natureWin2").fadeIn(1500);
		setTimeout(function(){
		$(".enterButton").fadeIn(2000);
	},1500);
	}
	function preLoadImage() {
		setTimeout(function() {
			// XHR to request a JS and a CSS  
			var xhr = new XMLHttpRequest();
			xhr.open('GET', "HomePage.html");
			xhr.send('');
			console.log("get");
			//      xhr = new XMLHttpRequest();  
			//      xhr.open('GET', 'http://domain.tld/preload.css');  
			//      xhr.send('');  
			//      // preload image
			//			for(var i=0;i<15;i++){
			//			new Image().src = "img/planets/moveEarth"+i+".png";
			//			}
		}, 0);
	}
});