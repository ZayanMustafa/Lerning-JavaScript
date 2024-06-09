var loginPage = document.getElementById("showcase");
var classSheet = document.getElementById("classSheet");

// function login() {
//   alert("Sabar Kar Bhai");
//   var page = document.getElementById("Attendance"). value
//   console. log ("page") 
//   page.style.display = 'block';
// }

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
        
    // alert("👋 Hey! Welcome back, Teacher!");
    // After successful sign-in, hide the login page and display the next page
    if (loginPage) {
      loginPage.style.display = "none";
        }
        if (classSheet) {
          classSheet.style.display = "block";
          classSheet.style.overflowX = "hidden"

        }
  
  }}

    // Attendence Sheet 
    var students = [
      { name: "Muhammad", fatherName: "Abdullah" },
      { name: "Aisha", fatherName: "Abu Bakr" },
      { name: "Fatima", fatherName: "Muhammad" },
      { name: "Ali", fatherName: "Abu Talib" },
      { name: "Zainab", fatherName: "Husayn" },
      { name: "Omar", fatherName: "Abdul-Aziz" },
      { name: "Khadija", fatherName: "Khuwaylid" },
      { name: "Hassan", fatherName: "Ali" },
      { name: "Husayn", fatherName: "Ali" },
      { name: "Amina", fatherName: "Wahb" },
      { name: "Yusuf", fatherName: "Yaqub" },
      { name: "Maryam", fatherName: "Imran" },
      { name: "Bilal", fatherName: "Rabah" },
      { name: "Rukhsana", fatherName: "Siddiq" },
      { name: "Ibrahim", fatherName: "Azar" },
      { name: "Ayesha", fatherName: "Abu Bakr" },
      { name: "Amir", fatherName: "Harith" },
      { name: "Sumayyah", fatherName: "Khabbat" },
      { name: "Sana", fatherName: "Ayyash" },
      { name: "Abdullah", fatherName: "Ubayy" },
      { name: "Abdul-Rahman", fatherName: "Awf" }
  ];
  function updateTable() {
      document.getElementById("student-table-body").innerHTML = 
      students.map(function(student, index) {
          return `<tr>
              <td>${index + 1}</td>
              <td>${student.name}</td>
              <td>${student.fatherName}</td>
            
          </tr>`;
      }).join('');
  }
  
  updateTable();
  