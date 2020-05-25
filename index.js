var submit=$('.submit');
var clear=$('.clear');
var board=$('.board');
var nameO=$('.name-output');
var old = "";
submit.on('click', showBoard);
clear.on('click', clearBoard);

function showBoard(event){
  event.preventDefault();
  nameO.removeClass();
  nameO.addClass('.name-output');
  var name=$('.name-input').val();
  var decade=$('.decade-input option:selected').val();
  nameO.text(`${name}`+" in the " + `${decade}`);
  nameO.addClass('name-'+`${decade}`);
  board.removeClass('board-'+`${old}`).addClass('board-'+`${decade}`);
  board.hide().fadeIn(2000);
  old=decade;
}
function clearBoard(){
  nameO.text("");
  var decade=$('.decade-input option:selected').val();
  board.removeClass('board-'+`${decade}`);
}
