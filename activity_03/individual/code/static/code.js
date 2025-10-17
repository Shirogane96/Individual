function form_validation() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value.trim();
  if (name === "" || email === "" || course === "") {
    alert("Please fill in all the fields.");
    return false;
  }
  display_notification("Form submitted successfully!");
  return true;
}
function display_notification(message) {
  alert(message);
}
function load_student_list() {
  fetch("api/student_list.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("studentList");
      if (data.students && data.students.length > 0) {
        container.innerHTML = "<ul>" +
          data.students.map(s => `<li>${s.name} - ${s.course} (${s.email})</li>`).join("") +
          "</ul>";
      } else {
        container.textContent = "No students registered yet.";
      }
    })
    .catch(err => {
      document.getElementById("studentList").textContent = "Error loading student data.";
      console.error(err);
    });
}