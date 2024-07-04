package com.mitesh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class Vehicle {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int vehicleId;
	private String vehicleNumber;
	private String vehicleType;
	private String vehicleDescription;
	private String vehicleprice;
	private String sellerEmail;
	private String vehiclemodelName;
	private String vehicleStartDate;
	private String vehicleEndDate;
	private String vehicleBookedStatus;
	private String vehicleVerificationStatus;
	private byte[] vehicleImage;
	public int getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public String getVehicleType() {
		return vehicleType;
	}
	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}
	public String getVehicleDescription() {
		return vehicleDescription;
	}
	public void setVehicleDescription(String vehicleDescription) {
		this.vehicleDescription = vehicleDescription;
	}
	public String getVehicleprice() {
		return vehicleprice;
	}
	public void setVehicleprice(String vehicleprice) {
		this.vehicleprice = vehicleprice;
	}
	public String getSellerEmail() {
		return sellerEmail;
	}
	public void setSellerEmail(String sellerEmail) {
		this.sellerEmail = sellerEmail;
	}
	public String getVehiclemodelName() {
		return vehiclemodelName;
	}
	public void setVehiclemodelName(String vehiclemodelName) {
		this.vehiclemodelName = vehiclemodelName;
	}
	public String getVehicleStartDate() {
		return vehicleStartDate;
	}
	public void setVehicleStartDate(String vehicleStartDate) {
		this.vehicleStartDate = vehicleStartDate;
	}
	public String getVehicleEndDate() {
		return vehicleEndDate;
	}
	public void setVehicleEndDate(String vehicleEndDate) {
		this.vehicleEndDate = vehicleEndDate;
	}
	public String getVehicleBookedStatus() {
		return vehicleBookedStatus;
	}
	public void setVehicleBookedStatus(String vehicleBookedStatus) {
		this.vehicleBookedStatus = vehicleBookedStatus;
	}
	public String getVehicleVerificationStatus() {
		return vehicleVerificationStatus;
	}
	public void setVehicleVerificationStatus(String vehicleVerificationStatus) {
		this.vehicleVerificationStatus = vehicleVerificationStatus;
	}
	public byte[] getVehicleImage() {
		return vehicleImage;
	}
	public void setVehicleImage(byte[] vehicleImage) {
		this.vehicleImage = vehicleImage;
	}
	public Vehicle(int vehicleId, String vehicleNumber, String vehicleType, String vehicleDescription,
			String vehicleprice, String sellerEmail, String vehiclemodelName, String vehicleStartDate,
			String vehicleEndDate, String vehicleBookedStatus, String vehicleVerificationStatus, byte[] vehicleImage) {
		super();
		this.vehicleId = vehicleId;
		this.vehicleNumber = vehicleNumber;
		this.vehicleType = vehicleType;
		this.vehicleDescription = vehicleDescription;
		this.vehicleprice = vehicleprice;
		this.sellerEmail = sellerEmail;
		this.vehiclemodelName = vehiclemodelName;
		this.vehicleStartDate = vehicleStartDate;
		this.vehicleEndDate = vehicleEndDate;
		this.vehicleBookedStatus = vehicleBookedStatus;
		this.vehicleVerificationStatus = vehicleVerificationStatus;
		this.vehicleImage = vehicleImage;
	}
	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
}
