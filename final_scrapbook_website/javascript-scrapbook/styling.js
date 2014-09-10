/*
$(document).ready(function(){
  $("#logo").hover(function(){
  //  alert("You entered p1!");
$("#logo").css("background-color","#cccccc");
    },
    function(){
 //  alert("Bye! You now leave p1!");
 
 
$("#logo").css("background-color","#cccccc");
  }); 
});
*/


$(document).ready(function(){
//alert("hiii");
$('#logo').hover(function(){
    $(this).attr('src','logo1.png');
	$("#logo").css("background-color","#dbdbdb;");
},function(){
     $(this).attr('src','logo-purple-circle2.png'); 
});

$('.myMenu > li').bind('mouseover', openSubMenu);
		$('.myMenu > li').bind('mouseout', closeSubMenu);
		
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		};
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		};
		/*
		$("#button").click(function(){
		var name=$("#firstname").val();
		alert(name);
		};
		
		*/


});



