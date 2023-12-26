var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");

var users = [];

if (JSON.parse(localStorage.getItem("users")) != null) {
  users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
}

function signIn() {
  var user = {
    email: userEmail.value,
    pass: userPassword.value,
  };

  console.log(user);
  var userName = users.find(
    (user) => user.email === userEmail.value && user.pass === userPassword.value
  );

  // users.find((user) => user.email === emailInput.value && user.password=== passwordInput.value);

  if (userName != undefined) {
    console.log(userName);
    sessionStorage.setItem("userName", userName.name);
    console.log(sessionStorage.getItem("userName", userName.name));
    window.location = "./home.html";
  } else {
    document.getElementById("errorMessage").classList.remove("d-none");
  }
}
