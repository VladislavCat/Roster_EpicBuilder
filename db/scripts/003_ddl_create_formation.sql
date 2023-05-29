create table if not exists formations (
    formation_id serial primary key,
    army_id int references armys(id_army),
    name VARCHAR,
    type_formation VARCHAR
);
