# Quiz 02

# GitHub link


## Part 01
# Create a database named websyslab8.
Created in phpmyadmin.
USE websyslab8;

# Create a table named courses.
CREATE TABLE courses (
crn INT(11) PRIMARY KEY,
prefix VARCHAR(4) NOT NULL,
number SMALLINT(4) NOT NULL,
title VARCHAR(255) NOT NULL
) COLLATE utf8_unicode_ci;
Query OK, 0 rows affected (0.166 sec)

# Create a table named students.
CREATE TABLE students (
rin INT(9) PRIMARY KEY,
rcsID CHAR(7),
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
alias VARCHAR(100) NOT NULL,
phone INT(10)
) COLLATE utf8_unicode_ci;
Query OK, 0 rows affected (0.038 sec)

## Part 02

# 1. Add address fields (street, city, state, zip) to the students table
ALTER TABLE students ADD street VARCHAR(255), ADD city VARCHAR(255), ADD state CHAR(2), ADD zip CHAR(5);
Query OK, 0 rows affected (0.056 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 2. Add section and year fields to the courses table
ALTER TABLE courses ADD section VARCHAR(2), ADD year INT(4);
Query OK, 0 rows affected (0.033 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 3. CREATE a grades table containing ■ id (int primary key, auto increment) ■ crn (foreign key) ■ rin (foreign key) ■ grade (int 3 not null)
CREATE TABLE grades (
PRIMARY KEY AUTO_INCREMENT,
id INT PRIMARY KEY AUTO_INCREMENT,
crn INT(11),
rin INT(9),
grade INT(3) NOT NULL,
FOREIGN KEY (crn) REFERENCES courses(crn),
FOREIGN KEY (rin) REFERENCES students(rin)
) COLLATE utf8_unicode_ci;
Query OK, 0 rows affected (0.038 sec)

# 4. INSERT at least 4 courses into the courses table
INSERT INTO courses (crn, prefix, number, title, section, year) VALUES
(36500, 'CSCI', 2300, 'Introduction to Algorithms', '07', 2025),
(12345, 'CSCI', 1200, 'Data Structures', '02', 2024),
(36572, 'ITWS', 4500, 'Web Science Systems Development', '02', 2025),
(06767, 'AURA', 1100, 'Introduction to Mogging', '01', 2049);
Query OK, 4 rows affected (0.055 sec)
Records: 4  Duplicates: 0  Warnings: 0

# 5. INSERT at least 4 students into the students table
INSERT INTO students (rin, rcsID, first_name, last_name, alias, phone, street, city, state, zip) VALUES
(661122334, 'sixc', 'Cayde', 'Six', 'Cayde', 1171234567, '1 Hunter Vanguard', 'Last City', 'BR', '12180'),
(662244668, 'ferrosf', 'Felwinter', 'Ferroson', 'Lord Felwinter', 1181234567, 'Felwinter Peak', 'Old Russia', 'RU', '11220'),
(663355779, 'bradsha', 'Alexander', 'Bradshaw', 'Xander', 1234567890, '67 Osprey Rue', 'Troy', 'NY', '12180'),
(664466880, 'bingus', 'Shakira', 'Bingu', 'Bingus', 1987654321, '285 Fulton St', 'New York', 'NY', '10007');
Query OK, 4 rows affected (0.009 sec)
Records: 4  Duplicates: 0  Warnings: 0

# 6. ADD 10 grades into the grades table
I assume this meant INSERT and not ADD?
INSERT INTO grades (crn, rin, grade) VALUES
(36500, 662244668, 100), 
(36500, 663355779, 99), 
(06767, 662244668, 98),
(06767, 661122334, 97), 
(06767, 664466880, 96), 
(36572, 664466880, 85),
(36572, 663355779, 80), 
(12345, 662244668, 79),
(12345, 663355779, 76), 
(12345, 661122334, 67);
Query OK, 10 rows affected (0.010 sec)
Records: 10  Duplicates: 0  Warnings: 0

# 7. list all students in the following sequences; in alphabetical order by rin, last name, RCSid, and firstname
SELECT * FROM students ORDER BY rin;
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| rin       | rcsID   | first_name | last_name | alias          | phone      | street            | city       | state | zip   |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| 661122334 | sixc    | Cayde      | Six       | Cayde          | 1171234567 | 1 Hunter Vanguard | Last City  | BR    | 12180 |
| 662244668 | ferrosf | Felwinter  | Ferroson  | Lord Felwinter | 1181234567 | Felwinter Peak    | Old Russia | RU    | 11220 |
| 663355779 | bradsha | Alexander  | Bradshaw  | Xander         | 1234567890 | 67 Osprey Rue     | Troy       | NY    | 12180 |
| 664466880 | bingus  | Shakira    | Bingu     | Bingus         | 1987654321 | 285 Fulton St     | New York   | NY    | 10007 |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
4 rows in set (0.001 sec)

SELECT * FROM students ORDER BY last_name;
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| rin       | rcsID   | first_name | last_name | alias          | phone      | street            | city       | state | zip   |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| 664466880 | bingus  | Shakira    | Bingu     | Bingus         | 1987654321 | 285 Fulton St     | New York   | NY    | 10007 |
| 663355779 | bradsha | Alexander  | Bradshaw  | Xander         | 1234567890 | 67 Osprey Rue     | Troy       | NY    | 12180 |
| 662244668 | ferrosf | Felwinter  | Ferroson  | Lord Felwinter | 1181234567 | Felwinter Peak    | Old Russia | RU    | 11220 |
| 661122334 | sixc    | Cayde      | Six       | Cayde          | 1171234567 | 1 Hunter Vanguard | Last City  | BR    | 12180 |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
4 rows in set (0.005 sec)

SELECT * FROM students ORDER BY rcsID;
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| rin       | rcsID   | first_name | last_name | alias          | phone      | street            | city       | state | zip   |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| 664466880 | bingus  | Shakira    | Bingu     | Bingus         | 1987654321 | 285 Fulton St     | New York   | NY    | 10007 |
| 663355779 | bradsha | Alexander  | Bradshaw  | Xander         | 1234567890 | 67 Osprey Rue     | Troy       | NY    | 12180 |
| 662244668 | ferrosf | Felwinter  | Ferroson  | Lord Felwinter | 1181234567 | Felwinter Peak    | Old Russia | RU    | 11220 |
| 661122334 | sixc    | Cayde      | Six       | Cayde          | 1171234567 | 1 Hunter Vanguard | Last City  | BR    | 12180 |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
4 rows in set (0.001 sec)

SELECT * FROM students ORDER BY first_name;
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| rin       | rcsID   | first_name | last_name | alias          | phone      | street            | city       | state | zip   |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
| 663355779 | bradsha | Alexander  | Bradshaw  | Xander         | 1234567890 | 67 Osprey Rue     | Troy       | NY    | 12180 |
| 661122334 | sixc    | Cayde      | Six       | Cayde          | 1171234567 | 1 Hunter Vanguard | Last City  | BR    | 12180 |
| 662244668 | ferrosf | Felwinter  | Ferroson  | Lord Felwinter | 1181234567 | Felwinter Peak    | Old Russia | RU    | 11220 |
| 664466880 | bingus  | Shakira    | Bingu     | Bingus         | 1987654321 | 285 Fulton St     | New York   | NY    | 10007 |
+-----------+---------+------------+-----------+----------------+------------+-------------------+------------+-------+-------+
4 rows in set (0.000 sec)

# 8. list all students rin, name and address if their grade in any course was higher than a 90
SELECT s.rin, s.first_name, s.last_name, s.street, s.city, s.state, s.zip
FROM students s
JOIN grades g on g.rin = s.rin
WHERE g.grade > 90;
+-----------+------------+-----------+-------------------+------------+-------+-------+
| rin       | first_name | last_name | street            | city       | state | zip   |
+-----------+------------+-----------+-------------------+------------+-------+-------+
| 661122334 | Cayde      | Six       | 1 Hunter Vanguard | Last City  | BR    | 12180 |
| 662244668 | Felwinter  | Ferroson  | Felwinter Peak    | Old Russia | RU    | 11220 |
| 662244668 | Felwinter  | Ferroson  | Felwinter Peak    | Old Russia | RU    | 11220 |
| 663355779 | Alexander  | Bradshaw  | 67 Osprey Rue     | Troy       | NY    | 12180 |
| 664466880 | Shakira    | Bingu     | 285 Fulton St     | New York   | NY    | 10007 |
+-----------+------------+-----------+-------------------+------------+-------+-------+
5 rows in set (0.061 sec)

# 9. list out the average grade in each course
SELECT AVG(grade) FROM grades;
+------------+
| AVG(grade) |
+------------+
|    87.7000 |
+------------+
1 row in set (0.005 sec)
This tells me the average grade but not for each course.

SELECT
c.title,
AVG(g.grade)
FROM
courses c
JOIN
grades g ON c.crn = g.crn
GROUP BY
c.crn, c.title;
+---------------------------------+--------------+
| title                           | AVG(g.grade) |
+---------------------------------+--------------+
| Introduction to Mogging         |      97.0000 |
| Data Structures                 |      74.0000 |
| Introduction to Algorithms      |      99.5000 |
| Web Science Systems Development |      82.5000 |
+---------------------------------+--------------+
4 rows in set (0.160 sec)

# 10. list out the number of students in each course
SELECT COUNT(DISTINCT rin) FROM grades;
+---------------------+
| COUNT(DISTINCT rin) |
+---------------------+
|                   4 |
+---------------------+
1 row in set (0.022 sec)
This tells me how many students there are total but doesn't tell me the numbers for each course.

SELECT crn, 
COUNT(1)
FROM grades
GROUP BY 1;
+-------+----------+
| crn   | COUNT(1) |
+-------+----------+
|  6767 |        3 |
| 12345 |        3 |
| 36500 |        2 |
| 36572 |        2 |
+-------+----------+
4 rows in set (0.002 sec)