package com.mitesh.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "Customer")
public class Customer {
    
    @Id
    @Column(name = "customerEmail")
    private String customerEmail;
    
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "customerId", unique = true)
    private int customerId;
	
	
	private String customerName;
	private String customerPassword;
	private String customerAddress;
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerPassword() {
		return customerPassword;
	}
	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}
	public String getCustomerAddress() {
		return customerAddress;
	}
	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}
	public Customer(int customerId, String customerEmail, String customerName, String customerPassword,
			String customerAddress) {
		super();
		this.customerId = customerId;
		this.customerEmail = customerEmail;
		this.customerName = customerName;
		this.customerPassword = customerPassword;
		this.customerAddress = customerAddress;
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
