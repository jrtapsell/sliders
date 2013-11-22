var chosen;
var output;
var puzzle = 0;
var puzzles = 3;
var locations;
var raw = "[\
[[1,2,3,4],[5,6,7,8],[9,10,11,42],[13,14,15,12]],\
[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,42,15]],\
[[5,1,2,3],[9,6,7,4],[13,10,11,8],[14,15,12,42]],\
[[5,1,7,3],[9,2,11,4],[13,6,15,8],[42,10,14,12]]\
]";
locations = $.parseJSON(raw)[puzzle];
var rows = 4;
var win = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,42";
var stop = false;
$(".WIN").css("display", "none");

function reset() {
	stop = false;
	$(".WIN").css("display", "none");
	locations = $.parseJSON(raw)[puzzle];
	for (var i = 0, len = rows; i < len; i++) {
		for (var j = 0, len = rows; j < len; j++) {
			var target = locations[i][j];
			if (target !== 42) {
				$("#move" + target).animate({
					top: "" + (i * (100 / rows)) + "%",
					left: "" + (j * (100 / rows)) + "%",
				});
			}
		}
	}
}

function next() {
	if (puzzle !== puzzles) {
		puzzle = puzzle + 1;
		locations = $.parseJSON(raw)[puzzle];
		draw();
		stop = false;
		$(".WIN").css("display", "none");
	}
	if (puzzle == puzzles) {
		$(".next").css("height", "3%");
	} else {
		$(".next").css("height", "6%");
	}
	if (puzzle == 0) {
		$(".last").css("height", "3%");
	} else {
		$(".last").css("height", "6%");
	}
}

function last() {
	if (puzzle !== 0) {
		puzzle = puzzle - 1;
		locations = $.parseJSON(raw)[puzzle];
		draw();
		stop = false;
		$(".WIN").css("display", "none");
	}
	if (puzzle == 0) {
		$(".last").css("height", "3%");
	} else {
		$(".last").css("height", "6%");
	}
	if (puzzle == puzzles) {
		$(".next").css("height", "3%");
	} else {
		$(".next").css("height", "6%");
	}
}

function move(index) {
	if (!stop) {
		var blank;
		for (var i = 0, len = rows; i < len; i++) {
			for (var j = 0, len = rows; j < len; j++) {
				if (locations[i][j] === 42) {
					bx = i + 1;
					by = j + 1;
					break;
				}
			}
		}
		var clicked;
		for (var i = 0, len = rows; i < len; i++) {
			for (var j = 0, len = rows; j < len; j++) {
				if (locations[i][j] === index) {
					cx = i + 1;
					cy = j + 1;
					break;
				}
			}
		}
		if (by == cy + 1 && bx == cx) {
			$("#move" + index).animate({
				left: "+=" + String(100 / rows) + "%",
			});
			locations[bx - 1][by - 1] = index;
			locations[cx - 1][cy - 1] = 42;
		}
		if (by == cy - 1 && bx == cx) {
			$("#move" + index).animate({
				left: "-=" + String(100 / rows) + "%",
			});
			locations[bx - 1][by - 1] = index;
			locations[cx - 1][cy - 1] = 42;
		}
		if (by == cy && bx == cx + 1) {
			$("#move" + index).animate({
				top: "+=" + String(100 / rows) + "%",
			});
			locations[bx - 1][by - 1] = index;
			locations[cx - 1][cy - 1] = 42;
		}
		if (by == cy && bx == cx - 1) {
			$("#move" + index).animate({
				top: "-=" + String(100 / rows) + "%",
			});
			locations[bx - 1][by - 1] = index;
			locations[cx - 1][cy - 1] = 42;
		}
		if (String(locations) === win) {
			setTimeout(function () {
				$(".WIN").css("display", "block");
			}, 500);
			stop = true;

		}
	}
}
draw();

function draw() {
	$(".square").css("background-size", (rows * 100) + "% " + (rows * 100) + "%")
	$(".square").css("width", (100 / rows) + "%")
	$(".square").css("height", (100 / rows) + "%")
	for (var i = 0, len = rows; i < len; i++) {
		for (var j = 0, len = rows; j < len; j++) {
			var target = locations[i][j];
			if (target !== 42) {
				$("#move" + target).animate({
					top: "" + (i * (100 / rows)) + "%",
					left: "" + (j * (100 / rows)) + "%",
				});
				console.log(i + j);
				var tx = (target - 1) % rows;
				var ty = Math.floor((target - 1) / rows);
				var multiple = 100 / rows

				$("#move" + target).css("background-position", ((tx * multiple) + 8 * tx) + "% " + ((ty * multiple) + 8 * ty) + "%");
			}
		}
	}
}
$(".last").css("height", "3px");
