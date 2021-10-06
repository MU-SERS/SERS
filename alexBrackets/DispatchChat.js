//this starts the page showing the logo
window.onload = function() {
  document.getElementById('chat').style.display = 'none';
  document.getElementById('person').style.display = 'none';
  document.getElementById('map').style.display = 'none';
};


//this loads the chat
function chatLoad(){
  document.getElementById('logo').style.display = 'none';
  document.getElementById('map').style.display = 'none';
  document.getElementById('chat').style.display = 'block';
  document.getElementById('person').style.display = 'block';
}

//This displays messages from dispatch
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

//this wipes the text box after send
function clearForm() {
    document.getElementById('messagebox').value = "";
}

//this displays messages from the app user
function addChat(sendChat) {
    
  var div2 = document.createElement('text');
  var div3 = document.createElement('userIcon');
    
  console.log(div2);
  console.log(div3);
    
  div2.innerHTML = "<p>My friend is bleeding really badly my lat/long is 38.94,-92.32</p>";
  div3.innerHTML = "B";
    
  div2.setAttribute("style", "height: auto; width: 90%; border: 1px solid black; margin-top: 1%; margin-right: auto; margin-left: auto; background-color: whitesmoke; display: inline-block");
  div3.setAttribute("style", "height: 45px; width: 45px; background-color: darkgray; border-radius: 50%; display: inline-block; border: 2px solid black; margin-right: 1%; margin-top: 1%; float: right; text-align: center;");
    
  document.getElementById('text').appendChild(div2);
  document.getElementById('text').appendChild(div3);

}

//this adds the tickets on the left
function addTicket() {
    
  var div = document.createElement('chat');
    
  console.log(div);
    
  div.innerHTML = "<p>Number goes here</p>"+"<p>Preview of message...</p>"+"<button id=loadChat onClick=chatLoad() type=button>select to load</button>";
    
  div.setAttribute("style", "height: 50%; width: 98%; border: 1px solid black; margin-top: 1%; margin-left: .75%; margin-right: 1%; background-color: whitesmoke; display: block;");
    
  document.getElementById('ticket').append(div);

}