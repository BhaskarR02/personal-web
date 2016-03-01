package com.dashboard.dbServiceInterface;

import com.bhaskar.generic.dao.GenericDoa;
import com.dashboard.entity.DashBoardUser;
import com.infosys.tedge.base.DaException;

public interface DashBoardUserDao extends GenericDoa<DashBoardUser, String>  {
	public  DashBoardUser getLoggerUser() throws DaException;

}
