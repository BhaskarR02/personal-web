package com.dashBoardUser.services;

import com.dashBoardUser.model.DashBoardUserModel;
import com.dashboard.dbServiceInterface.DashBoardUserDao;
import com.dashboard.entity.DashBoardUser;

import com.infosys.tedge.base.DaException;

public class DashBoardUserServices implements DashBoardUserInterface{
    private DashBoardUserDao dashBoardUserDao;
    
    

	public DashBoardUserDao getDashBoardUserDao() {
		return dashBoardUserDao;
	}
   public void setDashBoardUserDao(DashBoardUserDao dashBoardUserDao) {
		this.dashBoardUserDao = dashBoardUserDao;
	}



	@Override
	public DashBoardUserModel getLoggedUser() throws DaException {
		DashBoardUser dashBoardUserEntity = dashBoardUserDao.getLoggerUser();
		DashBoardUserModel dashBoardUserModel = new DashBoardUserModel();
		dashBoardUserModel.setUserName(dashBoardUserEntity.getUserpassword());
		dashBoardUserModel.setUserEmail(dashBoardUserModel.getUserEmail());
		dashBoardUserModel.setUserpassword(dashBoardUserEntity.getUserpassword());
		dashBoardUserModel.setUserbirth(dashBoardUserEntity.getUserbirth());
		
		return dashBoardUserModel;
	}
    
    
	

}
