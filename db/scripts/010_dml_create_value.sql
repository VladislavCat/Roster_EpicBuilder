insert into armys(army_name) values('Dark Angels');
insert into formations(army_id, name, type_formation) values(1,'Legion Tactical Detachment', 'Line Formation');
insert into formation_detail(formation_detail_name, unit_trait, price, qty, id_formation) values('8 Tactical Squads units', '-', 275, 8, 1);
insert into formation_detail(formation_detail_name, unit_trait, price, qty, id_formation) values('8 Despoiler Squads units', '-', 275, 8, 1);
insert into upgrades(name) values('Standard Transport');
insert into upgrade_detail(detail_name, cost, upgrade_id, limit_qty, action_key) values('Rhino', 0, 1, 6, 'ADD');

