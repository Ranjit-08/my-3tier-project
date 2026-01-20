const API_URL = "http://<BACKEND_EC2_PRIVATE_IP>:3000";

function loadUsers() {
  fetch(`${API_URL}/users`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("users").innerHTML =
        data.map(u => `<li>${u.name} — ${u.email}</li>`).join("");
    });
}

function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please enter both name and email");
    return;
  }

  fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  }).then(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    loadUsers();
  });
}

loadUsers();
