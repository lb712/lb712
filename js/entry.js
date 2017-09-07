function $q(id) {
	return document.getElementById(id)
}

	$q("userId").onblur=function(){
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

	$("#submit_button").click(function(){
			$("#spanId").text("");
			$("#bottomspan").text("");

	});


	$q("passId").onblur=function(){
			var rgm = /^[a-zA-Z]\w{5,17}$/;
			var srr = $q("passId").value;
		if(rgm.test(srr)){
					 $q("bottomspan").innerHTML="☺输入正确!";
			        $q("bottomspan").style.cssText="color:green";
			}else{
			    $q("bottomspan").innerHTML="亲！密码要已字母开头，长度在6到17位之间!";
			     $q("bottomspan").style.cssText="color:red";    
			}
		
	}
