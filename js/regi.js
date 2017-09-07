function $q(id) {
	return document.getElementById(id)
}


// $q("userId").onblur=function(){
// 		var str=new XMLHttpRequest();
// 		str.open("get","luben2.php?userName="+$q("userId").value,true);
// 		str.onreadystatechange=function(){
// 			if(str.readyState==4 && str.status==200){
// 					var arr=str.responseText;
// 					if(arr==1){
// 						$q("spanId").innerHTML="亲，用户名已经被使用！"
// 					}else{
// 						$q("spanId").innerHTM="亲，用户名没人用！"
// 					}
// 			}
// 		}
// 		str.send();
// 	}

$q("submit_button").onclick=function(){
		var sdd=new XMLHttpRequest();
		sdd.open("post","../php/luben3.php",true);
		sdd.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		sdd.onreadystatechange=function(){
			if(sdd.readyState==4 && sdd.status==200){
				var srr=sdd.responseText;
				if(srr==1){
					alert("恭喜您注册成功！")
					location.href="entry.html";
				}else{
					alert("用户名已存在！")
				}
			}
		}
		var sendId="userName="+$q("userId").value+"&password="+$q("passId").value;
		sdd.send(sendId);
	}





$q("userId").onblur=function(){
	    //账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间
    	var reg = /^1[34578]\d{9}$/;
		var str = $q("userId").value;
		if(reg.test(str)){
		    $q("spanId").innerHTML="☺输入正确!";
		        $q("spanId").style.cssText="color:green;";
		}else{
		    $q("spanId").innerHTML="☹输入错误!";
		        $q("spanId").style.cssText="color:red;";
		}
}


var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0'];
	var btn=$q("passId");
	var txt=$q("spanpaId");
	
btn.onclick=function(){
		var str="";
		while(str.length<4){
			var nume=parseInt(Math.random()*1000)
			while(nume>36){
				nume=parseInt(Math.random()*1000)
			}
			str+=arr[nume];
		}

		txt.innerHTML=str.toUpperCase();

	
}

btn.onblur=function(){
	if(txt.innerHTML!=$q("passId").value){

		    $q("bottomspan").innerHTML="☺输入错误!";
		        $q("bottomspan").style.cssText="color:red";
		}else{
		    $q("bottomspan").innerHTML="☹输入正确!";
		     $q("bottomspan").style.cssText="color:green";    
		}
	

}
