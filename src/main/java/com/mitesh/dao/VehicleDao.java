package com.mitesh.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.mitesh.model.Vehicle;

@Component
public class VehicleDao {

	@Autowired
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	
	@Transactional
	public String addVehicle(Vehicle vehicle)
	{
		int i = (Integer)this.hibernateTemplate.save(vehicle);
		return " "+i+" vehicles inserted in db";
	}
	
	public List<Vehicle> getAllVehicle()
	{
		List<Vehicle> allVehicles = (List<Vehicle>) this.hibernateTemplate.loadAll(Vehicle.class);
		return allVehicles;
	}
	
	@Transactional
	public void deleteVehicle(int id)
	{
		Vehicle vehicle = this.hibernateTemplate.get(Vehicle.class, id);
		this.hibernateTemplate.delete(vehicle);
		
	}
	
	public Vehicle getVehicle(int id)
	{
		Vehicle vehicle = this.hibernateTemplate.get(Vehicle.class, id);
		return vehicle;
	}
	
	@Transactional
	public void updateVehicleVerification(int id){
		
		Vehicle vehicle = this.hibernateTemplate.get(Vehicle.class, id);
		vehicle.setVehicleVerificationStatus("verified");
		this.hibernateTemplate.update(vehicle);
	
	}
	
	
}
