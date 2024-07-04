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
                    <h1><b><span style="color: blueviolet;">Vehicle</span> <span class="text-primary">Rental</span> <span class="text-warning">Application</span></b></h1>
                    <img src="./resources/images/8453874-removebg-preview.png" class="img-fluid mt-5" alt="">
                </div>
                <div class="col-md-6 p-2">
                    <div class="container">
                        
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md justify-content-center align-items-center mt-5">
                                <form action="verifyOtp" method="post" id="customer" 
                                    class="justify-content-between align-items-center p-5  pt-5 mt-2 px-5 text-center"
                                    style="display: block;">
                                    <h5 class="text-success"><b><i class="bi bi-emoji-smile"></i> Otp is sent to your email</b></h5>
                                    <div class="input-group mt-5 px-5">
                                        <input type="text" class="form-control rounded py-2" name="recievedOtp"
                                            placeholder="Enter Otp " aria-label="email"
                                            style="outline: none; box-shadow: none; font-size: larger; color: black;">
                                    </div>

                                    <div class="d-grid gap-2 mt-3">
                                        <button class="btn btn-primary rounded-pill py-2 w-50" type="submit"
                                            style="font-size: large; margin-left: 25%;" data-toggle="modal"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" class="createAccountBtn">
                                            <b>Verify Otp</b>
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Email Verification</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <h5 class="text-success"><b>Otp is Sent on your email</b></h5>
                    <form action="">
                        <div class="input-group mt-3">
                            <input type="text" name="recievedOtp" class="form-control rounded-pill py-2"
                                name="ownerEmail" placeholder="&#128273; Enter Otp" aria-label="email"
                                style="outline: none; box-shadow: none; font-size: larger; color: black;">
                        </div>

                        <div class="modal-footer" style="border: none;">
                            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                            <button type="submit" id="submitOtp" class="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <script src="Create_Account.js"></script>

</body>

</html>