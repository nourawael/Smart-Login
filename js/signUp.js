var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");

var users = [];

if (JSON.parse(localStorage.getItem("users")) != null) {
  users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
}

function createAccount() {
  if (validateName() && validateEamil() && validatePassword()) {
    console.log("hereeeeeeeeeee");
    var user = {
      name: userName.value,
      email: userEmail.value,
      pass: userPassword.value,
    };

    const repeated = users.some((user) => user.email === userEmail.value);
    console.log("repeated: " + repeated);
    if (!repeated) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      window.location = "./index.html";
    } else {
      document.getElementById("exists").classList.remove("d-none");
    }

    console.log(users);
  } else {
    console.log("ERROOOOOOOOOOOOOOR");
  }
}

function validateName() {
  var text = userName.value;
  var regex = /^[A-Z][a-z]{3,10}$/;
  if (regex.test(text)) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    document.getElementById("namePattern").classList.add("d-none");
    console.log("true");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    document.getElementById("namePattern").classList.remove("d-none");
    console.log("false");
    return false;
  }
}
function validateEamil() {
  var text = userEmail.value;
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regex.test(text)) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    document.getElementById("emailPattern").classList.add("d-none");
    console.log("true");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    document.getElementById("emailPattern").classList.remove("d-none");
    console.log("false");
    return false;
  }
}
function validatePassword() {
  var text = userPassword.value;
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (regex.test(text)) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    document.getElementById("passPattern").classList.add("d-none");
    console.log("true");
    return true;
  } else {
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
    document.getElementById("passPattern").classList.remove("d-none");
    console.log("false");
    return false;
  }
}
