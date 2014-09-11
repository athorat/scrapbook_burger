//var namepattern = /^[a-zA-Z ]+$/;

function validateForm()
{


	var namepattern = /^[a-zA-Z ]+$/;

	var dname = $("#deal_name").val();
	if(!namepattern.test(dname))
	{
	//$("#deal_name").focus();
	$("#1").html("enter deal name");
	return false;
	}
	else	
	{
	$("#1").html("");
	}
	
	var passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	
	var passwd = $("#password").val();
	if(!passwordpattern.test(passwd))
	{
	//$("#password").focus();
	$("#2").html("enter your password");
	return false;
	}
	else
	{
	$("#2").html("");
	}
	
	var c_passwd = $("#re_password").val();
  if(c_passwd != (passwd))
  {
  //$("#re_password").focus();
  $("#10").html("password does'nt match")
  return false;
  }
  else
  {
  $("#10").html("");
  }
	
	
	
	var img = $("#image").val();
	if(img=="")
	{
	//$("#image").focus();
	$("#3").html("enter image");
	return false;
	}
	else
	{
	$("#3").html("");
	}
	
	var numberpattern= /^[0-9]/;
	
	var dprice = $("#price").val();
	if(!numberpattern.test(dprice))
	{
	//$("#price").focus();
	$("#4").html("enter price");
	return false;
	}
	else
	{
	$("#4").html("");
	}
	
	var d_discount = $("#discount").val();
	if(!numberpattern.test(d_discount))
	{
	//$("#discount").focus();
	$("#5").html("enter discount");
	return false;
	}
	else
	{
	$("#5").html("");
	}
	
	var c_name = $("#contact_name").val();
	if(!namepattern.test(c_name))
	{
	//$("#contact_name").focus();
	$("#6").html("enter name");
	return false;
	}
	else
	{
	$("#6").html("");
	}
	
	var patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
	   //var patt = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$./;
	
	var d_email = $("#dealer_email").val();
	if(!patt.test(d_email))
	{
	//$("#dealer_email").focus();
	$("#7").html("enter email id");
	return false;
	}
	else
	{
	$("#7").html("");
	}
	
	var contactno_pattern = /^[0-9]{10}\b$/;
	
	var c_no = $("#contact_no").val();
	if(!contactno_pattern.test(c_no))
	{
	//$("#contact_no").focus();
	$("#8").html("enter contact no");
	return false;
	}
	else
	{
	$("#8").html("");
	}

}