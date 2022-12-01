$(document).ready(function(){
    var url = (window.location.href).toString().split("?");
        paramsList = url[1].split("=");
        var params = [];
        // for(let i=0;i<paramsList[1].length;i++){
        //     var value = paramsList[1][i].split(",");
        //     var key = value[0];
        //     params.push(key);
        // }
        var prjList = paramsList[1].split(",");

        var crntMonth = new Date().getMonth();
        var startMonth = new Date(localStorage.getItem("fromD")).getMonth();

        

        for(let i=0;i<prjList.length;i++){
            var crn = localStorage.getItem(prjList[i]).split(",");
            var daychkMonth = new Date(crn[0]).getMonth();

            if(daychkMonth == 0){
                var valueChk = 12;
            }
            else{
                var valueChk = daychkMonth;
            }
        
            
            if(valueChk - 1 == crntMonth){
                var id = "#crntProjects";
            }
            else{
                id = "#upcomProjects";
            }

            
            $(id).append(`<div class="row">
            <div class="col-lg-12">
                <div class="card p-2 shadow">
                    <ul class="navbar-nav accordion" id="accordionSidebar${i}">
                    <li class="nav-item">
                    <div class="d-flex justify-content-between align-items-center">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" style="width:90%;" data-target="#collapse${i}"
                        aria-expanded="true" aria-controls="collapse${i}">
                    
                        <h4 class="card-title m-2">${prjList[i]}</h4>
                    </a>

                    <button style="white-space:nowrap;" type="btn" class="btn btn-primary mr-3" onclick="createPlan(this)" id="createPlan">Create Plan</button>

                    <button type="btn" class="btn btn-primary" onclick="projectCompletion(this); this.onclick=null;" id="totalProjectComplete">Completed</button>
                    </div>

                    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionSidebar${i}">
                    <div class="bg-white py-2 collapse-inner rounded">
        
                        <div class="hori-timeline" dir="ltr">
                        <div style="background:#5BB318;width:12.1%;height:5px;position:absolute;top:0px;z-index:1;"></div>
                            <ul class="list-inline events"> 
                                <li class="list-inline-item event-list">
                                    <div class="px-4">
                                        <div class="event-date bg-soft-primary text-primary">Week 1</div>
                                        <h5 class="font-size-16">Planning</h5>
                                        <!-- <p class="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p> -->
                                        <div>
                                            <button href="#" class="btn btn-primary btn-sm">Completed</button>
                                            <input type="file" style="width:80%;cursor:pointer;margin:4% 0% 0% 20%;font-size:12px;">
                                        </div>
                                    </div>
                                </li>
                                <li class="list-inline-item event-list">
                                    <div class="px-4">
                                        <div class="event-date bg-soft-success text-success">Week 2</div>
                                        <h5 class="font-size-16">Development</h5>
                                        
                                        <div>
                                            <button href="#" class="btn btn-primary btn-sm">Completed</button>
                                            <input type="file" style="width:80%;cursor:pointer;margin:4% 0% 0% 20%;font-size:12px;">
                                        </div>
                                    </div>
                                </li>
                                <li class="list-inline-item event-list">
                                    <div class="px-4">
                                        <div class="event-date bg-soft-danger text-danger">Week 3</div>
                                        <h5 class="font-size-16">Testing</h5>
                                        
                                        <div>
                                            <button href="#" class="btn btn-primary btn-sm">Completed</button>
                                            <input type="file" style="width:80%;cursor:pointer;margin:4% 0% 0% 20%;font-size:12px;">
                                        </div>
                                    </div>
                                </li>
                                <li class="list-inline-item event-list">
                                    <div class="px-4">
                                        <div class="event-date bg-soft-warning text-warning">Week 4</div>
                                        <h5 class="font-size-16">Deployment</h5>
                                        
                                        <div>
                                            <button href="#" class="btn btn-primary btn-sm">Completed</button>
                                            <input type="file" value="Upload" style="width:80%;cursor:pointer;margin:4% 0% 0% 20%;font-size:12px;">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </li>
            </ul>

    </div>
                <!-- end card -->
</div>

       `);
        }

        $("#managerSmt").click(function(){
            var compPrj = document.querySelectorAll("#totalProjectComplete");
            var compPrjList = [];
            for(let i=0;i<compPrj.length;i++){
                if(compPrj[i].innerHTML.toString() == "✔"){
                    var val = (compPrj[i].previousElementSibling.previousElementSibling.children[0].innerHTML);
                    compPrjList.push(val);
                }
            }
            window.open("http://localhost:90/dashboard/accounts.html?prj="+compPrjList);
        });
        


});

function projectCompletion(thisval){
    $(thisval).html(`✔`);

    let compPrj = document.querySelectorAll("#totalProjectComplete");
    var co = $("#compCount").html();
    for(let i=0;i<compPrj.length;i++){
        if(compPrj[i].innerHTML.toString() == "✔"){
            $("#compCount").html(parseInt(co) + 1);
        }
    }
    
}


function createPlan(project){
    var planPrj = project.previousElementSibling.children[0].innerHTML;
    window.open(`http://localhost:90/dashboard/managersPlan.html?prj=${planPrj}`);
}

