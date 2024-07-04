
<%@ page import="com.mitesh.model.*" %>


<%@ page import="java.util.*" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
    <title>Cart</title>
    <style>
        .dropdown:hover .dropdown-menu {
            display: block;
        }
    </style>
</head>

<body class="bg-light">
    <nav class="navbar navbar-expand-lg text-light sticky-top navbar-light p-3 shadow-sm"
        style="background-color: #063547;">
        <div class="container-fluid text-white">
            <a class="navbar-brand text-white" href="#"><i class="fa-solid fa-shop me-2"></i> <strong><i
                        class="fas fa-cart-shopping me-1"></i>
                    The Weekend
                    Ride</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase active text-white" aria-current="page"
                            href="#">Offers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase text-white" href="#products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase text-white" href="#">My Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase text-white" href="#">Home</a>
                    </li>
                </ul>
                
                <% Customer customer = (Customer )request.getSession().getAttribute("customer"); %>
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item dropdown">
                        <a class="nav-link mx-2 text-uppercase text-white dropdown-toggle" href="#" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i> Profile
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-person-circle "></i>
                                    <%=customer.getCustomerEmail() %>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-bell-fill"></i>
                                   <%=customer.getCustomerName() %>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item" href="logout">
                                    <i class="bi bi-box-arrow-right"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row mt-5">
            <!-- Cart Section -->
            <div class="col-lg-8 order-lg-1 order-2 border bg-white mb-3 mb-lg-0">
                <div class="container-fluid">
                    <section class="p-2 pt-4">
                        <div class="container">
                            <h2 class=" mb-4">
                                <b>Order Process</b>
                            </h2>
                            <div class="accordion" id="accordionExample">
                            <form action="/ProjectH/addrequestdetails" method="post" >
                            
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            <b>Add Email Address, Pickup Date, Return Date & Address</b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
											<div class="input-group mt-3">
                                                   <input class="form-control rounded-pill py-2" type="email" name="email" value="<%=customer.getCustomerEmail() %>" aria-label="Disabled input example" disabled="" readonly="">
                                                </div>
                                                 <div class="input-group mt-3">
                                                    <input type="text" name="name"
                                                        class="form-control rounded-pill py-2"
                                                        value="<%=customer.getCustomerName() %>" aria-label="Disabled input example" disabled="" readonly=""/>
                                                </div>
                                                
                                                <div class="input-group mt-3">
                                                    <input type="text" name="carId"
                                                        class="form-control rounded-pill py-2"
                                                        value=<%=request.getAttribute("id") %>
                                                        
                                                          />
                                               </div>
                                                
                                                
                                                 <div class="mb-3 mt-4">
								                    <label for="exampleFormControlInput2" class="form-label"><b>Select Vehicle Type</b></label>
								
								                    <select name="type" class="form-select" aria-label="Default select example" id="exampleFormControlInput2"
								                        style="border-radius: none;">
								                        <option selected>Select Your type</option>
								                        <option value="car">Car</option>
								                        <option value="Motorcycle">Motorcycle</option>
								                        
								                    </select>
								                </div>
                                                
                                                <div class="row mt-3 p-2">
                                                    <div class="mb-3 col">
                                                        <label for="pickUpDate" class="form-label"><b>Pickup Date</b></label>
                                                        <input type="date" class="form-control" id="pickUpDate"
                                                            name="pickupdate">
                                                    </div>

                                                    <div class="mb-3 col">
                                                        <label for="returnDate" class="form-label"><b>Return Date</b></label>
                                                        <input type="date" class="form-control" id="returnDate"
                                                            name="returndate">
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            <b>Do you need a Driver?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="driverNeeded"
                                                        id="driverYes" value="yes" onclick="showDistanceInput()">
                                                    <label class="form-check-label" for="driverYes">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="driverNeeded"
                                                        id="driverNo" value="no" onclick="hideDistanceInput()">
                                                    <label class="form-check-label" for="driverNo">
                                                        No
                                                    </label>
                                                </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item" id="distanceInputSection" style="display: none;">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            <b>Enter Distance</b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            
                                                <div class="input-group mt-3">
                                                    <input type="number" name="distance"
                                                        class="form-control rounded-pill py-2"
                                                        placeholder=" Enter Distance" aria-label="distance"
                                                        style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                                </div>
                                                <div class="text-end">
                                                    <button class="btn btn-success btn-lg mt-3" onclick="nextAccordion()">Next</button>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            <b>Order Confirmation</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            
                                            <button type="submit" class="btn btn-primary btn-lg mt-3 px-3">Request Vehicle</button>

                                        </div>
                                    </div>
                                </div>
                                                                        </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>

    <script>
    
   /* document.addEventListener("DOMContentLoaded", function() {
        // Split the URL into different parts using the "/" delimiter
        const str = window.location.href;
        const regex = /\d+$/;
        const match = str.match(regex);
        const lastNumericData = match ? match[0] : null;
        console.log(lastNumericData);
        var vehicleId = lastNumericData;

        // Set the vehicleId value for the input field
        document.querySelector('input[name="carId"]').value = vehicleId;
    });
*/


    
        function showDistanceInput() {
            document.getElementById("distanceInputSection").style.display = "block";
        }

        function hideDistanceInput() {
            document.getElementById("distanceInputSection").style.display = "none";
        }

        function nextAccordion() {
            var accordionItems = document.querySelectorAll('.accordion-item');
            for (var i = 0; i < accordionItems.length; i++) {
                if (accordionItems[i].classList.contains('show')) {
                    if (i < accordionItems.length - 1) {
                        accordionItems[i].classList.remove('show');
                        accordionItems[i + 1].classList.add('show');
                        break;
                    }
                }
            }
        }
    </script>
</body>

</html>
