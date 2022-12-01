// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// XML Http Request
function speedChart(chart){
req = new XMLHttpRequest();
req.onload= function(){
  const data = JSON.parse(this.responseText);
  console.log(data.pie.data);
  // const type = data.;
  if(chart == "pie"){
    speedPie(data);
  }
  else{
    speedDougnut(data);
  }
}
req.open("GET","http://localhost:82/chart.json");
req.send();
// XML Http Request End




// Pie Chart Example
function speedPie(data){
  document.getElementById("myPieChart").setAttribute("style","display:block;");
  document.getElementById("myDoughnut").setAttribute("style","display:none;");
  
  var canvas = document.getElementById("myPieChart");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  
var myPieChart = new Chart(ctx, {
  type: data.pie.type,
  data: {
    labels: data.pie.labels,
    datasets: [{
      data: data.pie.data,
      backgroundColor: data.pie.colors,
      // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      // hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 0,
  },
});

}
function speedDougnut(data){
  document.getElementById("myPieChart").setAttribute("style","display:none;");
  document.getElementById("myDoughnut").setAttribute("style","display:block;");
  // const context = canvas.getContext('2d');
  var canvas = document.getElementById("myDoughnut");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

var myPieChart = new Chart(ctx, {
  type: data.dougnut.type,
  data: {
    labels: data.dougnut.labels,
    datasets: [{
      data: data.dougnut.data,
      backgroundColor: data.dougnut.colors,
      // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      // hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

}

}