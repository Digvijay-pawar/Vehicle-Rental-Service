package com.mitesh.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import com.mitesh.dao.CustomerDao;
import com.mitesh.dao.VehicleDao;
import com.mitesh.model.Customer;
import com.mitesh.model.Seller;
import com.mitesh.model.Vehicle;



@Controller
public class MainController {
    ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
    EmailSend emailSend = new EmailSend();
    
    Customer customer = (Customer) context.getBean("customer");
    CustomerDao customerDao = (CustomerDao) context.getBean("customerDao");
    
    Seller seller = (Seller) context.getBean("seller");
    Vehicle vehicle = (Vehicle)context.getBean("vehicle");
    VehicleDao vehicleDao = (VehicleDao)context.getBean("vehicleDao");
    @RequestMapping("/")
    public String start(HttpServletRequest req) {
    	System.out.println(req.getSession().getAttribute("seller"));
        return "index";
    }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }
    @RequestMapping("/logout")
    public RedirectView logout(HttpServletRequest req) {
    	HttpSession session =req.getSession();
    	session.invalidate();
    	return  new RedirectView(req.getContextPath()+"/");
    }

    

    @RequestMapping("/companyHome")
    public String companyhome()
    {
    	return "companyHome";
    }
    
//       @RequestMapping(path="/companylogin" ,method=RequestMethod.POST)
//       public String companyLogin(HttpServletRequest request){
//    	if(request.getParameter("companyEmail").equals("company@gmail.com") && request.getParameter("companyPassword").equals("company"))
//    	{
//    		return "companyHome";
//    	}
//    	return "error";
//    }
       @RequestMapping(path="/companylogin" ,method=RequestMethod.POST)
       public  View companyLogin(HttpServletRequest request){
//    	   ModelAndView mv =new ModelAndView();
    	   if(request.getParameter("companyEmail").equals("company@gmail.com") && request.getParameter("companyPassword").equals("company"))
    	   {
    		  
    		   return new RedirectView(request.getContextPath()+"/companyHome");
    	   }
    	   return new RedirectView(request.getContextPath()+"/error");
    	   
       }
    
       
       @RequestMapping("/companyViewVehicle")
       public String companyViewVehicle(HttpServletRequest request,Model m){
    	   List<Vehicle> vehicle = (List<Vehicle>) vehicleDao.getAllVehicle();
    	   m.addAttribute("companyView", vehicle);
    	   
    	   
    	   return "companyViewVehicle";
       }
       
       @RequestMapping("/viewVehicleRequest")
       public String viewVehicleRequest(HttpServletRequest request,Model m){
    	   List<Vehicle> vehicle = (List<Vehicle>) vehicleDao.getAllVehicle();
    	   m.addAttribute("companyView", vehicle);
    	   return "viewVehicleRequest";
       }
    
//    @RequestMapping("/createAccount")
//    public String createAccount(){
//    	return "createAccount"; 
//    }
   
//    @RequestMapping(path="/companylogin" ,method=RequestMethod.POST)
//    public ModelAndView companyLogin(HttpServletRequest request, Model m){
//    	ModelAndView mv = new ModelAndView();
//    	if(request.getParameter("companyEmail").equals("company@gmail.com") && request.getParameter("companyPassword").equals("company"))
//    	{
//    		
//    		m.addAttribute("company", "company@gmail.com");
//    		mv.addObject("company", "company@gmail.com");
//    		request.getSession().setAttribute("company", "company@gmail.com");
//    		mv.setView(new RedirectView(request.getContextPath()+"/companyHome"));
//    		return  mv;
//    	}
//    	mv.setView(new RedirectView(request.getContextPath()+"/error"));
//    	return mv;
//    }
  
       
       @RequestMapping("/customerRequest")
       public String customerRequestPage()
       {
    	   return "customerRequest";
       }
    
    @RequestMapping("/createAccount")
    public String createAccount(){
    	return "createAccount"; 
    }
   
   @RequestMapping(path="/updateVerificationStatuById/{vehicleId}", method=RequestMethod.GET)
    public RedirectView updateVerificationStatuById(@PathVariable("vehicleId") int vehicleId,HttpServletRequest request)
    {
	   vehicleDao.updateVehicleVerification(vehicleId);
	   
	   System.out.println("On Update Staus Verification path");
   	RedirectView redirectView = new RedirectView();
		redirectView.setUrl(request.getContextPath()+"/companyViewVehicle");
		return redirectView;
    	
    }
   
   
  
    
   @RequestMapping(path = "/verify", method = RequestMethod.POST)
    public String toVerifyOtpPage(HttpServletRequest request, Model m) {
        String generateOtp = emailSend.sendEmailWithOTP(request.getParameter("email"));
        System.out.println("Printing the generated Otp here : " + generateOtp);
        request.getSession().setAttribute("otp", generateOtp);
        return "verfiy";
    }
   
    @RequestMapping(path="/verifyOtp", method=RequestMethod.POST)
    public String verifyOtp(Model m, HttpServletRequest request) {
        String receivedOtp = request.getParameter("recievedOtp");
        String generatedOtp = (String) request.getSession().getAttribute("customerotp");
        
        customer = (Customer)request.getSession().getAttribute("tempcustomer");
        customer.setCustomerId(0);
        
       System.out.println("Received OTP from form: " + receivedOtp);
       System.out.println("Generated OTP from session: " + generatedOtp);
        
        if (receivedOtp != null && receivedOtp.equals(generatedOtp)) {
           try {
                System.out.println(customerDao.addCustomer(customer));
               return "login";          
           } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "error";
    }
    
    
    //Image upload controller
}
