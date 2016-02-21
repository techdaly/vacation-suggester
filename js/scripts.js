

$("#readybutton").click(function() {
    $("#questionnaire").show();
    $("#introduction").hide();
  });

$("form#questionnaire").submit(function(event) {
  var natureVariable = parseInt($("input.nature").filter(":checked").val());
  var budgetVariable = parseInt($("input.budget").filter(":checked").val());
  var farVariable = parseInt($("input.far").filter(":checked").val());
  var fearVariable = parseInt($("input.fear").filter(":checked").val());
  var age = $("input.age").filter(":checked").val();
  var destinationAdd = natureVariable + budgetVariable + farVariable + fearVariable;

  if (destinationAdd < 5) {
    $("#destinationEarth").show();
    $("#questionnaire").hide();
  }
  else if (destinationAdd < 9) {
    $("#destinationVenus").show();
    $("#questionnaire").hide();
  }
  else if (destinationAdd < 13) {
    $("#destinationEuropa").show();
    $("#questionnaire").hide();
  }
  else if (destinationAdd < 17) {
    $("#destinationKepler186f").show();
    $("#questionnaire").hide();
  }
  else if (destinationAdd < 21 && age === "over21") {
    $("#destinationPSO").show();
    $("#questionnaire").hide();
  }
  else if (destinationAdd < 21 && age === "under21") {
    $("#destinationKepler16b").show();
    $("#questionnaire").hide();
  }


  event.preventDefault();
});
