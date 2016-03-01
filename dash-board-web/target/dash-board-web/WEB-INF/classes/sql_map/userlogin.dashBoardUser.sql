CREATE  TABLE userlogin.dashBoardUser(

userName character varying (100) NOT NULL,
userLogName character varying(100) NOT NULL,
userpassword character varying (50) NOT NULL,
userBirth Date,
userGender character varying(10),
CONSTRAINT userLogName_uid PRIMARY KEY(userLogName)
)

DROP TABLE userlogin.dashboarduser 