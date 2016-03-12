DROP TABLE if EXISTS movies CASCADE;
DROP TABLE if EXISTS theaters CASCADE;
DROP TABLE if EXISTS xref CASCADE;

CREATE TABLE theaters (
  id SERIAL PRIMARY KEY UNIQUE,
  name VARCHAR(200)
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY UNIQUE,
  title VARCHAR(200),
  year VARCHAR(200),
  rating VARCHAR(100),
  director VARCHAR(200),
  actors VARCHAR(2000),
  plot VARCHAR(2000),
  poster VARCHAR(2500)
);

CREATE TABLE xref (
  movie_id INTEGER REFERENCES movies (id) ON DELETE CASCADE,
  theater_id INTEGER REFERENCES theaters (id) ON DELETE CASCADE,
  PRIMARY KEY (movie_id, theater_id)
);
