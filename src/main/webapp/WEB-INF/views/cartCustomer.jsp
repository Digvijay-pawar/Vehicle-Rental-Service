
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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-xrQBRMluoS3WLIbXdLU48ZOdQZa2PLkEFD2RaC3g0JsS4kO7I7cjTrCkvv1N6aJC2P2OtVrEZZP+8r+6pfGTXw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Cart</title>
    <style>
        .dropdown:hover .dropdown-menu {
            display: block;
        }
    </style>
</head>

<body class="bg-light">
    <nav class="navbar navbar-expand-lg text-light  sticky-top navbar-light p-3 shadow-sm"
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


            <div class=" collapse navbar-collapse" id="navbarNavDropdown">

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
                
                <%Customer customer = (Customer)request.getSession().getAttribute("customer"); %>
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item dropdown">
                        <a class="nav-link mx-2 text-uppercase text-white dropdown-toggle" href="#" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i> 
                            <%=customer.getCustomerEmail() %>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-person-circle "></i>
                                    My Profile
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-bell-fill"></i>
                                    Notification
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
    
    <% List<RequestVehicle> allreq = (List<RequestVehicle>)request.getSession().getAttribute("allreq"); %>
    <div class="container">
        <div class="row mt-5">
            <!-- Cart Section -->
            
            
            <div class="col-lg-8 order-lg-1 order-2 border bg-white mb-3 mb-lg-0">
                <div class="container-fluid">
                
                <%
            for(RequestVehicle r : allreq)
            {
            	if(r.getCustEmail().equals(customer.getCustomerEmail()))
            	{
            	
            %>
                    <div class="row py-4">
                        <div class="col-3">
                            <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-800/10327/1687348176706/front-left-side-47.jpg?impolicy=resize&imwidth=220"
                                class="img-fluid h-100 w-100" alt="">
                        </div>
                        <div class="col-6">
                            <h5><b><%=r.getCustName() %></b></h5>
                            <p class="lead">
                                <%=r.getCarId() %>
                            </p>
                            <a href="" class="btn btn-light btn-sm border">Read more</a>
                        </div>
                        <div class="col-3 mt-3">
                            <span style="font-size: xx-large;"><b>Rs. 500</b></span>
                            <p class="text-muted">per hour</p>
                            <a class="btn btn-success btn-md mt-3" target="_blank" href="https://payments-test.cashfree.com/forms/rent-payment">Do Payment</a>
                            
                        </div>
                    </div>
                    <% 
                   	
            	}
            }%> 
                    <hr>
                
                </div>
            </div>
            <!-- Place Order Section -->
            <div class="col-lg-4 order-lg-2 order-1 border p-3 bg-white">
                <h5><b>Order Summary</b></h5>
                <hr>
                <ul>
                    <li class="py-2 border-bottom">Rent Price: <span class="float-end">Rs. 500</span></li>
                    <li class="py-2 border-bottom">Driver Charge: <span class="float-end">Rs. 0</span></li>
                    <li class="py-2">Discount: <span class="float-end">Rs. 0</span></li>
                </ul>
                <hr>
                <h4 class=""><b>Total: <span class="float-end">Rs. 500</span></b></h4>
                <button class="btn btn-warning btn-lg w-100 mt-3">Place Order</button>
            </div>
        </div>
    </div>
    
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
</body>

</html>