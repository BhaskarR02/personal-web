<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@include file="/WEB-INF/views/taglibs/taglibs.jsp"%>
<!DOCTYPE html>
<div>
	<form:form modelAttribute="login">
		<div>
			<span>User Name</span><span><form:input type="text" id="userName" path = "userName"/></span>
		</div>
		<div>
		<span>Password</span><span><form:input type="password" id="userPassword" path = "userPassword"/></span>
		</div>
		<div>
			<span><button type="reset">Reset</button></span>
			<!-- <span><input type="submit" id="login" value="Submit"></span> -->
			<span><button type="submit" name="_eventId_submit">Submit</button></span>
		</div>
	</form:form>
</div>
