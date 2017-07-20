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

  $("body").on("contextmenu",function(e) {
    return false;
  })

/*  $(".zoom").click(function() {
    var perc = $(this).val();
    $("body").css("zoom", perc);
  });
}); */

var drawGrid = function(square) {
// Erases previous grid and draws another one
  $("div").remove(".grid");

  for (var i=0; i < square; i++) {
    for (var j=0; j < square; j++) {
      $("main").append('<div class="grid" ondragstart="return false;"></div>');
    }
  }

// Changes the size of the squares

  var side = 500 / square;
  $(".grid").css({"height": side, "width": side});

// Checks if mouse is pressed down
  var downLeft = false;
  var downRight = false;
  $(document).mousedown(function(event) {
    switch (event.which) {
      case 1:
        downLeft = true;
        break;
      case 3:
        downRight = true;
        break;
    }
	});
  $(document).mouseup(function(event) {
    switch (event.which) {
      case 1:
        downLeft = false;
        break;
      case 3:
        downRight = false;
        break;
    }
  });

// Gets left-clicker color from color picker
  var color1 = $('#custom1').spectrum('get').toHexString();
	$('#custom1').change(function() {
		$('#custom1').spectrum('get').toHexString();
		color1 = $('#custom1').spectrum('get').toHexString();
});

// Gets right-clicker color from color picker
  var color2 = $('#custom2').spectrum('get').toHexString();
	$('#custom2').change(function() {
		$('#custom2').spectrum('get').toHexString();
		color2 = $('#custom2').spectrum('get').toHexString();
});

// Paints the squares if you click
  $(".grid").mousedown(function(event) {
    if (event.which == 3) {
      $(this).css("background-color", color2);
    }
    else {
      $(this).css("background-color", color1);
    }
  });

// Paints the squares if you drag with mouse pressed
  $(".grid").hover(function() {
    if (downLeft) {
        $(this).css("background-color", color1);
    }
    else if(downRight) {
      $(this).css("background-color", color2);
    }
  });

}
