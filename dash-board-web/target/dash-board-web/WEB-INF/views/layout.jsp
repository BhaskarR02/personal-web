<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@include file="/WEB-INF/views/taglibs/taglibs.jsp" %>

<tiles:importAttribute name="javascripts"/>
<tiles:importAttribute name="stylesheets"/>
<!DOCTYPE html>

<html ng-app="orange" class="html">
<head>
<title><tiles:insertAttribute name="title"/></title>

 <c:forEach var="css" items="${stylesheets}">
        <link rel="stylesheet" type="text/css" href="<c:url value="${css}"/>">
    </c:forEach>
</head>
<body>

<div class ="layoutContent">
	<div>
		<tiles:insertAttribute name="header"/>
	</div>
	<div>
		<tiles:insertAttribute name="body"/>
	</div>
	<div>
		<tiles:insertAttribute name="footer"/>
	</div>
</div>


 <c:forEach var="script" items="${javascripts}">
        <script src="<c:url value="${script}"/>"></script>
 </c:forEach>


  <tiles:insertAttribute name="jqgrid"></tiles:insertAttribute>


</body>
</html>