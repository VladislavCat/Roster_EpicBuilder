package ru.vlvl.easybuild.repository;

import lombok.AllArgsConstructor;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;
import ru.vlvl.easybuild.model.Army;

import java.util.List;

@Repository
@AllArgsConstructor
public class ArmyRepository {
    private final CrudRepository cr;

    public List<Army> armies() {
        return cr.query("select distinct(a) from Army a left join fetch " +
                "a.formations f left join fetch f.detailFormationSet dfs left join fetch dfs.upgrades",
                Army.class);
    }
}
