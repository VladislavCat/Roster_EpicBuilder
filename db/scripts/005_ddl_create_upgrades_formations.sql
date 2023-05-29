create table if not exists upgrade_formation (
    id serial primary key,
    formation_detail_id int references formation_detail(formation_detail_id),
    upgrade_id int references upgrades(upgrade_id)
);