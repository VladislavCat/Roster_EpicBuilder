package ru.vlvl.easybuild.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "upgrades")
@Entity
public class Upgrade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "upgrade_id")
    private int id;
    private String name;
    @OneToMany(mappedBy = "upgrade")
    private Set<DetailUpgrades> detailUpgradesSet = new java.util.HashSet<>();
}
