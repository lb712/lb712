// $(".jij").mouseenter(function(){
// 			$(this).css("background","#000");
			

// });
// 上面是测试
// 子页正式开始
$(".ambox").mouseenter(function(){
		var num = $(this).index()
		$(this).parent().prev().find("img").css("display","none");
		$(this).parent().prev().find("img").eq(num).css("display","block");

});

$(".ambox").mouseleave(function(){

		//$(this).parent().prev().children().attr("src","img2/220305.jpg");

});
 
