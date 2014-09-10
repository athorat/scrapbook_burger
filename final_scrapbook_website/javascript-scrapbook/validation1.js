function validateForm1() 
  {
   // alert("in validate function");
	
    var a = document.forms["myForm"]["firstname"].value;
	var b = document.forms["myForm"]["lastname"].value;
	//var c = document.forms["myForm"]["password"].value;
	//var d = document.form["myForm"]["email"].value;
	var d = document.myForm.email.value;
	var e = document.myForm.password.value;
	var f = document.myForm.number.value;
	var g = document.myForm.address.value;
	var h = document.myForm.paddress.value;
	
   // alert(a);
	var patt= /^[a-zA-Z]+$/;
	if (!a.match(patt))
	//if (a == null || a == "")
	{
	   document.getElementById("1").innerHTML="First name must be filled out";
        //alert("First name must be filled out");
        return false;
    }
	else
	{
	document.getElementById("1").innerHTML="";
	}
	
	
	//alert(b);
	//if (b == null || b == "")
	if (!b.match(patt))
	{
        document.getElementById("2").innerHTML="last name must be filled out";
		//alert("last name must be filled out");
        return false;
    }
	else
	{
	document.getElementById("2").innerHTML="";
	}
	
	
	 //alert(e);
	if (e == null || e == "" || e.length < 6)
	{
        document.getElementById("5").innerHTML="password must be filled out";
		//alert("password must be filled out");
        return false;
    }
	else{
	document.getElementById("5").innerHTML="";
	}
	
	
	//alert(d);
	
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
	
	if (!d.match(mailformat))
	{
     document.getElementById("4").innerHTML="email must be filled out";
	//alert("email must be filled out");
        return false;
    } 
	else{
	document.getElementById("4").innerHTML="";
	}
	
	//alert(f);
	if (isNaN(f) || f.length != 10)
	{
	     document.getElementById("3").innerHTML="contact no. must be filled out";
        //alert("contact no. must be filled out");
        return false;
    }
	else{
	document.getElementById("3").innerHTML="";
        
	}
	
	if (g == null || g == "" || g.length<25)
	{
        document.getElementById("6").innerHTML="Address must be filled out";
        //alert("address must be filled out");
        return false;
    }
	else{
	document.getElementById("6").innerHTML="";
	}
	
	if (h.length<25 || h=="")
	{
	    document.getElementById("7").innerHTML="Address must be filled out";  
        //alert("another address must be filled out");
        return false;
    }
	else
	{
	document.getElementById("7").innerHTML=""; 
	}

 }