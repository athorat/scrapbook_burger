
$("#radiobtn input[type=radio]").each(function(i){
    $(this).click(function () {
    	if(i==1) {
    		$("#fn").attr("disabled", "disabled"); 
    		$("#ln").attr("disabled", "disabled");
			$("#email1").attr("disabled", "disabled");
			$("#contactNo").attr("disabled", "disabled"); 
			$("#pwd").attr("disabled", "disabled"); 
			$("#tempAddress").attr("disabled", "disabled"); 
			$("#permanentAddress").attr("disabled", "disabled"); 			
    	}
    	else {
    		$("#fn").removeAttr("disabled"); 
    		$("#ln").removeAttr("disabled");
			$("#email1").removeAttr("disabled"); 
    		$("#contactNo").removeAttr("disabled");
			$("#pwd").removeAttr("disabled"); 
    		$("#tempAddress").removeAttr("disabled");
    		$("#permanentAddress").removeAttr("disabled");			
    	}
      });
  });

  function Customer(fname,lname,cno,email,taddress,paddress) {
   this.fname = fname;
   this.lname = lname;
   this.cno = cno;
   this.email = email;
   this.taddress = taddress;
	this.paddress = paddress;
	}
  
  
  function storeCust(){
		var x =document.getElementById("firstname").value;
		//alert(x);
		if (typeof(Storage) != "undefined") {
		// Store
		localStorage.setItem("fn",x);
	//	alert(x);
		// Retrieve
		//alert(+localStorage.getItem("fn"));
		}
		var fname =document.getElementById("firstname").value;
		var lname=document.getElementById("lastname").value;
		var cno =document.getElementById("number").value;
		var email =document.getElementById("email").value;
		var taddress =document.getElementById("taddress").value;
		var paddress =document.getElementById("paddress").value;
		 cust =new Customer(fname,lname,cno,email,taddress,paddress);
		/* alert(cust.fname);
		 if (typeof(Storage) != "undefined") {
		// Store
		var y=JSON.stringify(cust));
		alert(x);
		localStorage.setItem("cust",y);
		// Retrieve
		//alert(localStorage.getItem(cust));
		var localObj = JSON.parse(localStorage.getItem(cust));
		alert(localObj);
		}*/
	}
	
function showCustomer(){
		var y =localStorage.getItem("fn");
	//	alert(y);
		document.getElementById("cid").innerHTML =y;
	}
