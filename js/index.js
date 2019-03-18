$(function(){
    $(".welcome").hide().removeClass("hidden");
    $("h1.welcome").fadeIn(2000);
    $("p.welcome").fadeIn(2000);
    $(".lead").hide().removeClass("hidden");
    $(".aboutme-lead").hide().removeClass("hidden");
})
$(document).scroll(function(){
  var y = $(this).scrollTop();
  if(y>200){
    $("div.par-1").fadeIn(1000);
    $("div.par-2").fadeIn(2000);
    $("div.par-3").fadeIn(2500);
  }
  if(y>400){
    $(".lead").fadeIn(2000);
    $(".aboutme-lead").fadeIn(1000);
  }
  else if(y < 50){
    $("div.par-1").hide();
    $("div.par-2").hide();
    $("div.par-3").hide();
    $(".lead").hide();
    $(".aboutme-lead").hide();
  }
});

var currselection = "row.data.general";
var color = "blue";
function switchColor(newsel,currsel,newcol){
        $("span.test").removeClass(color);
        $("span.test").addClass(newcol);
        $("span.test").slideUp(100);
        $("span.test").slideDown();
        $("span.test").fadeIn(300);
        $(".jr").fadeIn(1000);
        $(currsel).fadeOut(100);
        $(newsel).fadeIn();

}
function showImage(pic){
  $("#modal-body").html(
    "<div class='container-fluid'><div class='row'><div class='col first'><img class='modal-pic' src='imgs/"+pic+".jpg'></img></div><div class='col'><img class='avatar' src='imgs/self2.jpg'><p class='modal-words'>ervinmesa</p><hr width='80%'></div>");
  $("#myModal").modal('show');
}
    $(document).ready(function(){
      $("span.test").hide();
      $(".row.data").hide();
      $(".jr").hide();
    });
    $(document).ready(function(){
    $(".nav-item.general").click(function(){
        $(".jr").show();
        color = "blue";
        currselection = ".row.data.general";
      });
      $(".nav-item.likes").click(function(){
        $(".jr").show();
        color = "red";
        currselection = ".row.data.likes";
      });
      $(".nav-item.story").click(function(){
        $(".jr").show();
        color = "green";
        currselection = ".row.data.story";
      });
      $(".nav-item.social").click(function(){
        $(".jr").show();
        color = "blue";
        currselection = ".row.data.social";
      });
      $(".nav-item.gallery").click(function(){
        $(".jr").hide();
        $("span.test").fadeOut(300);
        $(currselection).fadeOut(100);
        $(".row.data.gallery").fadeIn();
        currselection = ".row.data.gallery";
      });
    });
    $("#aboutme").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("section.sec-2").offset().top
    }, 2000);
    });
    $("#aboutme-1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("section.sec-2").offset().top
    }, 2000);
    });
    $("#Home").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("section.sec-1").offset().top
    }, 2000);
    });
