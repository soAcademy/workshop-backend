-- การดึงข้อมูลแบบดึงทั้งหมดจากไฟล์ชื่อ courses/orders
select * from courses;
select * from orders;

-- การดึงข้อมูลแบบเฉพาะเจาะจงจากไฟล์ชื่อ orders/courses
select id, price from orders;
select id, name, price from courses;

-- หาข้อมูลทั้งหมดจากไฟล์คอร์สที่ราคามากกว่าหรือเท่ากับหมื่นห้า (และที่ราคาน้อยกว่าหรือเท่ากับหมื่นเก้า)
select * from courses where price >= 15000; 
select * from courses where price >= 15000 and price <= 19000;
-- เลือกข้อมูลทั้งหมดจากไฟล์คอร์สที่ categories_id = 1 ()
select * from couress where categories_id = 1;
select * from courses where categories_id <> 1;
-- เลือกข้อมูลทั้งหมดจากไฟล์ Courses ที่ื่ชื่อว่า 'jira-101 รอบที่ 1'
select * from courses where name = 'jira-101 รอบที่ 1';
-- เลือกข้อมูลทั้งหมดที่มีคำนี้ ull อยู่ในคำของมัน (หรือราคาน้อยกว่าหรือเท่ากับ 10000)
select * from courses where name = like '%ull%';
select * from courses where name = like '%ull%' or price <= 10000;
-- เลือกข้อมูลทั้งหมดที่มีคำนี้ ull อยู่ในคำของมัน (หรือราคาน้อยกว่าหรือเท่ากับ 10000)แล้วก็เรียงลำดับจากมากไปน้อย
select * from courses where name = like '%full%' or price <= 10000 order by id desc;
-- เปลี่ยนชื่อ field ตอน output แบบชั่วคราวจาก id เป็น new_id
select id as new_id, name from courses;
-- ทำการ sum ราคา เป็น total_price จากไฟล์ courses (โดยเอาราคาที่มากกว่าหรือเท่ากับ 15000) แล้วก็ตั้งชื่อออกมาเป็น total_priceให้เราเห็น
select sum(price) as total_price from coures; 
select sum(price) as total_price from coures where price >= 15000;
-- แล้วก็ตั้งชื่อออกมาเป็น count_price/ avg/ min/ max ให้เราเห็น
select count(price) as count_price from coures;
select avg(price) as avg_price from coures;
select min(price) as min_price from coures;
select max(price) as max_price from coures;

-- เอาเฉพาะค่าที่เหมือนกันมา map ไว้บน Column เป็ฯเหมือนการหา intersect กัน
SELECT c.*, t.id AS teacher_id, t.name AS teacher_name, t.age as teacher_age
FROM public.courses as c 
INNER JOIN public.teachers t ON c.teachers_id = t.id;



-- Primary key มันซ้ำกันไม่ได้่ แต่ foreign key คือซ้ำกันได้
-- อันแรกสร้าง Table
create table public.categories (
	id SERIAL NOT NULL,
	"name" TEXT,

  CONSTRAINT "categories_pk" PRIMARY KEY (id)
);

-- อันที่สองสร้าง Table
create table public.teachers (
	id SERIAL NOT NULL,
	"name" varchar,
	age INT,

  CONSTRAINT "teachers_pk" PRIMARY KEY (id)
);

-- อันที่สามสร้าง Table
create table public.courses (
	id SERIAL NOT NULL,
	"name" TEXT,
	price FLOAT,
	"start_date" DATE NOT NULL,
	end_date DATE NOT NULL,
	student_max INT NOT NULL,
	categories_id INT NOT NULL,
	teachers_id INT NOT NULL,

  CONSTRAINT "courses_pk" PRIMARY KEY (id),
	FOREIGN KEY (categories_id) REFERENCES public.categories(id),
	FOREIGN KEY (teachers_id) REFERENCES public.teachers(id)
);

-- อันที่สี่สร้าง Table
create table public.members (
	id SERIAL NOT NULL,
	first_name TEXT,
	last_name TEXT,
  tel TEXT,

  CONSTRAINT "members_pk" PRIMARY KEY (id)
);

-- อันที่ห้าสร้าง Table
create table public.orders (
	id SERIAL NOT NULL,
  price FLOAT,
  courses_id INT NOT NULL,
  members_id INT NOT NULL,

  CONSTRAINT "orders_pk" PRIMARY KEY (id),
  FOREIGN KEY (courses_id) REFERENCES public.courses(id),
  FOREIGN KEY (members_id) REFERENCES public.members(id)
);