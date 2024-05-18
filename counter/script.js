    document.addEventListener('DOMContentLoaded', function() {
    var input1 = document.getElementById('Month');
    var input2 = document.getElementById('Day');
    var input3 = document.getElementById('Year');
    
    // var input01 = document.getElementById('Month').value;
    // var input02 = document.getElementById('Day').value;
    // var input03 = document.getElementById('Year').value;
    


    input1.addEventListener('keydown', function(event) {
      // if (input1 > 12) {alert("Enter Correct Month ")}
      if (event.key === 'Enter') {
        event.preventDefault();
        input2.focus(); 
      }
    });
  
    input2.addEventListener('keydown', function(event) {
      // if (input02 < 31){alert("Enter Correct Date ")}
      if (event.key === 'Enter') {
        event.preventDefault(); 
        input3.focus(); 
      }
    });

    input3.addEventListener('keydown', function(event) {
      // if (input03 < 2023){alert("Enter Correct Year ")}
        if (event.key === 'Enter') {
          event.preventDefault(); 
          btn.focus(); 
      }
      });

    btn.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault(); 
        }
      });

      
  });
  function hasan() {
    var userInput = [document.getElementById('Month').value, document.getElementById('Day').value, document.getElementById('Year').value]
    var targetDate = new Date(userInput);
    var countdownInterval = setInterval(function() {
    var currentDate = new Date();
    var timeDifference = targetDate.getTime() - currentDate.getTime();

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('counter').innerHTML = 'Time remaining: ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      document.getElementById('counter').innerHTML = 'This date is gone....';
     }
     if (userInput == null ){
        alert("Enter Value!")
        }
       }, 1000); 

  }
   console.log("Hasan") 
  