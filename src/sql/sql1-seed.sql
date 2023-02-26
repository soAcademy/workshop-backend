INSERT INTO teachers (name, age) VALUES ('Kor', 41)
INSERT INTO public.teachers (name, age) VALUES ('Kor2', 42)

INSERT INTO teachers (name, age) VALUES ('Bin', 30);

INSERT INTO public.teachers (name, age) VALUES ('Bin2', 30);

INSERT INTO public.teachers (name, age) 
  VALUES 
    ('Bin3', 30),
    ('Bin4', 25),
    ('Bin5', 25);


INSERT INTO
  teachers (name, age)
VALUES
  ('Beau Clark', 33),
  ('Abra Smith', 52),
  ('Dane Small', 28),
  ('Piper West', 42),
  ('Zelda Floyd', 30),
  ('Roanna Dale', 29),
  ('Grady Hutchinson', 35),
  ('Alexis Herman', 52),
  ('Steven Watson', 59),
  ('Kieran Wyatt', 32);

INSERT INTO
  teachers (name, age)
VALUES
  ('Emma Gonzales', 54),
  ('Lois Christensen', 49),
  ('Brendan Hamilton', 29),
  ('Calvin Ruiz', 59),
  ('Armando Berger', 57),
  ('Raven Guthrie', 68),
  ('Leandra Mckee', 36),
  ('Angelica Hodges', 38),
  ('Herrod Holder', 62),
  ('Mohammad Burnett', 51);

INSERT INTO
  teachers (name, age)
VALUES
  ('Colby Armstrong', 35),
  ('Ivor Barnes', 58),
  ('Solomon Carlson', 34),
  ('Dolan Acevedo', 36),
  ('Axel Hoffman', 69),
  ('Hilda Dodson', 26),
  ('Colby Hopper', 53),
  ('Madonna Nunez', 62),
  ('Nelle Ramsey', 38),
  ('Eve Roach', 67);

INSERT INTO
  teachers (name, age)
VALUES
  ('Thane Padilla', 39),
  ('Marsden Wilkinson', 31),
  ('Mark Sanders', 50),
  ('Damian Wong', 52),
  ('Kyra Parrish', 34),
  ('Uta Forbes', 46),
  ('Darius Clayton', 51),
  ('Forrest French', 43),
  ('Tanek Byrd', 48),
  ('Inga Ramsey', 50);

INSERT INTO
  teachers (name, age)
VALUES
  ('Steven Moses', 39),
  ('Iliana Leblanc', 30),
  ('Plato Washington', 54),
  ('Branden Knox', 32),
  ('Yoko Tate', 42),
  ('Eagan Bryant', 62),
  ('Hoyt Barnes', 43),
  ('Camilla Jacobson', 32),
  ('Kibo Moon', 30),
  ('Carissa Houston', 54);

INSERT INTO
  teachers (name, age)
VALUES
  ('Richard Case', 34),
  ('Lamar Delaney', 32),
  ('Palmer English', 64),
  ('Quyn Huff', 34),
  ('Alden Galloway', 58),
  ('Brielle Meyer', 38),
  ('MacKenzie Stephens', 59),
  ('Perry Russo', 65),
  ('Ivor Underwood', 62),
  ('Lev Crane', 69);

INSERT INTO
  teachers (name, age)
VALUES
  ('Sage Guthrie', 44),
  ('Winter Tanner', 26),
  ('Quamar Sexton', 39),
  ('Ulysses Lester', 69),
  ('Gil Joyce', 52),
  ('Cedric Bryant', 41),
  ('Jena Haley', 46),
  ('Lunea Steele', 61),
  ('Quin Oneil', 55),
  ('Merritt Cash', 70);

INSERT INTO
  teachers (name, age)
VALUES
  ('Calista Hunter', 26),
  ('Hilary Holcomb', 55),
  ('Chandler Stokes', 45),
  ('Channing Acosta', 57),
  ('Scott Roth', 57),
  ('Darius Fletcher', 61),
  ('Norman Mullen', 58),
  ('Katelyn Gould', 53),
  ('Octavius Goodman', 58),
  ('Talon Golden', 33);

INSERT INTO
  teachers (name, age)
VALUES
  ('Nicholas Goodman', 44),
  ('Anastasia Taylor', 57),
  ('Nelle Copeland', 32),
  ('Dai Ortega', 67),
  ('Chase Cummings', 35),
  ('Amity Case', 42),
  ('May Beach', 42),
  ('Abdul Allison', 61),
  ('Hector Cash', 26),
  ('Alden Lambert', 40);

INSERT INTO
  teachers (name, age)
VALUES
  ('Erich Maldonado', 25),
  ('Ivan Mills', 65),
  ('Moses Bishop', 28),
  ('Colt Hall', 64),
  ('Olympia Leon', 65),
  ('Jenna Henson', 65),
  ('Malcolm Parker', 29),
  ('Adele Schwartz', 50),
  ('Dexter Welch', 61),
  ('Aidan Olson', 26);

--- members
INSERT INTO
  members (first_name, last_name, tel)
VALUES
  ('Alvin', 'Foreman', '09432146567'),
  ('Kristen', 'Stone', '07627763650'),
  ('Gary', 'Wall', '07866197146'),
  ('Hiram', 'George', '08172545243'),
  ('Herman', 'Berger', '09411145843'),
  ('Ezekiel', 'Woods', '04387596188'),
  ('Linda', 'Valenzuela', '02335776256'),
  ('Kerry', 'Pate', '08586242171'),
  ('Kathleen', 'Hunt', '01812863311'),
  ('Benedict', 'Pruitt', '02537794295');

INSERT INTO
  members (first_name, last_name, tel)
VALUES
  ('Robert', 'Emerson', '06845198580'),
  ('Orla', 'Curry', '00982493883'),
  ('Benedict', 'Butler', '04558931817'),
  ('Wyoming', 'Rodriquez', '04663163118'),
  ('Ulla', 'Duran', '06064553414'),
  ('Elaine', 'Tucker', '07950922124'),
  ('Ursula', 'Alford', '07888274842'),
  ('Troy', 'Fuentes', '02538774533'),
  ('Reed', 'Rowland', '02267852175'),
  ('Chiquita', 'Guy', '06058736133');

--- categories
INSERT INTO
  public.categories ("name")
VALUES
  ('dev'),
  ('management'),
  ('food');

--- courses
INSERT INTO
  public.courses (
    "name",
    price,
    start_date,
    end_date,
    student_max,
    categories_id,
    teachers_id
  )
VALUES
  (
    'full-stack-101 รอบที่ 1',
    12000,
    '2023-09-02',
    '2023-09-05',
    40,
    1,
    2
  ),
  (
    'full-stack-101 รอบที่ 2',
    20000,
    '2023-09-06',
    '2023-09-09',
    70,
    1,
    2
  ),
  (
    'flutter-101 รอบที่ 1',
    18000,
    '2023-09-06',
    '2023-09-09',
    40,
    1,
    3
  ),
  (
    'jira-101 รอบที่ 1',
    8000,
    '2023-09-02',
    '2023-09-05',
    80,
    2,
    7
  );

--- orders
INSERT INTO
  public.orders (price, courses_id, members_id)
VALUES
  (12000, 1, 1),
  (12000, 1, 2),
  (20000, 2, 1),
  (18000, 3, 4),
  (12000, 1, 4),
  (12000, 1, 5),
  (12000, 1, 6),
  (8000, 4, 8),
  (8000, 4, 10),
  (20000, 2, 11);

INSERT INTO
  public.orders (price, courses_id, members_id)
VALUES
  (20000, 2, 12),
  (20000, 2, 13),
  (20000, 2, 14),
  (20000, 2, 15),
  (20000, 2, 16);