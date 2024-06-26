var yourname = document.getElementById('yourname');
var youremail = document.getElementById('youremail');
var yourpassword = document.getElementById('yourpassword');
var userList = [];
if (localStorage.getItem('userList') != null) 
{    userList = JSON.parse(localStorage.getItem('userList'))} 
else {    userList = [];}
function addUser()
 {    
    if (yourname.value == '' || youremail.value == '' || yourpassword.value == '') 
{        document.getElementById('massege').innerHTML = `<p class = 'erro'>All inputs is required</p>`    } 
 else {      
    var user =
{    name: yourname.value, 
    email: youremail.value,     
    password: yourpassword.value      
}       
    userList.push(user); 
      
    localStorage.setItem('userList', JSON.stringify(userList));   
    window.open('./signIn.html','_self');
    location.href = './signIn.html'; 
}
}