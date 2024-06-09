var loginPage = document.getElementById("showcase");
var classSheet = document.getElementById("classSheet");


  function signIn(event) {
      event.preventDefault(); // Prevent form submission and page reload
      
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
    
      // Regular expression for checking email format
      var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (email === "" || password === "") {
          alert("Please fill in both email and password fields.");
      } else if (!email.match(emailFormat)) {
          alert("Please enter a valid email address.");
      } else {
          alert("👋 Hey! Welcome back, Teacher!");

    // After successful sign-in, hide the login page and display the next page
    if (loginPage) {
      loginPage.style.display = "none";
        }
        if (classSheet) {
          classSheet.style.display = "block";
        }
  
  }}

