$(document).ready(function() {
    $(".click1").click(function() {
        $("#show1").toggle ();
        $("#toggle1").toggle ();  
          
    });

$(".click2").click(function() {
    $("#show2").toggle ();
    $("#toggle2").toggle ();        
});
$(".click3").click(function() {
    $("#show3").toggle ();
    $("#toggle3").toggle ();        
});

$(".once").click(function(){
    alert("thank you for sending the message");
});
});