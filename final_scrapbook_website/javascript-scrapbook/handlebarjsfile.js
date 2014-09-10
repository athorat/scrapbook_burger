$(document).ready(function(){
//alert("new");

var test = '{"thumb":['
+'{"title":" Rachie Babe 20-Aug-14 ","path":"details2.html?name=firstThumb","images":"images/d1.jpg" },'
+'{"title":"Maggi43 16-Aug-14","path":"details2.html?name=secondThumb","images":"images/11.jpg" },'
+'{"title":"Rachie Babe 20-Aug-14","path":"details2.html?name=thirdThumb","images":"images/10.jpg" },'
+'{"title":" Kasohio 19-Aug-14","path":"details2.html?name=fourthThumb","images":"images/18.jpg" },'
+'{"title":" Kelly Foster 19-Aug-14","path":"details2.html?name=fifthThumb","images":"images/15.jpg" },'
+'{"title":" Kasohio 19-Aug-14","path":"details2.html?name=sixthThumb","images":"images/17.jpg" },'
+'{"title":" Kelly Foster 19-Aug-14","path":"details2.html?name=seventhThumb","images":"images/9.jpg" },'
+'{"title":" Kelly Foster 19-Aug-14","path":"details2.html?name=fifthThumb","images":"images/7.jpg" }]}';

var obj1 = JSON.parse(test);
// alert(obj1.thumb.length);


var obj3=$("#sat2").html();
var obj2=Handlebars.compile(obj3);

$("#MainRow").append(obj2(obj1));
//alert(test);


$('a img').animate({
	     opacity:.4
		 });
		 
		 $('a img').hover(function(){
		 $(this).stop().animate({
		 opacity:1});
		 
		 }, function(){
		 $(this).stop().animate({
		 opacity:.4});
		 });
		
	 
});