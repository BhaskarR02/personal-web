<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<tiles:importAttribute name="javascripts"/>
<tiles:importAttribute name="stylesheets"/>
<!DOCTYPE html>

<html>
<head>

<title><tiles:insertAttribute name="title" ignore="true" /></title>
 <%-- <jsp:include page="/WEB-INF/jsp/allJavaScriptFiles.jsp" flush="true"></jsp:include> --%>
 
 
 
 <c:forEach var="css" items="${stylesheets}">
        <link rel="stylesheet" type="text/css" href="<c:url value="${css}"/>">
    </c:forEach>
</head>
<body>
<div style="margin: 0px 0px 0px 0px;"id="mainBodyDiv">
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
    <script src="http://code.highcharts.com/highcharts.js"></script>
</body>
</html>