var submit=$('.submit');
var subtext=$('.sub');
var clear=$('.clear');
var cltext=$('.cl');
var board=$('.board');
var nameO=$('.name-output');
var old = "";
submit.on('click', showBoard);
clear.on('click', clearBoard);
subtext.on('mouseenter', highlight);
subtext.on('mouseleave', dehighlight);
cltext.on('mouseenter', highlight);
cltext.on('mouseleave', dehighlight);

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
function highlight(){
  $(this).addClass('highlight');
}
function dehighlight(){
  $(this).removeClass('highlight');

}
