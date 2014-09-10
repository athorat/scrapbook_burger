var emailpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

var namepattern = /^[a-zA-Z ]+$/;
  

function validateForm1()
{


var fname = $("#firstname").val();
  if(!namepattern.test(fname))
  {
  $("#firstname").focus();
  $("#1").html("enter valid name");
  return false;
  }
  else
  {
  $("#1").html(" ");
  }
  
  var last_pattern = /^[a-zA-Z ]+$/;  
  var lname = $("#lastname").val();
  if(!last_pattern.test(lname))
  {
  $("#lastname").focus();
  $("#2").html("enter last name");
  }
  else
  {
  $("#2").html(" ");
  }
  
  var contact_no = /^[0-9]{10}\b$/;
  
  var c_number = $("#number").val();
  if(!contact_no.test(c_number))
  {
  $("#number").focus();
  $("#3").html("enter valid number");
  }
  else{
  $("#3").html(" ");
  }
  
   var formemail = $("#email").val();
    if(!emailpattern.test(formemail))
   {
     $("#email").focus();
     $("#4").html("enter the valid email");
     return false;

   }
  else
  {
  $("#4").html(" ");
  }


	var passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

	var pass_txt = $("#password").val();
  if(!passwordpattern.test(pass_txt))
  {
  $("#password").focus();
  $("#5").html("enter valid password");
  return false;
  
  }
  else
  {
  $("#5").html(" ");
  }
  
  var c_passwd = $("#re_password").val();
  if(c_passwd != (pass_txt))
  {
  $("#re_password").focus();
  $("#8").html("password does'nt match")
  return false;
  }
  else
  {
  $("#8").html("");
  }
}