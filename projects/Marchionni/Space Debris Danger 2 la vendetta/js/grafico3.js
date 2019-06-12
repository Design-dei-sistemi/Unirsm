$(function() {

$(".didasBlock").hide();

  $("[data-nome='fengyun']").mouseover(function() {

    $("[data-label='fengyun']").fadeIn("slow");
    $("[data-label='cerise']").fadeOut("fast");
    $("[data-label='thorBurner']").fadeOut("fast");
    $("[data-label='microsat']").fadeOut("fast");
    $("[data-label='cosmos']").fadeOut("fast");
    $("[data-label='cosmosIridium']").fadeOut("fast");
  });

  $("[data-nome='cerise']").mouseover(function() {

    $("[data-label='fengyun']").fadeOut("fast");
    $("[data-label='cerise']").fadeIn("slow");
    $("[data-label='thorBurner']").fadeOut("fast");
    $("[data-label='microsat']").fadeOut("fast");
    $("[data-label='cosmos']").fadeOut("fast");
    $("[data-label='cosmosIridium']").fadeOut("fast");
  });

  $("[data-nome='thorBurner']").mouseover(function() {

    $("[data-label='fengyun']").fadeOut("fast");
    $("[data-label='cerise']").fadeOut("fast");
    $("[data-label='thorBurner']").fadeIn("slow");
    $("[data-label='microsat']").fadeOut("fast");
    $("[data-label='cosmos']").fadeOut("fast");
    $("[data-label='cosmosIridium']").fadeOut("fast");
  });


  $("[data-nome='microsat']").mouseover(function() {

    $("[data-label='fengyun']").fadeOut("fast");
    $("[data-label='cerise']").fadeOut("fast");
    $("[data-label='thorBurner']").fadeOut("fast");
    $("[data-label='microsat']").fadeIn("slow");
    $("[data-label='cosmos']").fadeOut("fast");
    $("[data-label='cosmosIridium']").fadeOut("fast");
  });

  $("[data-nome='cosmos']").mouseover(function() {

    $("[data-label='fengyun']").fadeOut("fast");
    $("[data-label='cerise']").fadeOut("fast");
    $("[data-label='thorBurner']").fadeOut("fast");
    $("[data-label='microsat']").fadeOut("fast");
    $("[data-label='cosmos']").fadeIn("slow");
    $("[data-label='cosmosIridium']").fadeOut("fast");
  });

  $("[data-nome='cosmosIridium']").mouseover(function() {

    $("[data-label='fengyun']").fadeOut("fast");
    $("[data-label='cerise']").fadeOut("fast");
    $("[data-label='thorBurner']").fadeOut("fast");
    $("[data-label='microsat']").fadeOut("fast");
    $("[data-label='cosmos']").fadeOut("fast");
    $("[data-label='cosmosIridium']").fadeIn("slow");
  });






});
