package ru.vlvl.easybuild.repository;

import lombok.AllArgsConstructor;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.stereotype.Repository;
import ru.vlvl.easybuild.model.Formation;

import java.util.List;
import java.util.Map;

@Repository
@AllArgsConstructor
public class FormationRepository {
    private final CrudRepository cr;

    public List<Formation> findAll() {
        return cr.query("from Formation", Formation.class);
    }

    public List<Formation> findById(int id) {
        return cr.query("from Formation where id = :fId", Formation.class, Map.of("fId", id));
    }

    public static void main(String[] args) {
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure().build();
        CrudRepository crudRepository = new CrudRepository(new MetadataSources(registry).buildMetadata().buildSessionFactory());
        FormationRepository formationRepository = new FormationRepository(crudRepository);
        formationRepository.findAll().forEach(System.out::println);
    }
}
