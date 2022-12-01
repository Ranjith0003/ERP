$(document).ready(function(){
    $("#type").change(function(){
        if($(this).val() == "Non Recurring")
        {
            $("#fromdiv").hide();
            $("#todiv").hide();
        }
        if($(this).val() == "Recurring")
        {
            $("#fromdiv").show();
            $("#todiv").show();
        }
    });



    $("#contractsmt").click(function(){
        let contract = $("#name").val();
        let type = $("#type").val();
        let assignNature = $("#nature").val();
        let fromD = $("#fromDate").val();
        let toD = $("#toDate").val();
        let amount = $("#amount").val();

        localStorage.setItem("contract", contract);
        localStorage.setItem("type", type);
        localStorage.setItem("assignNature", assignNature);
        localStorage.setItem("fromD", fromD);
        localStorage.setItem("toD", toD);
        localStorage.setItem("amount", amount);
        // window.open("http://localhost:90/projects.html?cont="+contract+"&type="+type+"&nature="+assignNature+"&from="+fromD+"&to="+toD+"&amt="+amount);
        
    });
});