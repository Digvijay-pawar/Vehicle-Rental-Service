<%@page import="com.mitesh.model.Vehicle"%>
<%@ page import="java.util.*" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>Vehicle Owner</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" type="text/css" href="./resources/css/bootstrap.css" />
  <!-- Font Awesome CSS -->
  <link href="./resources/css/font-awesome.min.css" rel="stylesheet" />

  <!-- Custom styles for this template -->
  <link href="./resources/css/style.css" rel="stylesheet" />
  <!-- Responsive style -->
  <link href="./resources/css/responsive.css" rel="stylesheet" />

</head>
 
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
              <li class="nav-item dropdown">
                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-car"></i> Vehicle
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="vehicleOwnerRequest.html">Vehicle Request</a>
                  <a class="dropdown-item" href="companyViewVehicle">View All Vehicle</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-user"></i> Customer
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="customerRequest">Customer Request</a>
                  <a class="dropdown-item" href="#">Track Customer</a>
                  <a class="dropdown-item" href="#">Customer History</a>
                  <a class="dropdown-item" href="addDriver">Add Driver</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-user-circle"></i> company@gmail.com </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
   

    <section class="product_section container">
        <div class="heading_container heading_center py-4">
            <h2>Vehicle Owner Request</h2>
        </div>
        <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Vehicle Id</th>
                <th scope="col">Vehicle No.</th>
                <th scope="col">Model Name</th>
                <th scope="col">Vehicle Type</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            <% List<Vehicle> allVehicle = (List<Vehicle>)request.getAttribute("companyView"); 
		  
		  for(Vehicle v: allVehicle)
		  {
			  if(v.getVehicleVerificationStatus().equals("Not verified"))
			  {
				  
		  %>
              <tr>
                <th scope="row"><%=v.getVehicleId() %></th>
                <td><%=v.getVehicleNumber() %></td>
                <td><%=v.getVehiclemodelName() %></td>
                <td><%=v.getVehicleType() %></td>
                <td><%=v.getVehicleDescription()%></td>
                <td><%=v.getVehicleprice()%></td>
                <td><%=v.getSellerEmail() %></td>
                <td><%=v.getVehicleVerificationStatus() %></td>
                <td><a href="updateVerificationStatuById/<%=v.getVehicleId() %>" class="btn btn-success">Approve</a></td>
              </tr>
              <%
			  }
		  }
              %>
            </tbody>
          </table>
    </section>
    <!-- end slider section -->
  </div>

  <!-- about section -->


  <!-- end about section -->


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
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function () {
      // Show dropdown on hover
      $('.nav-item.dropdown').hover(
        function () {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        },
        function () {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        }
      );
    });
  </script>

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