
function countdown() {
    var birthDay = prompt("Enter Your Date of Birth")
    var endDate = new Date(birthDay).getTime();
  
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = endDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
  
  countdown();
  