package com.mitesh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class RequestVehicle {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int requestId;
	private String custEmail;
	private String custName;
	private String carId;
	private String custCity;
	private String vehicleType;
    
	
	private String startdate;
	private String enddate;
	private String driverreq;
	private String requestStatus;
	public int getRequestId() {
		return requestId;
	}
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}
	public String getCustEmail() {
		return custEmail;
	}
	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getCarId() {
		return carId;
	}
	public void setCarId(String  carID2) {
		this.carId = carID2;
	}
	public String getCustCity() {
		return custCity;
	}
	public void setCustCity(String custCity) {
		this.custCity = custCity;
	}
	public String getVehicleType() {
		return vehicleType;
	}
	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public String getDriverreq() {
		return driverreq;
	}
	public void setDriverreq(String driverreq) {
		this.driverreq = driverreq;
	}
	public String getRequestStatus() {
		return requestStatus;
	}
	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}
	public RequestVehicle(int requestId, String custEmail, String custName, String carId, String custCity,
			String vehicleType, String startdate, String enddate, String driverreq, String requestStatus) {
		super();
		this.requestId = requestId;
		this.custEmail = custEmail;
		this.custName = custName;
		this.carId = carId;
		this.custCity = custCity;
		this.vehicleType = vehicleType;
		this.startdate = startdate;
		this.enddate = enddate;
		this.driverreq = driverreq;
		this.requestStatus = requestStatus;
	}
	public RequestVehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "RequestVehicle [requestId=" + requestId + ", custEmail=" + custEmail + ", custName=" + custName
				+ ", carId=" + carId + ", custCity=" + custCity + ", vehicleType=" + vehicleType + ", startdate="
				+ startdate + ", enddate=" + enddate + ", driverreq=" + driverreq + ", requestStatus=" + requestStatus
				+ "]";
	}
	
	
	

}
