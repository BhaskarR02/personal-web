package com.infosys.tedge.base;

import java.io.PrintWriter;
import java.io.StringWriter;

public class DaException extends Exception {
	private static final long serialVersionUID =1L;
	private final String errorCode;
	private String errorMsg;
	private String stackTrace;
	private static final String _APP_ERR="AppErr";
	
	public Exception originalException;
	public DaException(String errorMsg){
		errorCode=_APP_ERR;
		this.errorMsg = errorMsg;
		this.stackTrace = errorMsg;
		
	}
	
	public DaException(String errCode,String errMsg,Exception e)
	{
		super(errMsg);
		errorCode=errCode;
		StringWriter sw = new StringWriter();
		e.printStackTrace(new PrintWriter(sw));
		this.stackTrace=sw.toString();
	}
	public DaException(String errorCode,Exception e){
		this.errorCode=errorCode;
		this.errorMsg=e.getMessage();
	}
	
	public DaException(String errorCode,String errorMsg){
		this.errorCode=errorCode;
		this.errorMsg=errorMsg;
		this.stackTrace=errorMsg;
	}
	public DaException(Exception e){
		super(e.toString());
		errorCode=_APP_ERR;
		originalException = e;
		this.errorMsg=e.toString();
		StringWriter sw = new StringWriter();
		e.printStackTrace(new PrintWriter(sw));
		stackTrace = sw.toString();
	}
	public void printStackTrace(){
		printStackTrace(System.err);
	}
	public void printStackTrace(java.io.PrintStream s){
		synchronized (s) {
			s.print(getClass().getName()+":");
			s.print(stackTrace);
			
		}
	}
	
	public void printStackTrace(java.io.PrintWriter s){
		synchronized (s) {
			s.print(getClass().getName()+":");
			s.print(stackTrace);
			
		}
	}
	public void rethrow() throws Exception{
		throw originalException;
	}
	public String getErrCode(){
		return this.errorCode;
	}
	public String getErrorDetails(){
		return(this.errorMsg+"\n" +this.stackTrace);
	}
	public String getErrorMsg(){
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg){
		this.errorMsg=errorMsg;
	}
}