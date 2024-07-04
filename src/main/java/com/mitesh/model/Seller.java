package com.mitesh.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.stereotype.Component;

@Entity
@Component 


@Table(name = "Seller", uniqueConstraints = {
        @UniqueConstraint(columnNames = "sellerId"),
        @UniqueConstraint(columnNames = "sellerEmail")
})
public class Seller {
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "sellerId", unique = true)
	private int sellerId;
	@Id
	@Column(name = "sellerEmail")
	private String sellerEmail;
	private String sellerPassword;
	private String sellerName;
	private String sellerAddress;
	public int getSellerId() {
		return sellerId;
	}
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	public String getSellerEmail() {
		return sellerEmail;
	}
	public void setSellerEmail(String sellerEmail) {
		this.sellerEmail = sellerEmail;
	}
	public String getSellerPassword() {
		return sellerPassword;
	}
	public void setSellerPassword(String sellerPassword) {
		this.sellerPassword = sellerPassword;
	}
	public String getSellerName() {
		return sellerName;
	}
	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	public String getSellerAddress() {
		return sellerAddress;
	}
	public void setSellerAddress(String sellerAddress) {
		this.sellerAddress = sellerAddress;
	}
	public Seller() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Seller(int sellerId, String sellerEmail, String sellerPassword, String sellerName, String sellerAddress) {
		super();
		this.sellerId = sellerId;
		this.sellerEmail = sellerEmail;
		this.sellerPassword = sellerPassword;
		this.sellerName = sellerName;
		this.sellerAddress = sellerAddress;
	}

	
	
}
