<%@ page import="com.mitesh.model.*" %>
<%@ page import="java.util.*" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
  <!-- Basic -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- Mobile Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!-- Site Metas -->
  <link rel="icon" href="./resources/images/favicon.png" type="image/gif" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- Font Awesome CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>Vehicle Owner</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <!-- Font Awesome CSS -->
  <link href="./resources/css/font-awesome.min.css" rel="stylesheet" />

  <!-- Custom styles for this template -->
  <link href="./resources/css/style.css" rel="stylesheet" />
  <!-- Responsive style -->
  <link href="./resources/css/responsive.css" rel="stylesheet" />

  <style>
    /* Custom CSS for image styling */
    .image-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .image-container img {
      width: 250px; /* Set the desired width */
      height: 250px; /* Set the desired height */
      object-fit: cover; /* Maintain aspect ratio */
      margin: 10px;
      padding:10px; /* Add margin between images */
    }
  </style>
</head>

<body>
<form method="post" action="index">
  <div class="hero_area" id="home">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="#home">
            <span>The Weekend Ride</span>
          </a>
    
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <i class="fas fa-bars"></i>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <li class="nav-item">
                <a class="nav-link" href="addVehicle.html"><i class="fas fa-car"></i> Add Vehicle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fas fa-location-arrow"></i> Track Vehicle</a>
              </li>
              <% Seller seller = (Seller)request.getSession().getAttribute("seller");  %>
              <li class="nav-item">
                <a class="nav-link" href="#">  <i class="fas fa-user-circle"></i> <%=seller.getSellerName() %></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="logout">  <i class="fas fa-sign-out-alt"></i> Logout</a>
              </li>
            </ul>
          </div>
        </nav>
    </header>
    <!-- end header section -->
     <!-- about section -->

     <section class="product_section container">
      <div class="heading_container heading_center py-4">
          <h2>My Vehicles</h2>
      </div>
      <div class="row image-container">
      
      <%  List<Vehicle> allVehicle = (List<Vehicle>)request.getAttribute("allVehicle"); 
      
      
		  for (Vehicle vehicle : allVehicle) {
			    if (vehicle.getSellerEmail().equals(seller.getSellerEmail())) {
			
      %>
      
          <!-- Product 1 -->
          <div class="col-md-4">
              <div class="card rounded">
              
              <div class="text-centered">
              <%
              if(vehicle.getVehicleImage() != null)
              {
            	  String based64Image = new String(Base64.getEncoder().encode(vehicle.getVehicleImage()));
              %>
                 <img src="data:image/jpeg;base64, <%=based64Image %>" alt="Vehicle Image" class="card-img-top">
                  <%}
              else{
              %>
              
              No Image Available
              <%
              }
              
              %>
              </div>
                  <div class="card-body text-center">
                      <h3 class="card-title"><%=vehicle.getVehiclemodelName() %></h3>
                      <p class="card-text"><%=vehicle.getVehicleDescription() %>.</p>
                      <p class="card-text"><b>Price: <%=vehicle.getVehicleprice() %></b><br>per hour</p>
                      <p class="card-text"><b>Booked Status :<%=vehicle.getVehicleBookedStatus() %>.</b></p>
                     <p class="card-text"><b>Verification Status :<%=vehicle.getVehicleVerificationStatus() %>.</b></p>
                     
                      <a href="deleteVehicleById/<%=vehicle.getVehicleId() %>" class="btn btn-danger">Remove Vehicle</a>
                  </div>
              </div>
          </div>
  
         <%
         
 			    }
 			}
         %>
      </div>
  </section>
  
  </div>
  <!-- info section -->

  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info-col">
          <div class="info_detail">
            <h4>
              About Us
            </h4>
            <p>
                Your go-to for premium vehicle rentals. We offer a diverse fleet, prioritizing customer satisfaction for seamless and enjoyable journeys.
            </p>
            <div class="info_social">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info-col">
          <div class="info_contact">
            <h4>
              Address
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Shirpur
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  bookbuddies@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end info section -->

  <!-- footer section -->
  <footer class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Book Buddies</a>
      </p>
    </div>
  </footer>
  <!-- footer section -->

  <!-- jQery -->
  <script src="js/jquery-3.4.1.min.js"></script>
  <!-- bootstrap js -->
  <script src="js/bootstrap.js"></script>
  <!-- custom js -->
  <script src="js/custom.js"></script>
  <!-- Google Map -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
  </script>
  <!-- End Google Map -->
		 <script type="text/javascript">
        // Disable caching on the client side
        document.addEventListener("DOMContentLoaded", function () {
            if (window.history && window.history.pushState) {
                window.history.pushState('', null, '');
                window.addEventListener('popstate', function () {
                    window.history.pushState('', null, '');
                    location.reload();
                });
            }
        });
    </script>
		<script>
  $(document).ready(function () {
    // Smooth scrolling for navbar links
    $(".nav-link-section").on("click", function (e) {
      e.preventDefault();
      const targetSection = $(this).attr("href");
      const targetOffset = targetSection === "#home" ? 0 : $(targetSection).offset().top;

      $("html, body").animate({
        scrollTop: targetOffset
      }, 1000);
    });
  });
</script>
<script>
    function toggleProfileInfo() {
        var profileInfo = document.getElementById("profileInfo");
        profileInfo.classList.toggle("hidden");
    }
</script>
<script>
    function showProfileInfo() {
        var profileInfo = document.getElementById("profileInfo");
        profileInfo.classList.remove("hidden");
    }

    function hideProfileInfo() {
        var profileInfo = document.getElementById("profileInfo");
        profileInfo.classList.add("hidden");
    }
</script>

</form>
</body>

</html>
