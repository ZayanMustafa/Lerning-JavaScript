document.getElementById("logoutOption").addEventListener("click", logOutFunction);

function logOutFunction() {
    if (confirm('Are you sure you want to log out?')) {
        window.location.href = 'logout.html';
    }
}
