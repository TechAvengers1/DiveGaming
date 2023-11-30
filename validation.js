function userIDValidation() {
  const userID = document.getElementById('userid').value;
  const userPattern = /^[^0-9]/;
  const userIDPattern = /^\S+[A-Za-z_-][A-Za-z0-9_-]+$/;
  const error = document.getElementById('userID-error');

  if (userID === '') {
    error.innerHTML = 'Please enter your Username';
    return false;
  } else if (userID !== '') {
    if (!userID.match(userPattern)) {
      error.innerHTML = 'First character should not be a number';
      return false;
    } else if (!userID.match(userIDPattern)) {
      error.innerHTML = 'Username must not include spaces or special characters';
      return false;
    } else if (userID.length < 5) {
      error.innerHTML = 'Username must be at least 5 characters';
      return false;
    } else if (userID.length > 30) {
      error.innerHTML = 'Username must not exceed 30 characters';
      return false;
    } else {
      error.innerHTML = '';
      return true;
    }
  }
}

function pwdRequirement() {
  const pwd = document.getElementById('pwd').value;
  const userID = document.getElementById('userid').value;
  const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  const error = document.getElementById('pwd-error');

  if (pwd === '') {
    error.innerHTML = 'Please enter your password';
    return false;
  } else if (pwd !== '') {
    if (!pwd.match(pwdPattern)) {
      error.innerHTML = 'Password must contain at least 1 uppercase, 1 lowercase, and 1 digit.';
      return false;
    } else if (pwd === userID) {
      error.innerHTML = 'Password must not match the username';
      return false;
    } else if (pwd.length < 8) {
      error.innerHTML = 'Password must be at least 8 characters';
      return false;
    } else if (pwd.length > 30) {
      error.innerHTML = 'Password must not exceed 30 characters';
      return false;
    } else {
      error.innerHTML = '';
      return true;
    }
  }
}

function validateForm() {
  const username = document.getElementById("userid").value;
  const password = document.getElementById("pwd").value;

  // Your validation logic here
  if (username.length < 4 || password.length < 6) {
    alert("Username must be at least 4 characters long, and the password must be at least 6 characters long.");
    return false;
  }

  // Additional complexity checks can be added here
  // For example, you can check for special characters or other requirements

  // If validation is successful, redirect to index.html with the username as a URL parameter
  window.location.href = "index.html?username=" + encodeURIComponent(username);

  // Prevent the form from actually submitting
  return false;

}

function emailValidation(){
  uemail = document.getElementById('email').value;
  var emailPattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(uemail== ""){
      document.getElementById("email-error").innerHTML= "Email address must not be empty";
      return false;
  }else if(!uemail.match(emailPattern)){
      document.getElementById("email-error").innerHTML= "Please enter a valid email address";
      return false;
  }else{
      document.getElementById("email-error").innerHTML="";
      return true;
  }
}

function pwdCheckValidation(){
pwdCheck= document.getElementById('pwdCheck').value;
pwd= document.getElementById('pwd').value;
var error= document.getElementById('pwdCheck-error');

if(pwdCheck ==''){
    error.innerHTML="Please re-enter your password";
    return false;
}else if(pwd!=''){
    if(pwdCheck !=pwd){
        error.innerHTML="Passwrod does not match";
        return false;
}else{
    error.innerHTML="";
    return true;
}
}
}
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.getElementsByClassName("dropdown");

  for (var i = 0; i < dropdowns.length; i++) {
    var dropdownContent = dropdowns[i].querySelector(".dropdown-content");

    dropdowns[i].addEventListener("mouseover", function () {
      this.classList.add("open");
    });

    dropdowns[i].addEventListener("mouseout", function (event) {
      var relatedTarget = event.relatedTarget || event.toElement;

      if (!this.contains(relatedTarget)) {
        setTimeout(() => {
          this.classList.remove("open");
        }, 5000); // Adjust the delay (in milliseconds) as needed
      }
    });

    dropdownContent.addEventListener("mouseover", function () {
      clearTimeout(this.timeoutId);
    });

    dropdownContent.addEventListener("mouseout", function () {
      var dropdown = this.closest(".dropdown");
      this.timeoutId = setTimeout(() => {
        dropdown.classList.remove("open");
      }, 5000); // Adjust the delay (in milliseconds) as needed
    });

    dropdowns[i].addEventListener("click", function () {
      this.classList.toggle("open");
    });
  }
});