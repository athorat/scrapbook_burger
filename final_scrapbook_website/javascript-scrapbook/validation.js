
function validateForm() 
  {
  
  var a = document.Form.deal_name.value;
  var b = document.Form.password.value;
  var c = document.forms["Form"]["image"].value;
  var d = document.Form.price.value;
   var e = document.Form.discount.value;
   var f = document.Form.contact_name.value;
   var g = document.Form.dealer_email.value;
   var h = document.Form.contact_no.value;
   
   var patt= /^[a-zA-Z]+$/;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
	
  
 // alert(f);
	if (!f.match(patt))
	
	{
	document.getElementById("6").innerHTML="contact name must be filled out";
	//alert("invalid contact name");
	return false;
	}
	else
	{
	document.getElementById("6").innerHTML="";
	}
	
	 //alert(g);
	if (!g.match(mailformat))
	
	{
	document.getElementById("7").innerHTML="dealer email must be filled out";
	//alert("invalid dealer email");
	return false;
	}
	else{
	document.getElementById("7").innerHTML="";
	}
	
  
  
 // alert(c);
	if (c == null || c == "")
	{
        document.getElementById("3").innerHTML="image must be filled out";
		//alert("image must be filled out");
        return false;
    }
	else{
	document.getElementById("3").innerHTML="";
	}
	
	//var patt= /^[a-zA-Z]+$/;  
	
	//alert(a);
	if (!a.match(patt))
	//if(a.indexOf('@') <1 || a.indexOf('.') < 3)
	{
	document.getElementById("1").innerHTML="deal name must be filled out";
	//alert("invalid deal name");
	return false;
	}
	else{
	document.getElementById("1").innerHTML="";
	}
	
	//alert(b);
	if (b == null || b == "" || b.length < 6)
	{
        document.getElementById("2").innerHTML="password must be filled out";
		//alert("password must be filled out");
        return false;
    }
	else{
	document.getElementById("2").innerHTML="";
	}
	
	//alert(d);
	if (isNaN(d) || d=="")
	{
	    document.getElementById("4").innerHTML="price must be filled out";
       // alert("enter price");
        return false;
    }
	else
	{
	document.getElementById("4").innerHTML="";
	}
	
	//alert(e);
	if (isNaN(e) || e=="")
	{
	    document.getElementById("5").innerHTML="discount must be filled out";
       // alert("enter discount");
        return false;
    }
	else
	{
	document.getElementById("5").innerHTML="";
	}
	//alert(h);
	if (isNaN(h) || h.length != 10)
	{
	    document.getElementById("8").innerHTML="contact no. must be filled out";
       // alert("contact no. must be filled out");
        return false;
    }
	else{
	document.getElementById("8").innerHTML="";
	}
  
  }
  
  
  
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
	document.getElementById("1").innerHtml="";
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
	document.getElementById("2").innerHtml="";
	}
	
	
	 //alert(e);
	if (e == null || e == "" || e.length < 6)
	{
        document.getElementById("5").innerHtml="password must be filled out";
		//alert("password must be filled out");
        return false;
    }
	else{
	document.getElementById("5").innerHtml="";
	}
	
	
	//alert(d);
	
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
	
	if (!d.match(mailformat))
	{
     document.getElementById("4").innerHtml="email must be filled out";
	//alert("email must be filled out");
        return false;
    } 
	else{
	document.getElementById("4").innerHtml="";
	}
	
	//alert(f);
	if (isNaN(f) || f.length != 10)
	{
	     document.getElementById("3").innerHtml="contact no. must be filled out";
        //alert("contact no. must be filled out");
        return false;
    }
	else{
	document.getElementById("3").innerHtml="";
        
	}
	
	if (g == null || g == "" || g.length<25)
	{
        document.getElementById("6").innerHtml="Address must be filled out";
        //alert("address must be filled out");
        return false;
    }
	else{
	document.getElementById("6").innerHtml="";
	}
	
	if (h.length<25 || h=="")
	{
	    document.getElementById("7").innerHtml="Address must be filled out";  
        //alert("another address must be filled out");
        return false;
    }
	else
	{
	document.getElementById("7").innerHtml=""; 
	}

 }
  
 


