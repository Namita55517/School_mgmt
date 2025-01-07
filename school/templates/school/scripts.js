// Get modal and buttons
const modal = document.getElementById("addStudentModal");
const showFormBtn = document.getElementById("show-form-btn");
const closeBtn = document.getElementsByClassName("close")[0];
const addStudentBtn = document.getElementById("add-student-btn");
const updateStudentBtn = document.getElementById("update-student-btn");
const modalTitle = document.getElementById("modal-title");

let editingRow = null; // To keep track of the row being edited

// Show the modal when "Add New Student" button is clicked
showFormBtn.addEventListener('click', function () {
    modal.style.display = "block";
    modalTitle.textContent = "Add Student"; // Set modal title to "Add Student"
    addStudentBtn.style.display = "block"; // Show Add button
    updateStudentBtn.style.display = "none"; // Hide Update button
});

// Close the modal when the user clicks the close button
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Add a new student to the table
addStudentBtn.addEventListener('click', function () {
    // Get form input values
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const rollNo = document.getElementById('roll_no').value;
    const className = document.getElementById('class_name').value;
    const dob = document.getElementById('date_of_birth').value;

    // Validate inputs
    if (firstName && lastName && rollNo && className && dob) {
        const table = document.getElementById('students-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>${className}</td>
            <td>${dob}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="action-btn delete-btn">Delete</button>
            </td>
        `;
        document.getElementById('add-student-form').reset();
        modal.style.display = "none";
        alert("Student added successfully!");
    } else {
        alert("Please fill in all fields!");
    }
});

// Handle edit button click
document.getElementById('students-table').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('edit-btn')) {
        const row = event.target.closest('tr');
        const cells = row.getElementsByTagName('td');

        // Fill the modal form with current values
        document.getElementById('first_name').value = cells[0].textContent;
        document.getElementById('last_name').value = cells[1].textContent;
        document.getElementById('roll_no').value = cells[2].textContent;
        document.getElementById('class_name').value = cells[3].textContent;
        document.getElementById('date_of_birth').value = cells[4].textContent;

        // Show the modal with the Update button
        modal.style.display = "block";
        modalTitle.textContent = "Edit Student"; // Change modal title to "Edit Student"
        addStudentBtn.style.display = "none"; // Hide Add button
        updateStudentBtn.style.display = "block"; // Show Update button

        // Set the row to be edited
        editingRow = row;
    }
});

// Handle update button click
updateStudentBtn.addEventListener('click', function () {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const rollNo = document.getElementById('roll_no').value;
    const className = document.getElementById('class_name').value;
    const dob = document.getElementById('date_of_birth').value;

    if (firstName && lastName && rollNo && className && dob) {
        // Update the row with new values
        editingRow.cells[0].textContent = firstName;
        editingRow.cells[1].textContent = lastName;
        editingRow.cells[2].textContent = rollNo;
        editingRow.cells[3].textContent = className;
        editingRow.cells[4].textContent = dob;

        // Close the modal
        modal.style.display = "none";
        alert("Student updated successfully!");
    } else {
        alert("Please fill in all fields!");
    }
});

// Handle delete button click with confirmation
document.getElementById('students-table').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('delete-btn')) {
        const isConfirmed = confirm("Are you sure you want to delete this student?");
        if (isConfirmed) {
            const row = event.target.closest('tr');
            row.remove();
            alert("Student deleted successfully!");
        }
    }
});
