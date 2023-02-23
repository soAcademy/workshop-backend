create table public.categories (
	id SERIAL NOT NULL,
	"name" TEXT,

  CONSTRAINT "categories_pk" PRIMARY KEY (id)
);

create table public.teachers (
	id SERIAL NOT NULL,
	"name" varchar,
	age INT,

  CONSTRAINT "teachers_pk" PRIMARY KEY (id)
);

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

create table public.members (
	id SERIAL NOT NULL,
	first_name TEXT,
	last_name TEXT,
  tel TEXT,

  CONSTRAINT "members_pk" PRIMARY KEY (id)
);

create table public.orders (
	id SERIAL NOT NULL,
  price FLOAT,
  courses_id INT NOT NULL,
  members_id INT NOT NULL,

  CONSTRAINT "orders_pk" PRIMARY KEY (id),
  FOREIGN KEY (courses_id) REFERENCES public.courses(id),
  FOREIGN KEY (members_id) REFERENCES public.members(id)
);