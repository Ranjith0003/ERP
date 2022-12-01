$(document).ready(function(){

  var amount = localStorage.getItem("amount");
  var cgst = (parseInt(amount) * 9) / 100;
  var sgst = (parseInt(amount) * 9) / 100;
  var total = parseInt(amount) + parseInt(cgst) + parseInt(sgst);
  $("#rate").html(amount);
  $("#amnt").html(amount);
  $("#subT").html(amount);
  $("#cgst").html(cgst);
  $("#sgst").html(sgst);
  $("#total").html(total);
  $("#inr").html("INR "+total);

  var url = (window.location.href).toString().split("?");
  var prj = url[1].split("=");

  $("#prj").html(prj[1]);
    
});

function sendMail() {
    var link = "mailto:ranjith@ggsh.in"
             + "?cc=ranjithsengeni@gmail.com"
             + "&subject=" + encodeURIComponent("Invoice")
             + "&body=" + encodeURIComponent(`Dear Sir, \n
                  Invoice for the completed Project \n \n`)
    ;
    
    window.location.href = link;
}


// function downloadPDFWithjsPDF() {
//     var doc = new jspdf.jsPDF('p', 'pt', 'a4');
  
//     doc.html(document.querySelector('#temp'), {
//       callback: function (doc) {
//         doc.save('MLB World Series Winners.pdf');
//       },
//       margin: [60, 60, 60, 60],
//       x: 32,
//       y: 32,
//     });
//   }
  
//   document.querySelector('#jsPDF').addEventListener('click', downloadPDFWithjsPDF);