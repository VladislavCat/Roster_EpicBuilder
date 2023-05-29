create table if not exists formation_detail (
    formation_detail_id serial primary key,
    formation_detail_name VARCHAR,
    unit_trait text,
    price int,
    qty int,
    min int,
    max int,
    id_formation int references formations(formation_id)
)