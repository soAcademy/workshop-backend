
select * from courses where price >= 15000 and price < 19000
select * from courses where categories_id  = 1
select * from courses where categories_id  <> 1 --- ไมเท่ากับ 1
select * from courses where name ='jira-101 รอบที่ 1'
select * from courses where name like '%f%'
select * from courses where name like '%f%' or price <= 10000
select * from courses where name like '%f%' or price <= 10000 order by id desc
select id as new_id, name from courses
update teachers set name = 'Nor', age = '25' where id = 1;
select sum(price) as total_price from courses;
select sum(price) as total_price from courses where price >= 15000;
select count(price) as count_price from courses;
select avg (price) as count_price from courses;
select min (price) as min_price from courses;
slect max (price) as max_price from courses;

select c.*, t.id as teacher_id , t.name as teacher_name, t.age as teacher_age
from public.courses c 
inner join public.teachers t on c.teachers_id = t.id;