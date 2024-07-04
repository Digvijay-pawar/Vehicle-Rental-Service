<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
    <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-xrQBRMluoS3WLIbXdLU48ZOdQZa2PLkEFD2RaC3g0JsS4kO7I7cjTrCkvv1N6aJC2P2OtVrEZZP+8r+6pfGTXw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
   
</head>

<body>
    <section class="mx-md-5 px-md-5 bg-light text-dark py-4 my-4" id="userForms">
        <div class="container-fluid m-2">
            <div class="row">
                <div class="col-md-6 text-center">
                    <h1><b><span style="color: blueviolet;">The</span> <span class="text-primary">WeekEnd</span> <span class="text-warning">Ride</span></b></h1>
                    <img src="./resources/images/8453874-removebg-preview.png" class="img-fluid mt-5" alt="">
                </div>
                <div class="col-md-6 p-2">
                    <div class="container">
                        <div class="row border rounded-pill text-center bg-white">
                            <div class="col-md py-2 rounded-pill text-light bg-dark border" id="customerBtn">
                                <h5><b>Customer</b></h5>
                            </div>
                            <div class="col-md py-2 rounded-pill border" id="ownerBtn">
                                <h5><b>Owner</b></h5>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md">
                                <form action="CreateCustomerAccount" id="customer" method="post"
                                    class="justify-content-between align-items-center p-3 px-5 text-center"
                                    style="display: block;">
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2" name="customerName"
                                            placeholder="&#128100; Customer Name" aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2" name="customerEmail"
                                            placeholder="&#9993; Customer Email" aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2" name="customerAddress"
                                            placeholder="&#127968; Customer Address " aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="password" class="form-control rounded-start-pill py-2"
                                            name="customerPassword" id="passwordInput"
                                            placeholder="&#128272 Create Password" aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                        <button class="btn btn-outline-secondary rounded-end-pill" type="button"
                                            id="togglePassword">
                                            <i class="bi bi-eye-slash"></i>
                                        </button>
                                    </div>
                                    
                                    <div class="d-grid gap-2 mt-3">
                                        <button class="btn btn-primary rounded-pill py-2 w-75" type="submit"
                                            style="font-size: large; margin-left: 12%;" data-toggle="modal"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" class="createAccountBtn">
                                            <b>Create Account</b>
                                        </button>

                                    </div>

                                    <div class="d-grid gap-2 mt-3">
                                        <span><b>Already have an account?</b></span>
                                        <a class="btn text-light rounded-pill py-2 w-50 mt-2" type="button"
                                            style="font-size: large; background-color: blueviolet; margin-left: 27%;" href="login"
                                            data-toggle="modal" data-target="#forgotPasswordModal"><b>Login
                                            </b></a>
                                    </div>
                                </form>
                                <form action="CreateSellerAccount" id="owner" method="post"
                                    class="justify-content-between align-items-center p-3 px-5 text-center"
                                    style="display: none;">
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2" name="sellerName"
                                            placeholder="&#128100; Owner Name" aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2" name="sellerEmail"
                                            placeholder="&#9993; Owner Email" aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2" name="sellerAddress"
                                            placeholder="&#127968 Owner Address " aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="password" class="form-control rounded-start-pill py-2"
                                            name="sellerPassword" id="passwordInput2"
                                            placeholder="&#128272 Create Password" aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                        <button class="btn btn-outline-secondary rounded-end-pill" type="button"
                                            id="togglePassword2">
                                            <i class="bi bi-eye-slash"></i>
                                        </button>
                                    </div>
                                    


                                    <div class="d-grid gap-2 mt-3">
                                        <button class="btn btn-primary rounded-pill py-2 w-75" type="submit"
                                            style="font-size: large; margin-left: 12%;" data-toggle="modal"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" class="createAccountBtn">
                                            <b>Create Account</b>
                                        </button>

                                    </div>

                                    <div class="d-grid gap-2 mt-3">
                                        <span><b>Already have an account?</b></span>
                                        <a class="btn text-light rounded-pill py-2 w-50 mt-2" type="button" href="login"
                                            style="font-size: large; background-color: blueviolet; margin-left: 27%;"><b>Login
                                            </b></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <script >
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

    </script>

</body>

</html>

