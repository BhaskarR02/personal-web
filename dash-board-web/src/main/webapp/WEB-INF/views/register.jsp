<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%> 
<!DOCTYPE html>
<html>
<!-- <head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>National Credits</title>
<style>
 	

</style>
</head> -->
<!-- <body> -->
<div id="registerContent">
<form:form modelAttribute="register" action="${flowExecutionUrl}" >
    <div class="registerHeader">
    <spring:message code="label.createAccount"/></div>
    <div class = "registerForm">
    <li><spring:message code="label.accountId"/><form:label path="usierId" style="font-size:20px;">&nbsp;<c:out value="${registerComponents.usierId}"/></form:label></li>
    	<li>
    		<span class="leftSpan"><spring:message code="label.emailId"/></span>
    		<span class="rightSpan">
    			<form:input type="email"  path="email" id="email" onblur="ValidateAccount.validateEmail();"/>
				<label for="email"></label>
			</span>
    	</li>
        <li>
        	<span class="leftSpan"><spring:message code="label.password"/></span>
        	<span class="rightSpan">
        		<form:input type="password" path="password" id="password" onblur="ValidateAccount.checkPassword();"/>
				<label for="password"></label>
			</span>
        </li>
        <li>
        	<span class="leftSpan"><spring:message code="label.confirmPassword"/></span>
        	<span class="rightSpan">
        		<input type="password" id="confirmPassword" onblur="ValidateAccount.confirmPassword('password',this.id)">
				<label for="confirmPassword"></label>
        	</span>
        </li>
	<%-- <table>
		<tr><td><spring:message code="label.emailId"/></td><td>
				
				</td>
				</tr>
		<tr><td><spring:message code="label.password"/></td><td>
		</td></tr>	
		<!-- <tr><td></td><td>
		<div><input type="checkbox" id="paslength" name="password[]"/>
   					<label for="paslength"></label>
   			</div>
		
		</td></tr> -->
		<tr><td><spring:message code="label.confirmPassword"/></td><td><input type="password" id="confirmPassword">
					<label for="confirmPassword"></label>
		</td></tr>
		<tr><td><spring:message code="label.validQuestion1"/></td><td><form:select path="firstSecurityQuestionResponse" id="firstSecurityQuestion">
				<c:forEach var="securityQuestion" items="${registerComponents.securityQuestions}"  varStatus="status">
				<form:option value="${securityQuestion.questionId}" label="${securityQuestion.question}">
				</form:option>
				</c:forEach>
			</form:select></td></tr>	
		<tr><td><spring:message code="label.answer"/></td><td><form:input type="text" required="required" path="secondSecurityQuestionResponse"/></td></tr>	
			<tr><td><spring:message code="label.validQuestion2"/></td><td>
				<form:select path="secondSecurityquestionId" id="secondSecurityquestionId">
					<c:forEach var="securityQuestion" items="${registerComponents.securityQuestions}"  varStatus="status">
					<form:option value="${securityQuestion.questionId}" label="${securityQuestion.question}">
					</form:option>
					</c:forEach>
				</form:select>
			</td></tr>
			<tr><td><spring:message code="label.answer"/></td><td>
			  <form:input type="text" required="required" path="secondSecurityQuestionResponse"/>
			
			</td></tr>
	</table> --%>
	<li style="padding: 0 31%">
	<span><button type="button" id="back" class="button navigationButton"><spring:message code="label.back"/></button></span>
	<span><button type="reset" id="reset" class="button reset"><spring:message code="label.reset"/></button></span>
	<span><button type="submit" id="submit" class="button navigationButton"><spring:message code="label.submit"/></button></span>
	</li>
	</div>
	
</form:form>
</div>

<!-- </body> -->
</html>