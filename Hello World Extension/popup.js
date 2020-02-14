$(function(){
    $('#name').keyup(function(){
        $('#msg').text('Hello ' + $('#name').val());
    });
});