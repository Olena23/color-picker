var $submit = $('input[type="submit"]');
$submit.click(makeGrid);

function makeGrid(event) {
  event.preventDefault();
  var height = $("#input_height").val();
  var width = $("#input_width").val();

  var table = $('#pixel_canvas');

  //Create table row
  var row = '';
  for (let i = 0; i < width; i++){
    row += '<td></td>';
  }
  row = '<tr>' + row + '</tr>';

  //Create all table rows
  var col = '';
  for(let i = 0; i < height; i++){
    col += row;
  }

  //Display table
  table.html(col);
  var $cells = $('td');

  //Color clicked table cell
  $cells.click(function () {
    var color = $("#colorPicker").val();
    $(this).css('background-color', color);
  })
}
