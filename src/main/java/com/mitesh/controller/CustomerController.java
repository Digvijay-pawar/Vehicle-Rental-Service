package com.mitesh.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.view.RedirectView;

import com.mitesh.dao.CustomerDao;
import com.mitesh.dao.RequestVeDao;
import com.mitesh.dao.VehicleDao;
import com.mitesh.model.Customer;
import com.mitesh.model.RequestVehicle;
import com.mitesh.model.Vehicle;

@Controller
public class CustomerController {
	
	ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
    EmailSend emailSend = new EmailSend();
    
    Customer customer = (Customer) context.getBean("customer");
    CustomerDao customerDao = (CustomerDao) context.getBean("customerDao");
    
    Vehicle vehicle = (Vehicle)context.getBean("vehicle");
    VehicleDao vehicleDao = (VehicleDao)context.getBean("vehicleDao");
    
   
    RequestVehicle requestvehicle=(RequestVehicle) context.getBean("requestVehicle");
    RequestVeDao requestvedao=(RequestVeDao) context.getBean("requestVeDao");
    
    @RequestMapping(path="/customerlogin", method=RequestMethod.POST)
    public String customerLogin(HttpServletRequest request,Model m){
    
    	String customerEmail = request.getParameter("customerEmail");
    	String customerPassword = request.getParameter("customerPassword");

    	List<Vehicle> allVehicle = (List<Vehicle>)vehicleDao.getAllVehicle();
    	m.addAttribute("customerAllVehicles",allVehicle);
    	List<Customer> allCustomer = customerDao.getAllCustomers();
    	for(Customer c:allCustomer)
    	{
    		if(c.getCustomerEmail().equals(customerEmail) && c.getCustomerPassword().equals(customerPassword))
    		{
    			request.getSession().setAttribute("customer", c);
    			return "customerHome";
    		}
    	}
    	return "error";
    }
    
    @RequestMapping("/customerHome")
    public String tocustomerHome(Model m){
    	List<Vehicle> allVehicle = (List<Vehicle>)vehicleDao.getAllVehicle();
    	m.addAttribute("customerAllVehicles",allVehicle);
    	return "customerHome";
    }
    
    @RequestMapping(path="/CreateCustomerAccount", method=RequestMethod.POST)
    public String createCustomerAccount(HttpServletRequest request,Model m,@ModelAttribute Customer customer ){
    	
    	try {
			

        	EmailSend emailSend = new EmailSend();
        	
        	String customerotp = emailSend.sendEmailWithOTP(customer.getCustomerEmail());
    		request.getSession().setAttribute("customerotp", customerotp);
    		request.getSession().setAttribute("tempcustomer", customer);
    		System.out.println("Email Sent from this mapping !!!! ");
    		
        	return "verify";
    		
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return "error";
    }
    
    

    
//    @RequestMapping("/addRequest")
//    public String addRequestPageOpen(){
//    	return "addRequest";
//    }
    
    @RequestMapping(path="/addrequestdetails", method=RequestMethod.POST)
    public String addreuestD(HttpServletRequest request, Model m)
    {
    	
    	customer = (Customer)request.getSession().getAttribute("customer");
    	String custEmail = request.getParameter("email");
    	String custName=request.getParameter("name");
    	String custCity=request.getParameter("address");
    	String vehicleType=request.getParameter("type");
    	String startdate=request.getParameter("pickupdate");
    	String enddate=request.getParameter("returndate");
    	String driverreq=request.getParameter("driverNeeded");
    	
    	String carID =(String) request.getParameter("carId");
    	System.out.println(carID);
    	
    	requestvehicle.setCustEmail(customer.getCustomerEmail());
    	requestvehicle.setCustName(customer.getCustomerName());
    	requestvehicle.setCustCity(customer.getCustomerAddress());
    	requestvehicle.setVehicleType(vehicleType);
    	requestvehicle.setStartdate(startdate);
    	requestvehicle.setEnddate(enddate);
    	requestvehicle.setDriverreq(driverreq);
    	requestvehicle.setCarId(carID);
    	requestvehicle.setRequestStatus("Pending");
    	int p=requestvedao.addRequest(requestvehicle);
    	System.out.println(p);
    	if(p>=0)
    	{
    		return "customerHome";
    	}
    	else{
    	  return "error";
    	}
    }
    
    
    @RequestMapping(path="addRequest/{requestid}", method=RequestMethod.GET)
    public String onAddRequest(Model m,@PathVariable("requestid") String requestId, HttpServletRequest request)
    {
    	m.addAttribute("id", requestId);
    	RedirectView redirectView = new RedirectView();
    	redirectView.setUrl(request.getContextPath() + "/addRequest");
    	System.out.println("On Add request page..");
    	return "addRequest" ;
    }
    
    
    @RequestMapping(path="/cartCustomer")
    public String cartCustomer(HttpServletRequest request, Model m){
    	
    	List<RequestVehicle> allreq = requestvedao.getAllRequest();
    	request.getSession().setAttribute("allreq", allreq);
    	return "cartCustomer";
    	
    }
    
    
//    @RequestMapping(path="/filtervehicle",method=RequestMethod.POST)
//    public String filterVehicleWithDTC(HttpServletRequest request,Model m)
//    {
//    	  String city = request.getParameter("city");
//          String Vehicletype = request.getParameter("type");
//          String pickupdateString = request.getParameter("pickupdate");
//          String returndateString = request.getParameter("returndate");
//
//          // Define the date format
//          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
//
//          // Convert pickupdateString and returndateString to LocalDate objects
//          LocalDate pickupdate = LocalDate.parse(pickupdateString, formatter);
//          LocalDate returndate = LocalDate.parse(returndateString, formatter);
//
//          List<Vehicle> vehicledetails = vehicleDao.filtervehicle(Vehicletype);
//          List<Vehicle> filteredVehicles = new ArrayList<>();
//
//          for (Vehicle v : vehicledetails) {
//              LocalDate vPickupDate = LocalDate.parse(v.getPickupdate(), formatter);
//              LocalDate vReturnDate = LocalDate.parse(v.getReturndata(), formatter);
//
//              if (city.equals(v.getVehicleCity()) && 
//                  pickupdate.isEqual(vPickupDate) && 
//                  returndate.isEqual(vReturnDate)) {
//                  filteredVehicles.add(v);
//              }
//          }
//          
//          m.addAttribute("filteredVehicles", filteredVehicles);
//          return "filteredVehicle";  // Assuming this is your view name
//     }
//    
    
    
    
}
