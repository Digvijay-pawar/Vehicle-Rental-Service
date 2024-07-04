document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("customer");
    const ownerForm = document.getElementById("owner");
    const customerButton = document.getElementById("customerBtn");
    const ownerButton = document.getElementById("ownerBtn");

    customerButton.addEventListener("click", function () {
        customerForm.style.display = "block";
        ownerForm.style.display = "none";
        // Change background and text color of customer button
        customerButton.classList.add("bg-dark");
        customerButton.classList.add("text-light");
        ownerButton.classList.remove("bg-dark");
        ownerButton.classList.remove("text-light");
    });

    ownerButton.addEventListener("click", function () {
        ownerForm.style.display = "block";
        customerForm.style.display = "none";


        // Change background and text color of owner button
        ownerButton.classList.add("bg-dark");
        ownerButton.classList.add("text-light");
        customerButton.classList.remove("bg-dark");
        customerButton.classList.remove("text-light");
    });

    
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput");
    const togglePasswordButton = document.getElementById("togglePassword");

    togglePasswordButton.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        // Change the icon based on password visibility
        togglePasswordButton.innerHTML = type === "password" ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput1");
    const togglePasswordButton = document.getElementById("togglePassword1");

    togglePasswordButton.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        // Change the icon based on password visibility
        togglePasswordButton.innerHTML = type === "password" ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput2");
    const togglePasswordButton = document.getElementById("togglePassword2");

    togglePasswordButton.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        // Change the icon based on password visibility
        togglePasswordButton.innerHTML = type === "password" ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput3");
    const togglePasswordButton = document.getElementById("togglePassword3");

    togglePasswordButton.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        // Change the icon based on password visibility
        togglePasswordButton.innerHTML = type === "password" ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const createAccountBtn = document.getElementsByClassName("createAccountBtn");
    const formSection = document.getElementById("userForms");
    const emailVerification = document.getElementById("emailVerification");

    createAccountBtn.addEventListener("click", function() {
        formSection.style.display = "none";
        emailVerification.style.display = "block";
    });
});
document.getElementById('submitOtp').addEventListener('click', function () {
    // Add your logic to send OTP here
    // alert('OTP Sent!');
    if (!this.disabled) {
      this.disabled = true;
      this.innerHTML = "OTP Sent!";
      // Countdown timer for 1 minute
      var countdown = 60; // 60 seconds
      var countdownInterval = setInterval(function () {
        countdown--;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          document.getElementById('submitOtp').disabled = false;
          document.getElementById('submitOtp').innerHTML = "Resend OTP";
        } else {
          document.getElementById('submitOtp').innerHTML = "Resend OTP (" + countdown + "s)";
        }
      }, 1000); // Update every second
    }
  });
