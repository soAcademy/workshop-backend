create table public.categories (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" varchar
);

create table public.teachers (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" varchar,
	age int4
);

create table public.courses (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" varchar,
	price numeric,
	"start_date" date NOT NULL,
	end_date date NOT NULL,
	student_max int4 NOT NULL,
	categories_id int4 NOT NULL,
	teachers_id int4 NOT NULL,
	FOREIGN KEY (categories_id) REFERENCES public.categories(id),
	FOREIGN KEY (teachers_id) REFERENCES public.teachers(id)
);

create table public.members (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name varchar,
	last_name varchar,
    tel varchar
);

create table public.orders (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    price numeric,
    courses_id int4 NOT NULL,
    members_id int4 NOT NULL,
    FOREIGN KEY (courses_id) REFERENCES public.courses(id),
    FOREIGN KEY (members_id) REFERENCES public.members(id)
);