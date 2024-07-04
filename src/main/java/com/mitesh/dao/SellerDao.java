package com.mitesh.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.mitesh.model.Customer;
import com.mitesh.model.Seller;

@Component
public class SellerDao {
	@Autowired
	private HibernateTemplate hibernateTemplate ;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	
	@Transactional
	public String addSeller(Seller seller){
		String i=(String)this.hibernateTemplate.save(seller);
		return i;
	}
	
	public List<Seller> getAllSeller()
	{
		List<Seller> allSeller = (List<Seller>)this.hibernateTemplate.loadAll(Seller.class);
		return allSeller;
	}
	
	public Seller getSeller(String email)
	{
		Seller seller = this.hibernateTemplate.get(Seller.class, email);
		return seller;
	}
	
}
