package ru.vlvl.easybuild.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.vlvl.easybuild.model.Formation;
import ru.vlvl.easybuild.repository.FormationRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class FormationService {
    private final FormationRepository formationRepository;

    public List<Formation> findAll() {
        return formationRepository.findAll();
    }

    public List<Formation> findFormationsByArmy(int id) {
        return formationRepository.findById(id);
    }

}
