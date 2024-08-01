function inchesToCm() {
  const elem = document.getElementsByClassName("in-to-cm");
  let i = 0;
  let text = "";
  //loop to generate fields
  for (i ; i < elem.length ; i++) {
    //checks if input is 'not a number'
    if (isNaN(elem[i].value)) {
      alert(`'Num ${i+1}' must be a number`);
      return false;
    }
    //generate each field (line)
    text += `Num ${i+1}: ${(elem[i].value * 2.54).toFixed(0)} cm <br>`;
  }

  //print each line
  document.getElementById("result-cm").innerHTML = text;
}