package com.dashboard.dbService.impl;



import org.hibernate.Query;

import com.bhaskar.generic.dao.GenericDaoImpl;
import com.dashboard.dbServiceInterface.DashBoardUserDao;
import com.dashboard.entity.DashBoardUser;
import com.infosys.tedge.base.DaException;

public class DashBoardDaoImpl extends GenericDaoImpl<DashBoardUser, String> implements DashBoardUserDao {

	public DashBoardDaoImpl(Class<DashBoardUser> type) {
		super(type);
		// TODO Auto-generated constructor stub
	}

	public DashBoardUser getLoggerUser() throws DaException {
		DashBoardUser dashBoardUser = new DashBoardUser();
		Query query = getSession().getNamedQuery("getUser");
		dashBoardUser = (DashBoardUser) query.list().get(0);
		return dashBoardUser;
	}

}
