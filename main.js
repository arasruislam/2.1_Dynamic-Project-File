// Step 1 : add click event listener on submit button.
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step 2 : get the email address inside the email input filed
  // Always remember to use .value to get input field text.
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // Step 3 : get the password inside the email input filed
  // Always remember to use .value to get input field text.
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // Step 4: Verify email and password
  if (email === "arasru@gmail.com" && password === "mmkk0099") {
    window.location.href = "bank.html";
  } else {
    alert("Please provide a valid information");
  }
});
