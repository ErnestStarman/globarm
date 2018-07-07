$(document).ready(function() {
	$("#storageBox").click(function() {
		$(".titleOthers").slideToggle();
	});
	var changedFlag = 0;
	var offsetDiv1 = 0;
	setInterval(calculateDiv1, 100);
	
	var weizhi = $('.contentDiv3').offset().top;
	$(".linkNextPage").click(function(){
		console.log($('.contentDiv3').scrollTop());
		console.log($('.contentDiv2').scrollTop());
//		$(".contentDiv3").offset({top:0});
	});
	
	function calculateDiv1() {
		offsetDiv1 = $(".titleAll").offset().top;
		if(changedFlag == 0 && offsetDiv1 < -150) {
			changeBanner();
			changedFlag = 1;
		}
		if(changedFlag == 1 && offsetDiv1 > -150) {
			recoverBanner();
			changedFlag = 0;
		}
		
	}

	function changeBanner() {
		$(".titleBarNavUl li a").addClass("titleBlack");
		$(".titleBar").css("backgroundColor", "#fefefe");
		$(".titleBarNavUl li").hover(function() {
			$(".titleBarNavUl li").css("border-bottom-color", "#888")
		});
		$(".loginLogoImg2").css("background-image", "url(img/people2.png)");
		$(".loginLogoImg1").css("background-image", "url(img/cloud2.png)");
		$(".titleBarLogo").css("background-image", "url(img/logo_temp4.png)");
		if($(window).width() < 600) {
			$(".titleBarNavUl li").css("borderRight", "solid 1px #aaa");
			$(".titleBarNavUl li:nth-child(4)").css("border-right", "none")
		}
	}

	function recoverBanner() {

		$(".titleBarNavUl li a").removeClass("titleBlack");
		$(".titleBarNavUl li").hover(function() {
			$(".titleBarNavUl li").css("border-bottom-color", "#efefef")
		});
		$(".titleBar").css("backgroundColor", "transparent");
		$(".loginLogoImg2").css("background-image", "url(img/people1.png)");
		$(".loginLogoImg1").css("background-image", "url(img/cloud.png)");
		//		$(".loginLogoImg2").css("background-size","35 35");
		$(".titleBarLogo").css("background-image", "url(img/logo_temp3.png)");
		if($(window).width() < 600) {
			$(".titleBarNavUl li").css("borderRight", "solid 1px #efefef");
			$(".titleBarNavUl li:nth-child(4)").css("border-right", "none");
		}
	}
	
});