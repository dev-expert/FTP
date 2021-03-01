create database ass;
create table employee(
Ssn int primary key not null auto_increment,
Name varchar(50) not null,
Bdate varchar(50) not null,
Address varchar(50) not null,
Salary int,
Sex varchar(1) not null
);

drop table department;
select * from employee;

create table department(
Ssn int primary key not null auto_increment,
Name varchar(50) not null,
location varchar(50) not null,
number int
);

create table dependent(
Ssn int primary key not null auto_increment,
Name varchar(50) not null,
Bdate varchar(50) not null,
relationship varchar(50) not null,
Sex varchar(1) not null
);

create table project(
Name varchar(50) not null,
location varchar(50) not null,
number int
);

Alter table dependent
 add foreign key(Ssn) 
 references employee(Ssn);