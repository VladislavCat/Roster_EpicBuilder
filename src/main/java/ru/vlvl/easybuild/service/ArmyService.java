package ru.vlvl.easybuild.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.vlvl.easybuild.model.Army;
import ru.vlvl.easybuild.repository.ArmyRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ArmyService {
    private final ArmyRepository armyRepository;

    public List<Army> findAll() {
        return armyRepository.findAll();
    }
}
