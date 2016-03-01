package com.dashBoardUser.model;

import java.util.Date;

public class DashBoardUserModel {
	private String uniqueId;
	private String userName;
	private String userEmail;
	private String userpassword;
	private Date userbirth;
	private boolean usergender;
	private String profilePicLocation;
	public String getUniqueId() {
		return uniqueId;
	}
	public void setUniqueId(String uniqueId) {
		this.uniqueId = uniqueId;
	}
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
	public String getProfilePicLocation() {
		return profilePicLocation;
	}
	public void setProfilePicLocation(String profilePicLocation) {
		this.profilePicLocation = profilePicLocation;
	}
	
	
}
