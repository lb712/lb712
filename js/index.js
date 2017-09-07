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
//购物车
//window.onscroll = function(){
//	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
//	$q("right-ding").style.top = scrollTop+((clientHeight-500)/2)+"px";
//
//}


	// var a = $('.topnav'),
	// 	b =a.offset();
	// $(document).on('scroll',function(){
		
	// 	var	c = $(document).scrollTop();

	// 	if(b.top<=c){
	// 		a.css({'position':'fixed','top':'0px'})
	// 		}
	// 	else{
	// 			a.css({'position':'absolute','top':'50px'})
	// 			}
	// })
	







$("#search_box").focus(function(){


	$("#searchide").css("display","block");
});
$("#search_box").blur(function(){
	

	$("#searchide").css("display","none");
});


	
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

		//遮罩层前三个

		$(".item-s").mouseover(function(){

			$(this).find('div').css("display","block");
			

		});

		$(".item-s").mouseout(function(){
			$(this).find('div').css("display","none");
	


		});


		$(".diceng").mouseenter(function(){
			$(this).css("color","#000");
			$(this).find('.overburden-btn').stop().animate({width: "110px"},300);


		});
		$(".diceng").mouseleave(function(){
			$(this).css("color","#fff");
			$(this).find('.overburden-btn').stop().animate({width:"0px"},300 );

		});

		//遮罩层后两个

		$(".item-t").mouseover(function(){

			$(this).find('div').css("display","block");
		

		});

		$(".item-t").mouseout(function(){
			$(this).find('div').css("display","none");
		


		});


		$(".tdiceng").mouseenter(function(){
			$(this).css("color","#000");
			$(this).find('.overburdenbt').stop().animate({width: "110px"},300);


		});
		$(".tdiceng").mouseleave(function(){
			$(this).css("color","#fff");
			$(this).find('.overburdenbt').stop().animate({width:"0px"},300 );

		});

		//小轮播上的按钮
		$(".a").mouseenter(function(){
			$(".am").css("display","block");
			$(".anz").css("display","block");
		});
		$(".a").mouseleave(function(){
			$(".am").css("display","none");
			$(".anz").css("display","none");
		});
		$(".b").mouseenter(function(){
			$(".ba").css("display","block");
			$(".baz").css("display","block");
		});
		$(".b").mouseleave(function(){
			$(".ba").css("display","none");
			$(".baz").css("display","none");
		});

		//文字轮播
		// $(".am").click(function(){
		// 	$(".erbox").css.("display","none");
		// 	$(".erboxhideo").css.("display","block");
		// });
		//下面可以动的图标

		$(".moverigt").mouseenter(function(){
			$('.moveleftsp').css({transform: "skewX(30deg) scale(1)"}
				,300);


		});

		$(".moverigt").mouseleave(function(){
			$('.moveleftsp').css({transform: "skewX(30deg) scale(0)"}
				,300);


		});

		//右边的
		$(".movelef").mouseenter(function(){
			$('.movelefspt').css({transform: "skewX(30deg) scale(1)"}
				,300);


		});

		$(".movelef").mouseleave(function(){
			$('.movelefspt').css({transform: "skewX(30deg) scale(0)"}
				,300);


		});
		// 小盒子
		// 小盒子滑动
		$(".buy-n").mouseenter(function(){
			$(this).css("color","#fff");
			$(this).find(".buy-now").stop().animate({width: "110px"},300);


		});

		$(".buy-n").mouseleave(function(){
			$(this).css("color","#000");
			$(this).find(".buy-now").stop().animate({width: "0px"},300);


		});
		//选择更多商品的滑动
		$(".footerlast").mouseenter(function(){
			$(".footerlast").css("color","#fff");
			$(".movefootrlast").stop().animate({width: "280px"},300);


		});

		$(".footerlast").mouseleave(function(){
			$(".footerlast").css("color","#ccc");
			$(".movefootrlast").stop().animate({width: "0px"},300);


		});
		