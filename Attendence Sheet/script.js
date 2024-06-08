
function login() {
  alert("Sabar Kar Bhai");
  var page = document.getElementById("Attendance"). value
  console. log ("page") 
  page.style.display = 'block';
}

  // Initial student data
  var studentNames = [
    { name: "Muhammad", fatherName: "Abdullah" },
    { name: "Ahmed", fatherName: "Ibrahim" },
    { name: "Ali", fatherName: "Hassan" },
    { name: "Fatima", fatherName: "Zeeshan" },
    { name: "Aisha", fatherName: "Umar" },
    { name: "Zainab", fatherName: "Abdulrahman" },
    { name: "Yusuf", fatherName: "Khalid" },
    { name: "Hassan", fatherName: "Omar" },
    { name: "Hussein", fatherName: "Mustafa" },
    { name: "Amina", fatherName: "Hamza" },
    { name: "Abdul", fatherName: "Ali" },
    { name: "Sana", fatherName: "Farooq" },
    { name: "Mariam", fatherName: "Imran" },
    { name: "Omar", fatherName: "Hassan" },
    { name: "Nadia", fatherName: "Kareem" },
    { name: "Bilal", fatherName: "Saleem" },
    { name: "Ayesha", fatherName: "Tariq" },
    { name: "Aisha", fatherName: "Nadeem" },
    { name: "Hiba", fatherName: "Raza" },
    { name: "Farhan", fatherName: "Rehman" },
    { name: "Safia", fatherName: "Rashid" },
    { name: "Sohaib", fatherName: "Yasin" },
    { name: "Amira", fatherName: "Akhtar" },
    { name: "Noman", fatherName: "Saeed" },
    { name: "Sara", fatherName: "Nasir" }
  ];
  
  // Create an array to track the serial numbers already added
  var serialNumbers = [];
  
  // Generate data array
  var data = [];
  studentNames.forEach((nameData, index) => {
    var student = {
      serialNumber: index + 1,
      name: nameData.name,
      fatherName: nameData.fatherName,
      class: 10, // Assuming all students are in class 10
      section: "A" // Assuming all students are in section A
    };
    data.push(student);
  });
  
  // Display data in the table
  var tbody = document.getElementById("student-table-body");
  data.forEach(student => {
    var tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${student.serialNumber}</td>
      <td>${student.name}</td>
      <td>${student.fatherName}</td>
      <td>${student.class}</td>
      <td>${student.section}</td>
    `;
    tbody.appendChild(tr);
  });
  
  function addmore() {
    var form = document.getElementById("student-form");
    form.style.display = "block";
  }
  
  document.getElementById("student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(event.target);
    var studentData = {};
  
    formData.forEach(function(value, key) {
      studentData[key] = value;
    });
  
    // Check if the name already exists in the form
    var existingNames = data.map(student => student.name);
    if (existingNames.includes(studentData.name)) {
      alert("Name already exists. Please enter a different name.");
      return;
    }
    
    // Add serial number
    studentData.serialNumber = data.length + 1;
    
    // Add class and section
    studentData.class = data[0].class;
    studentData.section = data[0].section;
  
    // Push the new student data to the data array
    data.push(studentData);
   console.log(studentData) 
    // Display the new student data in the table
    displayStudentData(studentData);
  
    // Reset the form after submission
    event.target.reset();
  });
  
  function displayStudentData(studentData) {
    var tableBody = document.getElementById("student-table-body");
    var newRow = tableBody.insertRow();
    
    Object.keys(studentData).forEach(function(key, index) {
      var cell = newRow.insertCell(index);
      cell.textContent = studentData[key];
    });
  }