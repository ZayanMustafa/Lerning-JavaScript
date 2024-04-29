
// Showing Alert and Prompt funcation including variables

let message = "Its your warm welcome";
var userName = prompt("Enter your name")
alert(message  +" "+ userName + '!'  );

//  Changing to uper case
userNameTop= userName.toUpperCase();
document.write("Helow" +" "+ userNameTop + '!' + " Welcome to the coding adventure with JavaScript.Let's dive in and start creating amazing things together!")

// using if else condition with for loop

var userData = ['Zayyan','Mustafa','Hasan','Raza','Hussain','Ahmed']
let checkingCorner = false;
for (let i = 0; i < userData.length; i++) {
    if (userName === userData[i]) {
    checkingCorner = true;
        break;
    }
}
if (checkingCorner) {
document.write("<br>You win");
} else {
document.write("<br>Try Again!");
}

