<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
   pageEncoding="ISO-8859-1"%>
<%@include file="/WEB-INF/views/taglibs/taglibs.jsp"%> 
<%
   String isCompress = request.getParameter("compress");
   if("false".equals(isCompress)){
   %>
<c:set var="unCompress" value="true" property="java.lang.String"/>
<%}
   else{ %>
<c:set var="unCompress" value = "false" property="java.lang.String"/>
<%}%>
<c:choose>
   <c:when test="${unCompress =='false' }"> 
   <link type="txt/css" href=""/>
    <!-- Load individual files -->
      <jsp:include page="/WEB-INF/alljsfiles.jsp" flush="true"/>
      
   </c:when>
   <c:otherwise>
      <!-- Load single file -->
      <script type="text/javascript" src="js/appUtil-min.js"></script>
   </c:otherwise>
</c:choose>
<div>
</div>