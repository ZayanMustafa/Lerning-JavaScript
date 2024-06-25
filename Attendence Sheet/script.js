document.addEventListener("DOMContentLoaded", function() {
  const loginPage = document.getElementById("showcase");
  const classSheet = document.getElementById("classSheet");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const loginForm = document.getElementById("loginForm");
  const logoutButton = document.querySelector(".btn-logout");
  const showEmail = document.getElementById("showEmail");

  // Sample student data
  const students = [
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

  // Function to update student table
  function updateTable() {
    const tableBody = document.getElementById("student-table-body");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.fatherName}</td>
        <td><input type="checkbox" class="attendance-checkbox"></td>
      `;
      tableBody.appendChild(row);
    });

    // Update total student count
    document.getElementById("Total").innerText = students.length;
  }

  // Initial table update
  updateTable();

  // Login form submission
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailField.value;
    const password = passwordField.value;

    // Simulated authentication logic
    // Replace with actual authentication logic
    if (email === "admin@gmail.com" || email === "admin@yahoo.com") {
      localStorage.setItem("userEmail", email);
      login();
    } else {
      localStorage.setItem("userEmail", email);
      login();
    }
  });

  // Function to handle UI changes on login
  function login() {
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      // Hide login page and show class sheet
      loginPage.style.display = "none";
      classSheet.style.display = "block";
      showEmail.innerText = userEmail;

      // Check if user is admin to apply special styling or features
      if (userEmail === "admin@gmail.com" || userEmail === "admin@yahoo.com") {
        showEmail.style.backgroundColor = "#f8d7da";
        showEmail.style.fontFamily = "Arial, sans-serif";
        // Additional admin features can be implemented here
      }
    }
  }

  // Logout functionality
  logoutButton.addEventListener("click", function() {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("userEmail");
      loginPage.style.display = "block";
      classSheet.style.display = "none";
    }
  });

  // Add student form submission (assuming you have a modal for adding students)
  document.getElementById("addStudentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const fatherName = document.getElementById("fatherName").value;

    // Simulating adding a student to the array (replace with actual logic)
    students.push({ name: name, fatherName: fatherName });
    updateTable();

    // Reset form fields
    document.getElementById("addStudentForm").reset();
    // Close modal using Bootstrap (if applicable)
    $('#addStudentModal').modal('hide');
  });

  // Handle attendance submission (assuming you have a form for attendance)
  document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const checkboxes = document.querySelectorAll(".attendance-checkbox");
    checkboxes.forEach((checkbox, index) => {
      // Example: Save attendance data to a database or perform further processing
      const studentName = students[index].name;
      const isPresent = checkbox.checked;
      console.log(`${studentName} is present: ${isPresent}`);
      // You can perform further actions like saving to a database here
    });

    // Reset checkboxes or perform any other necessary actions
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });

    // Example alert
    alert("Attendance submitted successfully!");
  });
});