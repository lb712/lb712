//方大境和小图变大图
function $q(id) {
	return document.getElementById(id)
}


$(".ilclk").click(function() {
		$(this).siblings(".ilclk").removeClass('ilclk');    // 删除其他li的边框样式
		$(this).addClass('ilclk'); 	 // 为当前li添加边框样式



  });

$(document).ready(function(){                          
    var index=0;
    var i=1;
    function showImg(i){
        $(".list-middem img").eq(i).fadeIn(40).siblings("img").hide();
         
    }
        $(".test li").click(function(){
            index  =  $(".test li").index(this);
            showImg(index);
        });	
		
  })
	
	
$(".amount-box a").click(function() {
		
		$("#sumboxul").show();

  });
//文字交换
$("#sumboxul li").click(function() {
		$('.pro-num').html($(this).text());
		$('.amount-box span').css('color','red');
		$("#sumboxul").hide();

  });
//边框  
$("#proColor li").click(function() {
		$(this).addClass('color_code');
		$(this).siblings(".color_code").removeClass('color_code');     
		var num = $(this).index()
		$(this).parent().siblings("p").css("display","none");
		$(this).parent().siblings("p").eq(num).css("display","block");
});
  
 //图片飞跃
  
  $('#tj_addcart').click(function(){
  	$('<img />',{  
        src:'img3/91738880_2_01--w_220_h_220.jpg',  
    }).css({  
        position:'absolute',  
        left:'0px',  
        top:'0' ,
        height:'60px',
        width:'60px'
      }).appendTo('.color_code');  

  	$('.color_code img').animate(
  		{
  			 left:'800px',
		    	top:'-400px'
		    	
  		},1000);
  })

//点击交换图片
$(document).ready(function(){
    $('.detail-box').show();
    
})
$(".pro-dtl-menu  a:first").click(function(){
          $('.detail-box').show();
          $(this).css("background","#666");
           $('.comment-box').hide();
          $(".pro-dtl-menu  a:last").css("background","#000");
          $(".pro-dtl-menu a i:first").show();
          $(".pro-dtl-menu a i:last").hide();
})
$(".pro-dtl-menu  a:last").click(function(){
          $(".pro-dtl-menu  a:first").css("background","#000");
          $('.detail-box').hide();
          $(this).css("background","#666");
          $('.comment-box').show();
          $(".pro-dtl-menu a i:last").show();
         $(".pro-dtl-menu a i:first").hide();
})

//放大镜
$q("list-idbox").onmouseover=function(){
		singleton.getInstance({"boxDom":this,"bigImg":"img3/91738880_7_01.jpg",width:160,height:160,mult:2});
}