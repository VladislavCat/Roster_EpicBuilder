package ru.vlvl.easybuild.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.vlvl.easybuild.service.ArmyService;
import ru.vlvl.easybuild.service.FormationService;

@Controller
@AllArgsConstructor
public class ArmyController {
    private final ArmyService armyService;
    private final FormationService formationService;

    @GetMapping("/main")
    public String choiceArmy(Model model) {
        formationService.findAll().forEach(System.out::println);
        model.addAttribute("formations", formationService.findAll());
        return "main";
    }

}
