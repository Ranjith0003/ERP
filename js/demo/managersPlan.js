$(document).ready(function(){
    var url = (window.location.href).toString().split("?");
    var pr = url[1].split("=")

    $("#crPrj").text(pr[1]);
});

rowCount = 0;
function addNewRow(){
    rowCount += 1;
    $("#planTable").append(`<tr style="border-bottom:1px solid rgba(0,0,0,0.09);"><td>${rowCount}</td><td contenteditable="true">&ensp;</td><td contenteditable="true">&ensp;</td></tr>`);
}