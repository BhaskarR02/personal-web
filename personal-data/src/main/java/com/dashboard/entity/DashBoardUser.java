package com.dashboard.entity;

import java.util.Date;

public class DashBoardUser {
	private String userName;
	private String userEmail;
	private String userpassword;
	private Date userbirth;
	private boolean usergender;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserpassword() {
		return userpassword;
	}
	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	public Date getUserbirth() {
		return userbirth;
	}
	public void setUserbirth(Date userbirth) {
		this.userbirth = userbirth;
	}
	public boolean isUsergender() {
		return usergender;
	}
	public void setUsergender(boolean usergender) {
		this.usergender = usergender;
	}
	
	

}
