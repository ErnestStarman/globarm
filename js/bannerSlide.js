
		$(document).ready(function() {
				var banner = $('.topGridUl').children();
				console.log(" "+banner+" "+banner.length);
				var flag = 0;
				var leftPointer = document.getElementsByClassName('leftPointer');
				var rightPointer = document.getElementsByClassName('rightPointer');
				var timerNow=1;
				leftPointer[0].addEventListener("click", function() {
					if(flag - 1 >=0) {
						console.log("flag>length"+":"+flag)
						fadeOut(banner[flag]);
						fadeIn(banner[flag - 1]);
						flag = flag - 1;
					}
					else if(flag - 1 <0) {
						console.log("flag<length"+":"+flag)
						fadeOut(banner[flag]);
						fadeIn(banner[banner.length-1]);
						flag = banner.length-1;
					}
					clearTimeout(timerNow);
					console.log(timerNow);
					timerNow=setTimeout(function(){
						$(".topBannerPointer").fadeOut()
					},2000);
				});
				if($(window).width()<600){
				setInterval(function(){
					if(flag+1 <banner.length) {
						console.log("flag<length"+":"+flag)
						fadeOut(banner[flag]);
						fadeIn(banner[flag + 1]);
						flag = flag + 1;
					}
					else if(flag + 1 >=banner.length) {
						console.log("flag>length"+":"+flag)
						fadeOut(banner[flag]);
						fadeIn(banner[0]);
						flag = 0;
					}
				},3000);}
				rightPointer[0].addEventListener("click", function() {
					if(flag+1 <banner.length) {
						console.log("flag<length"+":"+flag)
						fadeOut(banner[flag]);
						fadeIn(banner[flag + 1]);
						flag = flag + 1;
					}
					else if(flag + 1 >=banner.length) {
						console.log("flag>length"+":"+flag)
						fadeOut(banner[flag]);
						fadeIn(banner[0]);
						flag = 0;
					}
					clearTimeout(timerNow);
					console.log(timerNow);
					timeNow=setTimeout(function(){
						$(".topBannerPointer").fadeOut()
					},2000);
				});
				function fadeIn(domElem) {
					$(domElem).fadeIn();
				}

				function fadeOut(domElem) {
					$(domElem).fadeOut();
				}
				$(".topGridH1").click(function(){
					$(".topBannerPointer").fadeToggle();
					if($(".topBannerPointer").css("display")!="none"){
					clearTimeout(timerNow);
					console.log(timerNow);
					timerNow=setTimeout(function(){
						$(".topBannerPointer").fadeOut()
					},2000);
					}
				});
				
		});