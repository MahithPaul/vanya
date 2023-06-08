document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var termsAgreement = document.getElementById("termsAgreement").checked;

  var errorMessages = [];
  
  // Validate email
  if (validateEmail(email)) {
    errorMessages.push("<li>Please enter a valid email address.</li>");
  }

  // Validate password
  if (!validatePassword(password)) {
    errorMessages.push("<li>Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.</li>");
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    errorMessages.push("<li>Passwords do not match.</li>");
  }

  // Validate phone number length
  if (phoneNumber.length !== 10) {
    errorMessages.push("<li>Phone number must be 10 digits long.</li>");
  }

  // Validate terms agreement
  if (!termsAgreement) {
    errorMessages.push("<li>Please agree to the terms and conditions.</li>");
  }

  if (errorMessages.length === 0) {
    // Clear error messages
    document.getElementById("errorMessages").innerHTML = "";
    document.querySelector("#errorMessages").style.display="none";

    // Display success message
    document.getElementById("successMessage").innerHTML = "Sign up successful! Check your email to verify your email address.";
    document.querySelector("#successMessage").style.display="block";
    
    // You can perform additional actions here, such as submitting the form to a server
  } else {
    // Display error messages
    document.getElementById("successMessage").innerHTML = "";
    document.querySelector("#errorMessages").style.display="block";
    document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");
  }
});

function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])*$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  // Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}