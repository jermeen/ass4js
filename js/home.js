document.getElementById('username').innerHTML = localStorage.getItem('userListName');
document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('userName');
})