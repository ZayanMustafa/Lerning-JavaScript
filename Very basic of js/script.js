
// Showing Alert and Prompt funcation including variables

let message = "Its your warm welcome";
var userName = prompt("Enter your name")
alert(message  +" "+ userName + '!'  );

//  Changing to uper case
// using if else condition with for loop

var userData = ['Zayyan','Mustafa','Hasan','Raza','Hussain','Ahmed']
let checkingCorner = false;
for (let i = 0; i < userData.length; i++) {
    if (userName === userData[i]) {
    checkingCorner = true;
        console.log(checkingCorner)
    break;
}
}
userNameTop= userName.toUpperCase();
document.write("Helow" +" "+ userNameTop + '!' + " Welcome to the coding adventure with JavaScript.Let's dive in and start creating amazing things together!")

if (checkingCorner) {
document.write("<br> <h1>You win </h1>");
} else {
document.write("<br> <h1>Try Again!</h1>");

}

