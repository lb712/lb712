function $q(id) {
	return document.getElementById(id)
}

$q("shopTitle").onmouseover=$q("shopList").onmouseover=function(){
	$q("shopList").style.display = "block"
}
$q("shopTitle").onmouseout=$q("shopList").onmouseout=function(){
	$q("shopList").style.display = "none"
}
//男装的滑动效果
$q("menCl").onmouseover=function(){

	$q("divright").style.display = "block"
}
$q("menCl").onmouseout=function(){

	$q("divright").style.display = "none"
}


$q("divright").onmouseout=function(){
	$q("divright").style.display = "none"
}
//女装的滑动效果
$q("womenCl").onmouseover=function(){

	$q("divrightbuttom").style.display = "block"
}
$q("womenCl").onmouseout=function(){

	$q("divrightbuttom").style.display = "none"
}


$q("divrightbuttom").onmouseout=function(){
	$q("divrightbuttom").style.display = "none"
}
//首页系列隐藏

var arr=document.getElementsByClassName("atsrtLi");

	for(var i=1;i<arr.length-1;i++){
		var stt=document.getElementsByClassName("item-boxhide");
			arr[i].index=i;
		arr[i].onmouseover=function(){
			stt[this.index-1].style.display="block";
			

		}
		arr[i].onmouseout=function(){
			stt[this.index-1].style.display="none";
	
		}



}



		$("#search_box").focus(function(){
			
			
			$("#searchide").css("display","block");
		});
		$("#search_box").blur(function(){
	
			
			$("#searchide").css("display","none");
		});



	// $("#search_box")[0].onkeyup = function(){

	// 	let str = this.value;
	// 	$("#searchide li").css("display","none");
	// 	$("#searchide li:contains('"+str+"')").css("display","block");		
	// };
		
		$(".sidebar-cart-box").toggle(
  		function () {
  			$(".right-sidebar").animate({right: '-280px'}, "slow");

    
		},
		  function () {
		   $(".right-sidebar").animate({right: '0px'}, "slow");
		  }
		);

		$(".sidebar-cart-box").mouseover(function(){
			$(".sidebar-cart-box").css("background","red");
		});
		$(".sidebar-cart-box").mouseout(function(){
			$(".sidebar-cart-box").css("background","");
		});

		$(".sidebar-logo").mouseover(function(){
			$(".sidebar-logo").css("background","red");
		});
		$(".sidebar-logo").mouseout(function(){
			$(".sidebar-logo").css("background","");
		});

	
		// $(".sidebar-cart-boxa i").mouseover(function(){
		// 	$(".sidebar-cart-boxa").css("background","red");
		// });
		
	

		var $dl = $(".sidebar-cart-boxa i");	
			
		for(let i=0;i<$dl.length;i++){		

			$(".sidebar-cart-boxa").eq(i).mouseenter(function () {

				$(".sidebar-tab-tip").stop().animate({right: '85px',opacity: '0'
			} );
				$(this).find("div").stop().animate({right: '40px',opacity: '1'
			}, 400);
				$(".sidebar-cart-boxa").css("background","");
				$(this).css("background","red");

			});

			$dl.mouseleave(function () {
				$(".sidebar-tab-tip").css({right: '85px',opacity: '0'
			} );
				$(".sidebar-cart-boxa").css("background","");
			});
		};
		
