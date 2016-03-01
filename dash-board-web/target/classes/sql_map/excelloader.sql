CREATE TABLE dashboard.transactionTable
(
  launch date NOT NULL,
  product character varying(100),
  company character varying(50),
  revenue float
  
);
COPY dashboard.transactionTable FROM 'C:/Users/samsung/Desktop/MOCK_DATA.csv'
WITH DELIMITER ','
CSV HEADER

DROP TABLE dashboard.transactiontable 
