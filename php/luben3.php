<?php
		header("Content-type:text/html;charset=utf-8");
		$name=$_POST['userName'];
	
	//1、连接数据库
	$conn = mysql_connect("localhost","root","123456");
	
	if(!$conn){
		die("亲，connect fail");
	}else{
		//echo "connect success";
	}
	
	//2、选择数据库
	mysql_select_db("anta",$conn);
	
	//3、执行SQL语句
	$sqlStr="insert into userInfo(uname)
     values('$name')";
    mysql_query($sqlStr,$conn);
    
    //4、关闭数据库
    mysql_close($conn); 
?>