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
$('.image1').hide();
$('#photos1').animate({
    opacity:1
});
$('#photos1').hover(function(){
    $(this).stop().animate({opacity:0.3},200);
        $('.image1').fadeIn();

}, function(){
    $(this).stop().animate({
            opacity: 3},200);
            $('.image1').fadeOut();
     });
     $('.image2').hide();
    $('#photos2').animate({
        opacity:1
    });
    $('#photos2').hover(function(){
        $(this).stop().animate({opacity:0.3},200);
            $('.image2').fadeIn();

}, function(){
$(this).stop().animate({
        opacity: 3},200);
        $('.image2').fadeOut();
 });
 $('.image3').hide();
$('#photos3').animate({
    opacity:1
});
$('#photos3').hover(function(){
    $(this).stop().animate({opacity:0.3},200);
        $('.image3').fadeIn();

}, function(){
$(this).stop().animate({
        opacity: 3},200);
        $('.image3').fadeOut();
 });
 $('.image4').hide();
$('#photos4').animate({
    opacity:1
});
$('#photos4').hover(function(){
    $(this).stop().animate({opacity:0.3},200);
        $('.image4').fadeIn();

}, function(){
$(this).stop().animate({
        opacity: 3},200);
        $('.image4').fadeOut();
 });
 $('.image5').hide();
$('#photo1').animate({
    opacity:1
});
$('#photo1').hover(function(){
    $(this).stop().animate({opacity:0.3},200);
        $('.image5').fadeIn();

}, function(){
$(this).stop().animate({
        opacity: 3},200);
        $('.image5').fadeOut();
 });
 $('.image6').hide();
$('#photo2').animate({
    opacity:1
});
$('#photo2').hover(function(){
    $(this).stop().animate({opacity:0.3},200);
        $('.image6').fadeIn();

}, function(){
$(this).stop().animate({
        opacity: 3},200);
        $('.image6').fadeOut();
 });
 $('.image7').hide();
$('#photo3').animate({
    opacity:1
});
$('#photo3').hover(function(){
    $(this).stop().animate({opacity:0.3},200);
        $('.image7').fadeIn();

}, function(){
$(this).stop().animate({
        opacity: 3},200);
        $('.image7').fadeOut();
 });
 $('.image8').hide();
$('#photo4').animate({
    opacity:1
});
$('#photo4').hover(function(){
    $(this).stop().animate({opacity:0.3},200);
        $('.image8').fadeIn();

}, function(){
$(this).stop().animate({
        opacity: 3},200);
        $('.image8').fadeOut();
 });
});