CREATE TABLE surveys
(
    id uuid DEFAULT uuid_generate_v4 (),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(320) NOT NULL,
    createdAt timestamp default now(),
    PRIMARY KEY (id)
);