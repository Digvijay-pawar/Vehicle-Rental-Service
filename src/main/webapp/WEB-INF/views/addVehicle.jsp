<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Add Vehicle</title>
</head>

<body class="bg-light min-vh-100 d-flex align-items-center justify-content-center">

    <div class="bg-white p-4 shadow rounded w-50 h-75" id="buyerRegistration">
        <h2 class="text-2xl font-bold mb-4 text-dark">Add Vehicle Details</h2>

        <form action="addnewvehilce" method="post" enctype="multipart/form-data" class="row g-3">
            <div class="col-md-6 mb-3">
                <label for="vehicleNumber" class="form-label">Vehicle Number:</label>
                <input type="text" id="vehicleNumber" name="vehicleNumber" placeholder="Enter vehicle number" class="form-control">
            </div>

            <div class="col-md-6 mb-3">
                <label for="modelName" class="form-label">Model Name:</label>
                <input type="text" id="modelName" name="vehiclemodelName" placeholder="Enter vehicle model name" class="form-control">
            </div>

            <div class="col-md-6 mb-3">
                <label for="carType" class="form-label">Vehicle Type:</label>
                <select id="carType" name="vehicleType" class="form-select">
                    <option value="motorcycle">Motorcycle</option>
                    <option value="car">Car</option>
                </select>
            </div>

            <div class="col-md-6 mb-3">
                <label for="description" class="form-label">Description:</label>
                <input type="text" id="description" name="vehicleDescription" placeholder="Enter vehicle description" class="form-control">
            </div>

            <div class="col-md-6 mb-3">
                <label for="price" class="form-label">Price:</label>
                <input type="text" min=100 id="price" name="vehiclePrice" placeholder="Enter vehicle price" class="form-control">
            </div>
            
            <div class="col-md-6 mb-3">
			    <label for="date" class="form-label"> Start Date:</label>
			    <input type="date" id="date" name="vehicleStartDate" class="form-control">
			</div>
            
             <div class="col-md-6 mb-3">
			    <label for="date" class="form-label"> End Date:</label>
			    <input type="date" id="date" name="vehicleEndDate" class="form-control">
			</div>

         <!--  <div class="col-md-6 mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" name="sellerEmail" placeholder="Enter your Email" class="form-control">
            </div>
		-->   
            <div class="col-md-6 mb-3">
                <label for="imageUpload" class="form-label">Upload Vehicle Image:</label>
                <input type="file" id="imageUpload" name="vehicleImage" accept="image/*" class="form-control">
            </div>
           
            <!-- ... (unchanged code) ... -->

            <div class="col-md-12 mb-3 text-center">
                <button type="submit" class="btn btn-success btn-sm w-50 h-30 py-2">Add Vehicle</button>
            </div>
        </form>
    </div>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
