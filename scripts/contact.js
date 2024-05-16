document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements
  var emailInput = document.getElementById("email");
  var noticeElement = document.getElementById("emailNotice");

  // Function to be called when the email input gains focus
  function onFocus() {
    noticeElement.innerHTML = "Please enter a valid email address";
  }

  // Function to be called when the email input loses focus
  function onBlur() {
    var inputValue = emailInput.value.trim();

    if (inputValue === "") {
      // If the value is empty
      emailInput.style.borderColor = "red";
      noticeElement.innerHTML = "You did not enter an email address. Please try again.";
    } else if (!isValidEmail(inputValue)) {
      // If the value is not a valid email address
      emailInput.style.borderColor = "red";
      noticeElement.innerHTML = "Please enter a valid email address!";
    } else {
      // If the value is a valid email address
      emailInput.style.borderColor = "#ccc";
      noticeElement.innerHTML = "";
    }
  }

  // Add event listeners to the email input
  emailInput.addEventListener("focus", onFocus);
  emailInput.addEventListener("blur", onBlur);

  // Function to check if the given string is a valid email address
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements
  var phoneInput = document.getElementById("phone");
  var noticeElement = document.getElementById("phoneNotice");

  // Function to be called when the phone input gains focus
  function onFocus() {
    noticeElement.innerHTML = "Please enter your phone number without dashes";
  }

  // Function to be called when the phone input loses focus
  function onBlur() {
    var inputValue = phoneInput.value.trim();

    if (inputValue === "") {
      // If the value is empty
      phoneInput.style.borderColor = "red";
      noticeElement.innerHTML = "You did not enter a phone number. Please try again.";
    } else if (inputValue.includes("-")) {
      // If the value contains dashes
        phoneInput.style.borderColor = "red";
        noticeElement.innerHTML = "Please do not use dashes when entering your phone number!";
    } else {
      // If the value is not empty and does not contain dashes
      phoneInput.style.borderColor = "#ccc";
      noticeElement.innerHTML = "";
      validPhone = true;
    }
  }

  // Add event listeners to the phone input
  phoneInput.addEventListener("focus", onFocus);
  phoneInput.addEventListener("blur", onBlur);
});