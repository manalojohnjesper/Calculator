const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input;}

function clearDisplay(){
    display.value = "";}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = " Error ";}

}
function del() {
      let button = document.getElementById("display");
      button.value = button.value.substring(0, button.value.length - 1);}