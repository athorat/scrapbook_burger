var emailpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

var namepattern = /^[a-zA-Z ]+$/;
  

function validateForm1()
{
// {
	// firstname();
	// lastname();
	// number();
	// email();
			
	// password();

   

    // var flag = true;

    // if (firstname())
	// {
        // flag = false;
    // }
    // if (lastname())
	// {
        // flag = false;
    // }
    // if (number()) 
	// {
        // flag = false;
    // }
	// if (email())
	// {
        // flag = false;
    // }
	
	
	// if (password())
	// {
        // flag = false;
    // }
 
 
 
    // return flag;

// }

// function firstname()
// {
     var namepattern = /^[a-zA-Z ]+$/;
	var fname = $("#firstname").val();
  if(!namepattern.test(fname))
  {
  //$("#firstname").focus();
  $("#1").html("enter valid name");
  return false;
  }
  else
  {
  $("#1").html(" ");
  }
// }

// function lastname()
// {
  var last_pattern = /^[a-zA-Z ]+$/;  
  var lname = $("#lastname").val();
  if(!last_pattern.test(lname))
  {
 // $("#lastname").focus();
  $("#2").html("enter last name");
  return false;
  }
  else
  {
  $("#2").html(" ");
  }
// }
  
// function number()
// {
  var contact_no = /^[0-9]{10}\b$/;
  
  var c_number = $("#number").val();
  if(!contact_no.test(c_number))
  {
//  $("#number").focus();
  $("#3").html("enter valid number");
  return false;
  }
  else{
  $("#3").html(" ");
  }
// }
  
 // function email()
// { 
  var emailpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
   var formemail = $("#email").val();
    if(!emailpattern.test(formemail))
   {
    // $("#email").focus();
     $("#4").html("enter the valid email");
     return false;

   }
  else
  {
  $("#4").html(" ");
  }
// } 

// function password()
// {
	var passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

	var pass_txt = $("#password").val();
  if(!passwordpattern.test(pass_txt))
  {
  //$("#password").focus();
  $("#5").html("password should be alpha-numeric with special character e.g Test@123");
  return false;
  
  }
  else
  {
  $("#5").html(" ");
  }

  
  var c_passwd = $("#re_password").val();
  if(c_passwd != (pass_txt))
  {
  //$("#re_password").focus();
  $("#8").html("password does'nt match")
  return false;
  }
  else
  {
  $("#8").html("");
  }
// }

}
