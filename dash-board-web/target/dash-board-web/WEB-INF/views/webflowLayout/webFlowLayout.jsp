<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ include file="/WEB-INF/views/taglibs/taglibs.jsp"%>
<tiles:importAttribute name= "javascripts"/>
<tiles:importAttribute name = "stylesheets"/>
<!DOCTYPE html>
<html class="html" ng-app="personalWeb">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name ="viewport" content ="width=device-width" >
</head>
<body>
		<header>
			<tiles:insertAttribute name = "header"/>
		</header>
		<div>
			<tiles:insertAttribute name = "body"/>
		</div>
		<!--<footer>
			<tiles:insertAttribute name = "footer"/>
		</footer>-->
		<div>
		
		    
			<%-- <jsp:include page="/WEB-INF/views/commonJSStyles.jsp"/> --%>		
				
			<c:forEach var="css" items="${stylesheets}">
        			<link rel="stylesheet" type="text/css" href="<c:url value="${css}"/>">
    		</c:forEach>		
			
			<c:forEach var="script" items="${javascripts}">
        			<script src="<c:url value="${script}"/>"></script>
   			 </c:forEach>
   			 
   			 <tiles:insertAttribute name="jsfiles"/>
   			 
		</div>
		
		
		
</body>
</html>