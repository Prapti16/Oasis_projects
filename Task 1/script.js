function addToDisplay(value) {
    document.getElementById('inputbox').value += value;
}
  
function clearDisplay() {
    document.getElementById('inputbox').value = '';
}
  
function calculate() {
    var display = document.getElementById('inputbox');
      try {
        display.value = eval(inputbox.value);
      } catch (e) {
        inputbox.value = 'Error';
      }
}
    
function deleteLast() {
    let current = document.getElementById('inputbox').value;
      document.getElementById('inputbox').value = current.slice(0, -1);
}
