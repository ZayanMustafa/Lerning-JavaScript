
// Showing Alert and Prompt funcation including variables

let message = "Its your warm welcome";
var userName = prompt("Enter your name")
alert(message  +" "+ userName + '!'  );


//  Changing to uper case
userName= userName.toUpperCase();
document.write("Helow" +" "+ userName + '!' + " Welcome to the coding adventure with JavaScript.Let's dive in and start creating amazing things together!")

// using if else condition with for loop 

var studentsName = ['Zayyan','Mustafa','Hasan','Raza'] 
for (var i = 0; i < studentsName.length; i++) {
    if(userName == studentsName)
    {
        document.write("\n Thank you for submitting your fees. Your payment has been received and processed successfully.")
    
    } else{
        document.write("\n Oops! Looks like we haven't received your fees yet. No worries, just a gentle reminder to settle up when you get a chance. Let's make sure everything's squared away!")
    }
}


