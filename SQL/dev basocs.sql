CREATE Table `student`(
`name` varchar(15) Not null,
`regno` varchar(15) Not null,
`mobno` varchar(15) Not nULL,
pRIMARY KEY (`regno`)
);

CREATE table college(
`name` varchar(15) Not null,
`regno` varchar(15) Not null,
`mobno` varchar(15) Not nULL,
pRIMARY KEY (`regno`)
);

CREATE table `sys`.`library`(
`regno` varchar(15) Not null,
`book_name` varchar(15) Not null
);
select * from student;

select * from student;
describe student;

Alter table `mahendra`.`library`
 add foreign key(`regno`) 
 references `mahendra`.`student`(`regno`);

Insert into `student`(`name`,`regno`,`mobno`) values("AJAY","11702828","8318368388"),
("Swetank","11707818","8318368388"),("Lucky","11702794","8318368388");


Insert into `student`values("anmol","11702795","8318368388");
Insert into `library`(`regno`,`book_name`) values("11702793","DSA");
Insert into `library`(`regno`,`book_name`) values("11707818","Champak");