const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation functions
function validateUsername() {
  const value = username.value.trim();
  if (value.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long";
    username.classList.add('invalid');
    username.classList.remove('valid');
    return false;
  } else {
    usernameError.textContent = "";
    username.classList.add('valid');
    username.classList.remove('invalid');
    return true;
  }
}

function validateEmail() {
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    emailError.textContent = "Please enter a valid email (e.g., someone@example.com)";
    email.classList.add('invalid');
    email.classList.remove('valid');
    return false;
  } else {
    emailError.textContent = "";
    email.classList.add('valid');
    email.classList.remove('invalid');
    return true;
  }
}

function validatePassword() {
  const value = password.value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  if (!regex.test(value)) {
    passwordError.textContent = "Password must be 8+ chars, include upper/lowercase & special char";
    password.classList.add('invalid');
    password.classList.remove('valid');
    return false;
  } else {
    passwordError.textContent = "";
    password.classList.add('valid');
    password.classList.remove('invalid');
    return true;
  }
}

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPassword.classList.add('invalid');
    confirmPassword.classList.remove('valid');
    return false;
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.add('valid');
    confirmPassword.classList.remove('invalid');
    return true;
  }
}

// Check if all fields are valid
function checkAllValid() {
  const allValid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();
  submitBtn.disabled = !allValid;
}

// Event listeners (real-time)
username.addEventListener('input', () => {
  validateUsername();
  checkAllValid();
});

email.addEventListener('input', () => {
  validateEmail();
  checkAllValid();
});

password.addEventListener('input', () => {
  validatePassword();
  checkAllValid();
});

confirmPassword.addEventListener('input', () => {
  validateConfirmPassword();
  checkAllValid();
});

// Prevent form submission for demo
document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("✅ Registration Successful!");
});
