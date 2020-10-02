/* onlo ad to run the function after loading the page */
// window.onload = function () {
/*to add new class "completed" in "ul" to style it with the bar*/
$("#lala").css( "background-color", "bisque");



var  array=[];
var counter = 0;

function newElement(){
    var val = $('#inp').val()
    array.push(val);
    counter ++
    $('#display').append('<li id="li' + val + '">' + val + '<button class="rm" id="' + val +'"' + counter+ '>remove</button><button id="' + val +'"' + counter+ ' class="edit">edit</button></li>')
    $(".rm").on("click", function(e){
        $("#li" + e.target.id).remove();
    });
    
       
       $(".edit").on("click", function(){
     var p = prompt();
     // console.log(p);

    if(p !== null){
        document.getElementById("display").html('')
    }
    });
  
}

$(document).ready(function(){
  $("#lala").click(function(){
    $("#display").html('');
  });
});

var array =['images (1).jpg',"papier-peint-coffee-collage.jpg"]
var i =0
setInterval(function(){
    if(i === array.length) {
        i=0
    }
$('body').css("background-image", "url("+array[i]+")")
i++
}, 2000)

 


    






 

 




 
