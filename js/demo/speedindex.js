$(document).ready(function(){
    speedChart('doug');
    $("#togBtn").click(function(){
        var tog = document.getElementById('togBtn');
        if(tog.checked){
            speedChart('pie');
        }
        else{
            speedChart('doug');
        }
    });
  });