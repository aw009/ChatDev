'''
This file contains the SQL statements to create the required database schema.
'''
CREATE TABLE process (
    id SERIAL PRIMARY KEY,
    description TEXT,
    diagram TEXT
);