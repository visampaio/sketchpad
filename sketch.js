$(document).ready(function() {
  drawGrid(16);
  $(".grid").mouseenter(function() {
    $(this).css("background-color", "black");
  });
});

var drawGrid = function(side) {
  for (var i=0; i < side; i++) {
    for (var j=0; j < side; j++) {
      $("#container").append("<div class='grid'></div>");
    }
  }
}
