$(document).ready(function()
{

alert("hi i m on 2nd page");
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var prodId = getParameterByName('name');
alert(prodId);
for( i=0;i<obj.details.length;i++)
				{
				                if (obj.details[i].firstName==prodId)
					            {
								//obj2 ob;
					               img=obj.details[i].imgSrc;
								   data=obj.details[i].detailData;
									break;
					            } 
							  
				}
				alert(img);
				alert(data);
				document.getElementById("asd").innerHTML="";
				document.getElementById("img1").src=img;
				document.getElementById("asd").innerHTML=data;
});
