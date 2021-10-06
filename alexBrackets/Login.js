function addEvent1() {
    var user1 = document.getElementById('username').value;
    var pass2 = document.getElementById('password').value;
    
    console.log(user1);
    console.log(pass2);


    if(pass2 === '' && user1 === ''){
        window.confirm('fill out both username and password field');    
    } 
    else if(user1 === ''){
        window.confirm('fill out username field');
    }
    else if(pass2 === ''){
        window.confirm('fill out pasword field');
    }

}