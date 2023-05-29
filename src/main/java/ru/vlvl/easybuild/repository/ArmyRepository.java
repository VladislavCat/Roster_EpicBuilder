package ru.vlvl.easybuild.repository;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import ru.vlvl.easybuild.model.Army;

import java.util.List;

@Repository
@AllArgsConstructor
public class ArmyRepository {
    private final CrudRepository cr;

    public List<Army> findAll() {
        return cr.query("from Army", Army.class);
    }

}
