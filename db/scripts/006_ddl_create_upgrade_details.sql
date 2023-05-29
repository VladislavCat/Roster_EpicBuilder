create table if not exists upgrade_detail (
    detail_id serial primary key,
    detail_name VARCHAR,
    cost int,
    upgrade_id int references upgrades(upgrade_id),
    limit_qty int,
    action_key VARCHAR(10)
);
