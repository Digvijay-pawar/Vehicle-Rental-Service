package com.mitesh.dao;

import java.util.List;

import javax.persistence.Entity;
import javax.transaction.Transactional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.mitesh.model.Customer;

@Component
public class CustomerDao {
	@Autowired
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	
	@Transactional
	public String addCustomer(Customer customer){
		
		try {
			String i = (String) this.hibernateTemplate.save(customer);	
			return i;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	public List<Customer> getAllCustomers()
	{
		List<Customer> allCustomer = (List<Customer>)this.hibernateTemplate.loadAll(Customer.class);
		return allCustomer;
	}
	
}
