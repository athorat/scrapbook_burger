$(document).ready(function(){
//alert("new");

var test = '{"thumb":['
+'{"title":"John","path":"details2.html?name=secondThumb","images":"images/17.jpg" },'
+'{"title":"John","path":"details2.html?name=secondThumb","images":"images/17.jpg" },'
+'{"title":"John","path":"details2.html?name=secondThumb","images":"images/17.jpg" }]}';

var obj1 = JSON.parse(test);
// alert(obj1.thumb.length);




var obj3=$("#sat2").html();
var obj2=Handlebars.compile(obj3);

$("#MainRow").append(obj2(obj1));
//alert(test);
});