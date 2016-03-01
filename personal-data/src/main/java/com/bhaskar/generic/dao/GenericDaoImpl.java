package com.bhaskar.generic.dao;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;



public class GenericDaoImpl<T,PK extends Serializable> implements GenericDoa<T, PK> {
	private SessionFactory sessionFactory;
	private Class<T> type;
	private Session session;
	public GenericDaoImpl(Class<T> type)
	{
		this.type=type;
		}
	
	
	public Session getSession(){
		return this.session;
	}
	public void setSession(Session session){
		this.session=session;
	}
	public void setSessionFactory(SessionFactory sessionFactory){
		this.sessionFactory = sessionFactory;
		this.setSession(sessionFactory.openSession());
	}
	public SessionFactory getSessionFactory(){
		return sessionFactory;
	}
	public PK create(T o) {
		PK p =(PK)getSession().save(o);
		getSession().flush();
		return p;
	}
	public T read(PK id) {
		
		return (T)getSession().get(type,id);
	}
	public void update(T o) {
		getSession().update(o);
		getSession().flush();
		
	}
	public void delete(T o) {
		getSession().delete(o);
		getSession().flush();
		
	}
	
	public T merge(T entity) {
		T t = (T)getSession().merge(entity);
		getSession().flush();
		return t;
	}
	public void saveOrUpdate(T entity) {
		try{
			getSession().saveOrUpdate(entity);
			getSession().flush();
		}catch(HibernateException exception){
			throw exception;
		}
		
	}
	public Class<T> getPersistentClass(){
		return type;
	}
	public List<T> findAll() {
		// TODO Auto-generated method stub
		return getSession().createCriteria(type).list();
	}
	public void flush() {
		getSession().flush();
		
	}
	
	public void clear() {
		getSession().clear();
		
	}
	public List<T> findByName(String columnName, String value) {
		Query query=getSession().createQuery("from" +getPersistentClass().getName()+"where" +columnName+"=:value");
		query.setParameter("value", value);
		List<T>objects = query.list();
		return objects;
		
	}
	public List<T> findByKeyValue(Map<String, String> keyValueMap) {
		String hqlQuery = "from"+getPersistentClass().getName()+"where";
		Set<String>keySet = keyValueMap.keySet();
		int count = 0;
		for(String key:keySet)
		{
			String value = keyValueMap.get(key);
			hqlQuery = hqlQuery+key+"='"+value+"'";
			if(count<keySet.size()-1)
			{
				hqlQuery=hqlQuery+"and";
			}
			count++;
		}
			Query query = getSession().createQuery(hqlQuery);
			List<T>objects = query.list();
			return objects;
		
		
	}
	public void saveOrUpdateAll(List<T> entity) {
		try{
			for(Iterator<T> it = entity.iterator();it.hasNext();){
				getSession().saveOrUpdate(it.next());
			}
			getSession().flush();
			getSession().clear();
		}catch(HibernateException exception){
			throw exception;
		}
		
	}
	public List<T> findByName(String columnName, int value) {
		Query query = getSession().createQuery("from"+getPersistentClass().getName()+"where"+columnName+"=:value");
		List<T> objects =query.list();
		return objects;
		
	}
	public List<T> findByName(String columnName, Date value) {
		Query query = getSession().createQuery("from"+getPersistentClass().getSimpleName()+"where"+columnName+"=:value");
		query.setParameter("value", value);
		List<T> objects = query.list();
		return objects;
		
	}
	public void executeStoredProc(String StoredProcName) throws Exception {
		try{
			Query query = this.getSession().createSQLQuery("select" + StoredProcName);
			List<Boolean> queryResult = query.list();
			if(queryResult.get(0)){
				
			}
			else{
				throw new Exception("Stored Proc not working");
				
			
				}
			}
			catch (Exception e) {
				// TODO: handle exception
			}
		
		
	}
	
	

}
