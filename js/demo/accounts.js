$(document).ready(function(){
    var url = (window.location.href).toString().split("?");
        paramsList = url[1].split("=");
        var prjListCom = paramsList[1].split(",");
        var notification = 0;
        for(let i=0;i<prjListCom.length;i++){
            notification += 1;
            $("#prjList").append(`<div><a class="collapse-item" href="http://localhost:90/template/invoiceTemplate.html?invPrj=${prjListCom[i]}" target="_self">${prjListCom[i]}</a></div>`);
            $("#notify").text(notification);
        }
});
