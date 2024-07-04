<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-xrQBRMluoS3WLIbXdLU48ZOdQZa2PLkEFD2RaC3g0JsS4kO7I7cjTrCkvv1N6aJC2P2OtVrEZZP+8r+6pfGTXw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
</head>

<body>
    <section class="m-5 p-5 bg- text-dark" id="courses">
        <div class="container m-2 bg-light p-5">
            <div class="row m-4">
                <div class="col-md ">
                    <img src="./resources/images/8453874-removebg-preview.png" class="img-fluid w-75 mt-5" alt="">
                </div>
                <div class="col-md p-2">
                    <div class="container">
                        <div class="row border rounded-pill text-center bg-white ">
                            <div class="col-md py-2 rounded-pill text-light bg-dark border" id="customerBtn">
                                <h5><b>Customer</b></h5>
                            </div>
                            <div class="col-md py-2 rounded-pill border" id="ownerBtn">
                                <h5><b>Owner</b></h5>
                            </div>
                            <div class="col-md py-2 rounded-pill border" id="companyBtn">
                                <h5><b>Company</b></h5>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md">
                               
                                <form action="customerlogin" id="customer" method="post"
                                    class="justify-content-between align-items-center p-3 px-5 text-center">
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2"
                                            placeholder="&#9993; Customer Email" aria-label="email"
                                            name ="customerEmail"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="password" class="form-control rounded-pill py-2"
                                            placeholder="&#9993; Enter Password" aria-label="email"
                                            name ="customerPassword"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                            
                                    </div>
                                    <div class="d-grid gap-2 mt-3">
                                        <button class="btn btn-primary rounded-pill py-2 w-75" type="submit"
                                            style="font-size: large; margin-left: 12%;"><b>Login</b></button>
                                    </div>

                                    <div class="mt-3">
                                        <span class="" style="color: rgb(117, 7, 153);">Forgot Password?</span>
                                    </div>
                                    <div class="d-grid gap-2 mt-3">
                                        <span><b>Don't have an account?</b></span>
                                        <a class="btn text-light rounded-pill py-2 w-50 mt-2" type="button" href="createAccount"
                                            style="font-size: large; background-color: blueviolet; margin-left: 27%;"><b>Create
                                                Account</b></a>
                                    </div>
                                </form>
                                
                                
                                <form action="sellerlogin" id="owner" method="post"
                                    class="justify-content-between align-items-center p-3 px-5 text-center"
                                    style="display: none;">
                                    <div class="input-group mt-3">
                                        <input type="email" class="form-control rounded-pill py-2"
                                            placeholder="&#9993; Owner Email" aria-label="email"
                                            name="sellerEmail"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="password" class="form-control rounded-pill py-2" id="passwordInput"
                                            placeholder="&#9993; Enter Password" aria-label="email"
                                            name="sellerPassword"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                        <button class="btn btn-outline-secondary" type="button" id="togglePassword">
                                            <i class="bi bi-eye-slash"></i>
                                        </button>
                                    </div>

                                    <div class="d-grid gap-2 mt-3">
                                        <button class="btn btn-primary rounded-pill py-2 w-75" type="submit"
                                            style="font-size: large; margin-left: 12%;"><b>Login</b></button>
                                    </div>

                                    <div class="mt-3">
                                        <span class="" style="color: rgb(117, 7, 153);">Forgot Password?</span>
                                    </div>
                                    <div class="d-grid gap-2 mt-3">
                                        <span><b>Don't have an account?</b></span>
                                        <a src="Create_Account.html" class="btn text-light rounded-pill py-2 w-50 mt-2" type="button"
                                            href="createAccount" style="font-size: large; background-color: blueviolet; margin-left: 27%;"><b>Create
                                                Account</b></a>
                                    </div>
                                </form>
                                
                                
                                
                                
                                <form action="companylogin" id="company" method="post"
                                    class="justify-content-between align-items-center p-3 px-5 text-center"
                                    style="display: none;">
                                    <div class="input-group mt-3">
                                        <input type="text" class="form-control rounded-pill py-2"
                                            placeholder="&#9993; Company Email" aria-label="email"
                                            name="companyEmail"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="password" class="form-control rounded-pill py-2"
                                            placeholder="&#9993; Enter Password" aria-label="email"
                                            name="companyPassword"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>
                                    <div class="d-grid gap-2 mt-3">
                                        <button class="btn btn-primary rounded-pill py-2 w-75" type="submit"
                                            style="font-size: large; margin-left: 12%;"><b>Login</b></button>
                                    </div>

                                    <div class="mt-3">
                                        <span class="" style="color: rgb(117, 7, 153);">Forgot Password?</span>
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
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const customerForm = document.getElementById("customer");
            const ownerForm = document.getElementById("owner");
            const companyForm = document.getElementById("company");
            const customerButton = document.getElementById("customerBtn");
            const ownerButton = document.getElementById("ownerBtn");
            const companyButton = document.getElementById("companyBtn");

            customerButton.addEventListener("click", function () {
                customerForm.style.display = "block";
                ownerForm.style.display = "none";
                companyForm.style.display = "none";
                // Change background and text color of customer button
                customerButton.classList.add("bg-dark");
                customerButton.classList.add("text-light");
                ownerButton.classList.remove("bg-dark");
                ownerButton.classList.remove("text-light");
                companyButton.classList.remove("bg-dark");
                companyButton.classList.remove("text-light");
            });

            ownerButton.addEventListener("click", function () {
                ownerForm.style.display = "block";
                customerForm.style.display = "none";
                companyForm.style.display = "none";


                // Change background and text color of owner button
                ownerButton.classList.add("bg-dark");
                ownerButton.classList.add("text-light");
                customerButton.classList.remove("bg-dark");
                customerButton.classList.remove("text-light");
                companyButton.classList.remove("bg-dark");
                companyButton.classList.remove("text-light");
            });

            companyButton.addEventListener("click", function () {
                companyForm.style.display = "block";
                ownerForm.style.display = "none";
                customerForm.style.display = "none";


                // Change background and text color of company button
                companyButton.classList.add("bg-dark");
                companyButton.classList.add("text-light");
                ownerButton.classList.remove("bg-dark");
                ownerButton.classList.remove("text-light");
                customerButton.classList.remove("bg-dark");
                customerButton.classList.remove("text-light");

            })
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

    </script>

</body>

</html>