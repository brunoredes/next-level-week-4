CREATE TABLE users(
    id uuid DEFAULT uuid_generate_v4 (),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(320) UNIQUE NOT NULL,
    createdAt timestamp default now(),
    PRIMARY KEY(id)
);