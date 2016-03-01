package com.dashBoardUser.services;

import com.dashBoardUser.model.DashBoardUserModel;
import com.infosys.tedge.base.DaException;

public interface DashBoardUserInterface {
    public DashBoardUserModel getLoggedUser() throws DaException;
}
