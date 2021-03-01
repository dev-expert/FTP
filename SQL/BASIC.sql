CREATE database Mahendra;
CREATE TABLE table2 (
    PersonID int ,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

select * from table1;

INSERT into table2(PersonID,
    LastName,
    FirstName,
    Address ,
    City ) VALUES (1,"mahi","mahi","mahi","mahi");
    
   ALTER TABLE table1
ADD Email varchar(255); 

ALTER TABLE table1 
DROP COLUMN PersonID;

DELETE FROM table2 WHERE LastName= 'mahi';