const muslimNames = [
    { name: "Muhammad", fatherName: "Abdullah" },
    { name: "Ahmed", fatherName: "Ibrahim" },
    { name: "Ali", fatherName: "Hassan" },
    { name: "Fatima", fatherName: "Zainab" },
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

console.log(muslimNames);
const data = [];
muslimNames.forEach((nameData, index) => {
    const student = {
        serialNumber: index + 1,
        name: nameData.name,
        fatherName: nameData.fatherName,
        class: 10, // Assuming all students are in class 10
        section: "A" // Assuming all students are in section A
    };
    data.push(student);
});

// Display student data in the table
const tbody = document.getElementById("student-table-body");
data.forEach(student => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student.serialNumber}</td>
        <td>${student.name}</td>
        <td>${student.fatherName}</td>
        <td>${student.class}</td>
        <td>${student.section}</td>
    `;
    tbody.appendChild(tr);
});