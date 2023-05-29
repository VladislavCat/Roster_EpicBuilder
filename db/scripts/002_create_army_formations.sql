create table if not exists armies_formations (
    id serial primary key,
    army int references armys(id_army),
    formation int references formations(formation_id)
);