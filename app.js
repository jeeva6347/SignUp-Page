var submit = document.getElementById("submit");
var username, email, pass;

function input() {
  username = document.getElementById("username").value.trim();
  email = document.getElementById("email").value.trim();
  pass = document.getElementById("password").value.trim();
  console.log(username);
  console.log(email);
  console.log(pass);
  if (username == 0) {
    alert("Please fill all the Fields...");
  } else if (email == 0) {
    alert("Please fill all the Fields...");
  } else if (pass == 0) {
    alert("Please fill all the Fields...");
  } else if (pass.value != 0) {
    alert("Sign Up Successfully...");
  }
}
