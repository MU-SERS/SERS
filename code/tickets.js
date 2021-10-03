function addTicket() {
    
  var div = document.createElement('chat');
    
  console.log(div);
    
  div.innerHTML = "<p>Number goes here</p>"+"<p>Preview of message...</p>";
    
  div.setAttribute("style", "height: 50%; width: 98%; border: 1px solid black; margin-top: 1%; margin-left: .75%; margin-right: 1%; background-color: whitesmoke; display: block;");
    
  document.getElementById('ticket').append(div);

}