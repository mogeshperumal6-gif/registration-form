// Get all the input fields
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Get all the error messages
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

// Get the submit button and the form
var submitBtn = document.getElementById("submitBtn");
var regForm = document.getElementById("regForm");
var successMsg = document.getElementById("successMsg");

// These will keep track of whether each field is valid or not
var isNameValid = false;
var isEmailValid = false;
var isPasswordValid = false;

// Function to check the Name field
function checkName() {
  if (nameInput.value.trim() === "") {
    nameError.classList.remove("hidden"); // show error
    isNameValid = false;
  } else {
    nameError.classList.add("hidden"); // hide error
    isNameValid = true;
  }
  checkFormValid();
}

// Function to check the Email field
function checkEmail() {
  // simple pattern to check for something like text@text.text
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value.trim())) {
    emailError.classList.add("hidden");
    isEmailValid = true;
  } else {
    emailError.classList.remove("hidden");
    isEmailValid = false;
  }
  checkFormValid();
}

// Function to check the Password field
function checkPassword() {
  if (passwordInput.value.length < 6) {
    passwordError.classList.remove("hidden");
    isPasswordValid = false;
  } else {
    passwordError.classList.add("hidden");
    isPasswordValid = true;
  }
  checkFormValid();
}

// Function to enable/disable the submit button
function checkFormValid() {
  if (isNameValid && isEmailValid && isPasswordValid) {
    submitBtn.disabled = false;
    submitBtn.classList.add("active"); // turns blue (see styles.css)
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active"); // stays grey (see styles.css)
  }
}

// Run validation in real-time as the user types
nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);

// When the form is submitted
regForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  // just to be safe, check everything again before showing success
  checkName();
  checkEmail();
  checkPassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    successMsg.classList.remove("hidden");
  }
});