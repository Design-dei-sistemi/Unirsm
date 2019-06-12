$(function() {


  $(".pulsantePaese").on("click", function() {

    $("#UTILIZZO").fadeOut("fast");
    $("#PROPRIETA").fadeOut("fast");
    $("#PAESE").fadeIn("fast");

    $("#DIDUTILIZZO").fadeOut("fast");
    $("#DIDPROPRIETA").fadeOut("fast");
    $("#DIDPAESE").fadeIn("slow");

   $(".pulsantePaese").addClass("selectedPaese");
   $(".pulsanteUtilizzo").removeClass("selectedUtilizzo");
   $(".pulsanteProprieta").removeClass("selectedProprieta");

  });

  $(".pulsanteUtilizzo").on("click", function() {

    $("#UTILIZZO").fadeIn("fast");
    $("#PROPRIETA").fadeOut("fast");
    $("#PAESE").fadeOut("fast");

    $("#DIDUTILIZZO").fadeIn("slow");
    $("#DIDPROPRIETA").fadeOut("fast");
    $("#DIDPAESE").fadeOut("fast");

   $(".pulsantePaese").removeClass("selectedPaese");
   $(".pulsanteUtilizzo").addClass("selectedUtilizzo");
   $(".pulsanteProprieta").removeClass("selectedProprieta");

  });

  $(".pulsanteProprieta").on("click", function() {

    $("#UTILIZZO").fadeOut("fast");
    $("#PROPRIETA").fadeIn("fast");
    $("#PAESE").fadeOut("fast");

    $("#DIDUTILIZZO").fadeOut("fast");
    $("#DIDPROPRIETA").fadeIn("slow");
    $("#DIDPAESE").fadeOut("fast");

   $(".pulsantePaese").removeClass("selectedPaese");
   $(".pulsanteUtilizzo").removeClass("selectedUtilizzo");
   $(".pulsanteProprieta").addClass("selectedProprieta");

  });

});
