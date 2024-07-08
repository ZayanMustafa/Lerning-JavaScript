document.getElementById("logoutOption").addEventListener("click", logOutFunction)

logOutFunction(){
    if (confirm('Are you sure you want to log out?')) {
        window.location.href = 'logout.html';
    }
}