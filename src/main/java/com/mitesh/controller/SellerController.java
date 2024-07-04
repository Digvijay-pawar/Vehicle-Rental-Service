package com.mitesh.controller;

import java.io.FileOutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.catalina.connector.Request;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


import com.mitesh.dao.CustomerDao;
import com.mitesh.dao.SellerDao;
import com.mitesh.dao.VehicleDao;
import com.mitesh.model.Customer;
import com.mitesh.model.Seller;
import com.mitesh.model.Vehicle;

@Controller
public class SellerController {
	ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
    EmailSend emailSend = new EmailSend();
    
    Customer customer = (Customer) context.getBean("customer");
    CustomerDao customerDao = (CustomerDao) context.getBean("customerDao");
    
    Seller seller = (Seller) context.getBean("seller");
    SellerDao sellerDao = (SellerDao) context.getBean("sellerDao");
    
    Vehicle vehicle = (Vehicle)context.getBean("vehicle");
    VehicleDao vehicleDao = (VehicleDao)context.getBean("vehicleDao");
    
//    @RequestMapping(path="/sellerlogin" ,method=RequestMethod.POST)
//    public String sellerLogin(HttpServletRequest request,Model m){
//    	
//    	String sellerEmail = request.getParameter("sellerEmail");
//    	String sellerPassword = request.getParameter("sellerPassword");
//
//    	seller = sellerDao.getSeller(sellerEmail);
//    	
//    		if(seller.getSellerEmail().equals(sellerEmail) && seller.getSellerPassword().equals(sellerPassword))
//    		{
//
//    			m.addAttribute("seller", seller);
//    			return "sellerHome";
//    		}
//    	
//    	return "error";
//    	
//    }
    
    
    @RequestMapping(path="/sellerlogin" ,method=RequestMethod.POST)
    public ModelAndView sellerLogin(HttpServletRequest request,Model m){
    	ModelAndView mv =new ModelAndView();
    	String sellerEmail = request.getParameter("sellerEmail");
    	String sellerPassword = request.getParameter("sellerPassword");
    	
    	seller = sellerDao.getSeller(sellerEmail);
    	
    	if(seller.getSellerEmail().equals(sellerEmail) && seller.getSellerPassword().equals(sellerPassword))
    	{
    		
//    		m.addAttribute("seller", seller);
    		mv.addObject("seller", seller);
    		request.getSession().setAttribute("seller",seller);
    		mv.setView(new RedirectView(request.getContextPath()+"/sellerHome"));
    		return  mv;
    	}
    	mv.setView(new RedirectView(request.getContextPath()+"/error"));
    	return mv;
    	
    }
    
    @RequestMapping("/sellerHome")
    public String sellerHome(HttpServletRequest req){
    	
    	System.out.println(req.getSession().getAttribute("seller"));
    	return "sellerHome";
    }
   
    @RequestMapping("/addVehicle")
    public String addVehilcePage(Model m){
    	m.addAttribute("seller", seller);
    	return "addVehicle";
    }
    
    
    @RequestMapping("/viewSellerVehicle")
    public String viewSellerVehicle(Model m, HttpServletRequest request)
    {
    	
    	seller = (Seller) request.getSession().getAttribute("seller");
    	List<Vehicle> allVehicle = vehicleDao.getAllVehicle();
    	m.addAttribute("allVehicle", allVehicle);
    	return "viewSellerVehicle";
    }
    String otp;
    @RequestMapping(path="/CreateSellerAccount", method=RequestMethod.POST)
    public String createCustomerAccount(HttpServletRequest request,Model m,@ModelAttribute Seller seller ){
    	
    	try {
			

        	EmailSend emailSend = new EmailSend();
        	String customerEmail = request.getParameter("sellerEmail");
        	otp = emailSend.sendEmailWithOTP(customerEmail);
    		
    		
//    		m.addAttribute("tempseller", seller);
    		request.getSession().setAttribute("tempseller", seller);
    		seller = (Seller) request.getSession().getAttribute("tempseller");
    		request.getSession().setAttribute("sellerotp", otp);
    		
    		System.out.println("Email Sent from this mapping !!!! ");
    		sellerDao.addSeller(seller);
        	return "login";
    		
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return "error";
    }
    
    @RequestMapping(path="/addnewvehilce", method=RequestMethod.POST)
    public String addnewvehicle(@RequestParam("vehicleImage") CommonsMultipartFile file,Model m, HttpServletRequest request ){
    	
    	seller = (Seller) request.getSession().getAttribute("seller");
    	vehicle.setSellerEmail(seller.getSellerEmail());
    	vehicle.setVehicleDescription(request.getParameter("vehicleDescription"));
    	vehicle.setVehiclemodelName(request.getParameter("vehiclemodelName"));
    	vehicle.setVehicleType(request.getParameter("vehicleType"));
    	vehicle.setVehicleNumber(request.getParameter("vehicleNumber"));
    	vehicle.setVehicleprice(request.getParameter("vehiclePrice"));
    	vehicle.setVehicleBookedStatus("Not Allocated");
    	vehicle.setVehicleVerificationStatus("Not verified");
    	
    	
    	String dateString1 =request.getParameter("vehicleStartDate") ; // Example date string 1
    	String dateString2 = request.getParameter("vehicleEndDate"); // Example date string 2

    	// Create a date format
    	DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    	try {
    	    // Parse strings into Date objects
    	    Date date1 = dateFormat.parse(dateString1);
    	    Date date2 = dateFormat.parse(dateString2);

    	    // Compare dates
    	    if (date1.compareTo(date2) < 0) {
    	        // date1 is before date2
    	    	vehicle.setVehicleStartDate(dateString1);
    	    	vehicle.setVehicleEndDate(dateString2);
    	    } else if (date1.compareTo(date2) > 0) {
    	        return "error";
    	    } else {
    	        // date1 is equal to date2
    	    }
    	} catch (ParseException e) {
    	    // Handle parsing exception
    	    e.printStackTrace();
    	}
    	
    	System.out.println(file.getSize());
    	System.out.println(file.getContentType());
    	System.out.println(file.getName());
    	System.out.println(file.getOriginalFilename());
    	
    	
    	byte[] data = file.getBytes();
    	String path = request.getServletContext().getRealPath("/")+file.getOriginalFilename();
    	System.out.println(path);
    	
    	
    	try {
    		
    		FileOutputStream fos = new FileOutputStream(path);
    		fos.write(data);
    		fos.close();
    		System.out.println("Uploaded file");
    		vehicle.setVehicleImage(data);
    		m.addAttribute("filename", file.getOriginalFilename());
    		
		} catch (Exception e) {
			e.printStackTrace();
		}
    	
    	
    	String r = vehicleDao.addVehicle(vehicle);
    	if(r != null)
    	{
    		return "sellerHome";    		
    	}
		
		
    	return "error";
    }
    
    
    @RequestMapping(path="/deleteVehicleById/{vehicleId}", method=RequestMethod.GET)
    public RedirectView deleteVehicleById(@PathVariable("vehicleId") int vehicleId, HttpServletRequest request){
    	System.out.println(vehicleId);
    	vehicleDao.deleteVehicle(vehicleId);
    	System.out.println("On delete path");
    	RedirectView redirectView = new RedirectView();
		redirectView.setUrl(request.getContextPath()+"/viewSellerVehicle");
		return redirectView;
    }
    
   
}
