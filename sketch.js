$(document).ready(function() {
  drawGrid(16);

  $("#clear").click(function() {
    var square = $("input:text").val();
    drawGrid(square);
  });

  $("input:text").keypress(function(e) {
    if (e.which == 13) {
      var square = $("input:text").val();
      drawGrid(square);
      return false;
    }
  });

});

var drawGrid = function(square) {
  $("div").remove(".grid");

  for (var i=0; i < square; i++) {
    for (var j=0; j < square; j++) {
      $("main").append('<div class="grid" ondragstart="return false;"></div>');
    }
  }

// Changes the size of the squares
  var side = 960 / square;
  $(".grid").css({"height": side, "width": side});

// Checks if mouse is pressed down
  var down = false;
  $(document).mousedown(function() {
    	down = true;
	});
  $(document).mouseup(function() {
    	down = false;
  });

// Paints the squares if you click or if you drag with mouse pressed down
  $(".grid").mousedown(function() {
    $(this).css("background-color", "black");
  });

  $(".grid").hover(function() {
    if (down) {
      $(this).css("background-color", "black");
    }
  });

}
