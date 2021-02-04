const data = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000111111111100011111110000000000000000000000000000000000000000000000000000000000000000000000000000111111110000001111110000000000000000000000000000000000000000000000000000000000000000000000000111111110000000001111110000000000000000000000000000000000000000000000000000000000000000000000011111111000000000000111110000000000000000000000000000000000000000000000000000000000000000000001111111100000000000000111111000000000000000000000000000000000000000000000000000000000000000111111111110000000000000000011111000000000000000000000000000000000000000000000000000000000000000111111111100000000000000000011111000000000001111000000000000000000000000000000000000000000000011111111110000000000000000000011111000000111111111111111111111111100000000000000000000000000001111111110000000000000000000000011111111111111111111111111111111111100000000000000000000000001111111110000000000000000000000000011111111111111111111111111111111111100000000000000000000001111111111100000000000000000000000000001111111111111111111111111111111111100000000000000000001111111111111000000000000000000000000000001111110000111111111111111111111111100000000000000000011111111111000000000000000000000000000000000111110000000000000000000001111111100000000000000011111111110000000000000000000000000000000000000000000000000000000000000001111111100000000000011111111110000000000000000000000000000000000000000000000000000000000000000001111111100000000001111111111000000000000000000000000000000000000000000000000000000000000000000001111111100000000011111111000000000000000000000000000000000000000000000000000000000000000000000001111111100000000111111100000000000000000000000000000000000000000000000000000000000000000000000001111111100000000111110000000000000000000000000000000000000000000000000000000000000000000000000001111111100000000111110000000000000000000000000000000000000000000000000000000000000000000000000001111111100000000111110000000000000000000000000000000000000000000000000000000000000000000000000001111111100000000111111000000000000000000000000000000000000000000000000000000000000000000000000001111111100000000011111000000000000000000000000000000000000000000000000000000000000000000000000001111111100000000011111000000000000000000000000000000000000000000000000000000000000000000000000001111111100000000011111100000000000000000000000000000000000000000000000000000000000000000000000001111111100000000011111100000000000000000000000000000000000000000000000000000000000000000000000001111111100000000001111110000000000000000000000000000000000000000000000000000000000000000000000001111111100000000001111110000000000000000000000000000000000000000000000000000000000000000000000001111111100000000000111110000000000000000000000000000000000000000000000000000000000000000000000001111111100000000000111110000000000000000000000000000000000000000000000000000000000000000000000001111111100000000000111111000000000000000000000000000000000000000000000000000000000000000000000001111111100000000000011111000000000000000000000000000000000000000000000000000000000000000000000001111111100000000000011111000000000000000000000000000000000000000000000000000000000000000000000001111111100000000000001111100000000000000000000000000000000000000000000000000000000000000000000001111111100000000000001111111111111111111111111111111111111111111112003111111111111111111111111111111111100000000000001111111111111111111111111111111111111111111112003111111111111111111111111111111111100000000000001111111111111111111111111111111111111111111112003111111111111111111111111111111111110000000000011111111111111111111111111111111111111111111112003111111111111111111111111111111111110000000000001111111111111111111111111111111111111111111112003111111111111111111111111111111111110000000000000111111000000000000000000000000000000000000000000000000000000000000000000111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
function convertArray2D(array, stride) {
	const newArr = [];
	let arr;
	if (typeof array === "string") {
		arr = array.split("")
	} else {
		arr = array;
	}

	while (arr.length) {
		newArr.push(arr.splice(0, stride));
	}

	return newArr;
}

const grid = convertArray2D(data, 96);


function checkValid(solution) {
	var valid = true;
	for (let index = 0; index < solution.length; index++) {
		const element = solution[index];
		if (grid[element.y][element.x] == "0") {
			valid = false;
		}
		if (index == 1) {
			var changeX = solution[index - 1].x - solution[index].x
			var changeY = solution[index - 1].y - solution[index].y
			if (Math.abs(changeX) > 1 || Math.abs(changeY) > 1) {
				valid = false;
			}
		}
		if (index > 1) {
			var firstMoveX = solution[index - 2].x - solution[index - 1].x
			var secondMoveX = solution[index - 1].x - solution[index].x
			var changeX = secondMoveX - firstMoveX;
			var firstMoveY = solution[index - 2].y - solution[index - 1].y
			var secondMoveY = solution[index - 1].y - solution[index].y
			var changeY = secondMoveY - firstMoveY;
			if (Math.abs(changeX) > 1 || Math.abs(changeY) > 1) {
				valid = false;
			}
		}
	}

	return valid;
}

function toggleElement(ref) {
	const selected = $(ref).hasClass("selected");
	const x = $(ref).attr("x");
	const y = $(ref).attr("y");

	const isSelected = finalArray.find(item => (item.x == x && item.y == y));

	if (!isSelected) {
		finalArray.push({ x, y });
	} else if (finalArray.length) {
		finalArray = finalArray.filter(item => !(item.x == x && item.y == y));
	}

	$(ref).toggleClass("selected");
}

let finalArray = [];

grid.forEach((yElement, yIndex) => {
	yElement.forEach((xElement, xIndex) => {
		$(".grid").append(`<div y="${yIndex}" x="${xIndex}" el="${xElement}"> </div>`);
	})

	$(".grid").append("<br>")
});

$(document).on("click", "div > div", function () {
	$(".alert").hide();
	const val = $(this).attr("el");

	if (val == "0") {
		return;
	}

	toggleElement(this);
	const isValid = checkValid(finalArray);

	if (!isValid) {
		$(".alert").show().html("Your last action was canceled, as it is invalid!")
		toggleElement(this);
	}
});

$(document).on("click", "button", function () {
	$("textarea").val(JSON.stringify(finalArray));
});