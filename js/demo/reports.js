$(document).ready(function(){
    


    
    // var url = (window.location.href).toString().split("?");
        // paramsList = url[1].split("&");
        // var params = [];
        // for(let i=0;i<paramsList.length;i++){
        //     var value = paramsList[i].split("=");
        //     var key = value[0];
        //     var keyValue = value[1];
        //     params.push(keyValue);
        //     // console.log(key+" "+keyValue);
        // }
        

        
        
        var contName = localStorage.getItem("contract");
        var contType = localStorage.getItem("type");
        var nature = localStorage.getItem("assignNature");
        var from = localStorage.getItem("fromD");
        var to = localStorage.getItem("toD");
        var amount = localStorage.getItem("amount");
        
        console.log(to);

        function addMonths(date, months) {
            var d = date.getDate();
            date.setMonth(date.getMonth() + +months);
            if (date.getDate() != d) {
              date.setDate(0);
            }
            var day = date.getDate();
            var month = date.toLocaleString('default', { month: 'short' });
            var year = date.getFullYear();

            return(day+"/"+month+"/"+year);

        }
        

        var $startdate = new Date(from)
        var $enddate = new Date(to)
        var months = ($enddate.getMonth() - $startdate.getMonth()) + (12 * ($enddate.getFullYear() - $startdate.getFullYear()));
                
        // var start = parseInt(from.substring(8,10));
        // var end = parseInt(to.substring(8,10));
        if(contType == "Recurring")
        {
        sno = 0;
        for(let i=0;i<months;i++)
        {
            sno += 1;

            $("#prjTable").append(`<tr><td>${sno}</td>
            <td>${addMonths(new Date(from),sno)}</td>
            <td>G-0${sno}</td>
            <td>${contName}</td>
            <td>${contType}</td>
            <td>${nature}</td>
            <td>${amount}</td>
            <td><select class="personRes">
                <option value="Chandroo">Chandroo</option>
                <option value="Manoj">Manoj</option>
                <option value="Haripriya">Haripriya</option>
                <option value="Durai">Durai</option>
            </select></td>
            </tr>`);
        }
        }
        if(contType == "Non Recurring"){
            $("#prjTable").append(`<tr><td>1</td><td></td><td>G-01</td>
            <td>${contName}</td>
            <td>${contType}</td>
            <td>${nature}</td>
            <td>${amount}</td>
            <td><select class="personRes">
                <option value="Chandroo">Chandroo</option>
                <option value="Manoj">Manoj</option>
                <option value="Haripriya">Haripriya</option>
                <option value="Durai">Durai</option>
            </select></td>
            </tr>`);
        }

});