var userList = [];
userList = JSON.parse(localStorage.getItem('userList'))
var youremail = document.getElementById('youremail');
var yourpassword = document.getElementById('yourpassword');
document.getElementById('login').addEventListener('click', function () {    
if (youremail.value == '' || yourpassword.value == '') 
{        document.getElementById('massege').innerHTML = `<p class ='erro'>All inputs is required</p>`    } 
else 
{     

    checkList();  
    document.getElementById('massege').innerHTML = `<p class ='erro'>success</p>`    

}
})
function checkList() {    
for (var i = 0; i < userList.length; i++) 
{ 
    if (youremail.value == userList[i].email && yourpassword.value == userList[i].password)
{         
    var y = userList[i].name;          
    localStorage.setItem('userListName', y);           
       
    window.open('./home.html','_self');
    location.href = './home.html';         
    break;       
}   
}
}