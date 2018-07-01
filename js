var height, width, color;
//Define function makeGrid
function makeGrid(rows, cols) {
	$('tr').remove();

// Your code goes here!
for (var i = 1; i <= rows; i++) {
	$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
	for (var j = 1; j <=cols; j++) {
		$('#table' + i).append('<td></td>');
	}
}

// add color to call
$('td').click(function addColor() {
	color = $('#colorPicker').val();

	if ($(this).attr('style')) {
		$(this).removeAttr('style')
	} else {
		$(this).attr('style', 'background-color:' + color);
	}
})

}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (ev) {
	ev.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
});