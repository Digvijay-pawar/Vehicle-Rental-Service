<%@ page import="com.mitesh.model.*" %>
<%@ page import="java.util.*" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer dashBoard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        a {
            font-size: 14px;
            font-weight: 700
        }

        .superNav {
            font-size: 13px;
        }

        .form-control {
            outline: none !important;
            box-shadow: none !important;
        }

        @media screen and (max-width:540px) {
            .centerOnMobile {
                text-align: center
            }
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
                        <a class="nav-link mx-2 text-uppercase text-white" href="cartCustomer">My Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase text-white" href="#">About</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase text-white" href="#">
                            <i class="bi bi-cart"></i> Cart</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link mx-2 text-uppercase text-white" href="logout">
                             logout</a>
                    </li>
                    
                    <li class="nav-item">
                    <% Customer customer = (Customer)request.getSession().getAttribute("customer"); %>
                        <a class="nav-link mx-2 text-uppercase text-white" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Name: <%=customer.getCustomerName() %>  Email: <%=customer.getCustomerEmail() %>">
                            <i class="bi bi-person-circle"></i> Account
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- heading section -->
    <div id="carouselExampleDark ">
        <div class=" container">
            <div class=" align-items-center justify-content-between active row ">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-5 justify-content-between">
                            <img src="./resources/images/8453874-removebg-preview.png " class="img-fluid w-60 h-75" alt="">
                        </div>
                        <div class="col-md-7 pt-5 align-items-center justify-content-center">
                            <h3><b>Discover Your Ride: Explore a Wide Range of Vehicles for Every Journey</b></h3>
                            <p class="lead text-sm">
                                Embark on a journey of exploration as you dive into our extensive selection of vehicles,
                                meticulously curated to cater to every traveler's needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4 text-white p-3 px-5" style="background-color: rgb(55, 2, 189);">
                <h3><b>Find & Book <br>a Great Deal Today</b></h3>
				<form action="filtervehicle" method="post">
                <div class="mb-3 mt-4">
                    <label for="exampleFormControlInput1" class="form-label"><b>Location</b></label>

                    <input type="text" class="form-control" id="returnDate" name="city" placeholder="Enter city name">             
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
                <div class="row">

                    <div class="mb-3 col">
                        <label for="pickUpDate" class="form-label">Pickup Date</label>
                        <input type="date" class="form-control" id="pickUpDate" name="pickupdate">
                    </div>

                    <div class="mb-3 col">
                        <label for="returnDate" class="form-label">Return Date</label>
                        <input type="date" class="form-control" id="returnDate" name="returndate">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg mt-3 px-3">Filter</button>
                </form>
            </div>
            
           
            <div class="col-8 bg-white px-5 pt-3" id="products">
                <div class="container">
                    <h3><b>Featured Vehicles</b></h3>
                    <hr>
                    
                     <%  
            List<Vehicle> allVehicles = (List<Vehicle>)request.getAttribute("customerAllVehicles");
             for(Vehicle v: allVehicles)
             {
            	 if(v.getVehicleBookedStatus().equals("Not Allocated")){
            		 
            	
            %>
                    <div class="row border py-3">
                       <div class="text-center col-3">
              <%
              if(v.getVehicleImage() != null)
              {
            	  String based64Image = new String(Base64.getEncoder().encode(v.getVehicleImage()));
              %>
                 <img src="data:image/jpeg;base64, <%=based64Image %>" alt="Vehicle Image" class="img-fluid w-75 h-100">
                  <%}
              else{
              %>
              
              No Image Available
              <%
              }
              
              %>
              </div>
                        
                        <div class="col-6 p-3 border-end border-start justify-content-between align-items-center">
                            <h5><b><%=v.getVehiclemodelName() %></b></h5>
                            <p class="lead">
                               <%=v.getVehicleDescription() %> </p>
                            <a href="" class="btn btn-light btn-sm border">> Read more</a>
                        </div>
                        <div class="col-3 text-center">
                            <span style="font-size: xx-large;"><b>Rs. <%=v.getVehicleprice() %></span>
                                <p class="text-muted">per hour</p>
                                <%request.getSession().setAttribute("id",v.getVehicleId()); %>
                            <a href="addRequest/<%=v.getVehicleId() %>" class="btn btn-dark btn-lg ">Book Now</a>
                            
                            <a href="" class="btn btn-warning btn-lg mt-3">
                                 <i class="bi bi-cart"></i></a>
                        </div>
                    </div>
                    <%
                    
                    }
                    }%>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
        <script>
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        </script>
</body>

</html>