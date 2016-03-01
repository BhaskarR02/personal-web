package com.bhaskar.generic.dao;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface GenericDoa<T,PK extends Serializable> {
	
	public abstract PK create(T o);
	
	public abstract T read	(PK id);
	
	public abstract void update(T o);
	
	public abstract void delete (T o);
	
	public abstract T merge (T entity);
	
	public abstract void saveOrUpdate(T entity);
	
	public abstract List<T> findAll();
	
	public abstract void flush();
	
	public abstract void clear();
	
	public abstract List<T> findByName(String ColumnName,String value);
	
	public abstract  List<T> findByKeyValue (Map<String,String> keyValueMap);
	
	public void saveOrUpdateAll (List<T> entity);
	
	public List<T> findByName(String ColumnName,int value);
	
	public List<T> findByName (String ColumnName,Date value);
	
	public void executeStoredProc(String StoredProcName) throws Exception;
	
	

}
