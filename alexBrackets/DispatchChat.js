function sendChat(addChat) {
    
  var div4 = document.createElement('Dispatchtext');
  var div5 = document.createElement('dispatchIcon');
    
  console.log(div4);
  console.log(div5);
    
  div4.innerHTML = document.getElementById('messagebox').value;
  div5.innerHTML = "PD";
    
  div4.setAttribute("style", "min-height: 50px; width: 90%; border: 1px solid black; margin-top: 1%; margin-right: auto; margin-left: auto; background-color: whitesmoke; display: inline-block;");
  div5.setAttribute("style", "height: 45px; width: 45px; background-color: darkgray; border-radius: 50%; display: inline-block; border: 2px solid black; margin-right: 1%; margin-top: 1%; float: left; text-align: center;");
    
  document.getElementById('text').appendChild(div4);
  document.getElementById('text').appendChild(div5);
  clearForm();

}

function clearForm() {
    document.getElementById('messagebox').value = "";
}

function addChat(sendChat) {
    
  var div2 = document.createElement('text');
  var div3 = document.createElement('userIcon');
    
  console.log(div2);
  console.log(div3);
    
  div2.innerHTML = "<p>My friend is bleeding</p>";
  div3.innerHTML = "B";
    
  div2.setAttribute("style", "height: auto; width: 90%; border: 1px solid black; margin-top: 1%; margin-right: auto; margin-left: auto; background-color: whitesmoke; display: inline-block");
  div3.setAttribute("style", "height: 45px; width: 45px; background-color: darkgray; border-radius: 50%; display: inline-block; border: 2px solid black; margin-right: 1%; margin-top: 1%; float: right; text-align: center;");
    
  document.getElementById('text').appendChild(div2);
  document.getElementById('text').appendChild(div3);

}