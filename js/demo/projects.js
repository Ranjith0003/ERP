$(document).ready(function(){
    $("#prjSmt").click(function(){
        let table = $("#prjTable tr");
        var prjList = [];
        for(let i=0;i<table.length;i++){
            var lis = [];
            var personRes = table[i].children[7].children[0].value.toString();
            var dates = table[i].children[1].innerHTML;
            var prCode = table[i].children[2].innerHTML;
            lis.push(dates,personRes);

            localStorage.setItem(prCode,lis);
            if( personRes == "Chandroo"){

                var prjName = table[i].children[2].innerHTML;
                prjList.push(prjName);
            }
        }
        window.open("http://localhost:90/dashboard/managers.html?prj="+prjList);
    });
});