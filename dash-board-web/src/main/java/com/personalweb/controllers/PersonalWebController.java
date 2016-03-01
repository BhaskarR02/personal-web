package com.personalweb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dashBoardUser.services.DashBoardUserInterface;
import com.infosys.tedge.base.DaException;




@Controller
public class PersonalWebController {
	 
	public DashBoardUserInterface iBoardUserInterface;
	
	
	public DashBoardUserInterface getiBoardUserInterface() {
		return iBoardUserInterface;
	}


	public void setiBoardUserInterface(DashBoardUserInterface iBoardUserInterface) {
		this.iBoardUserInterface = iBoardUserInterface;
	}


	@RequestMapping(value="/home.htm" ,method=RequestMethod.GET)
	public @ResponseBody String displayHome() throws DaException{
		System.out.println(iBoardUserInterface.getLoggedUser().getUniqueId());
		System.out.println("print from git hub");
		return "hello";
	}

}
