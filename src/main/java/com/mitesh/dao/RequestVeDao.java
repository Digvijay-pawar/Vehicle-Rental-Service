package com.mitesh.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.mitesh.model.RequestVehicle;

@Component
public class RequestVeDao {
	@Autowired
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public RequestVeDao(HibernateTemplate hibernateTemplate) {
		super();
		this.hibernateTemplate = hibernateTemplate;
	}

	public RequestVeDao() {
		super();
		// TODO Auto-generated constructor stub
	}
@Transactional
	public int addRequest(RequestVehicle requestvehicle) {
		// TODO Auto-generated method stub
		int i=(int) hibernateTemplate.save(requestvehicle);
		return i;
		
	}

	public List<RequestVehicle> getAllRequest(){
		
		 List<RequestVehicle> allrequest = (List<RequestVehicle>)this.hibernateTemplate.loadAll(RequestVehicle.class);
		return allrequest;
	}
	

}
