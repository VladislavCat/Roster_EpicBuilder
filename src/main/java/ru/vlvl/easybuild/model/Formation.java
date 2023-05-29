package ru.vlvl.easybuild.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Table(name = "formations")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "formation_id", nullable = false)
    private int id;
    @ManyToOne
    @JoinColumn(name = "army_id")
    private Army army;
    private String name;
    @Column(name = "type_formation")
    private String type;
    @OneToMany(mappedBy = "formation")
    private Set<DetailFormation> detailFormationSet = new java.util.LinkedHashSet<>();
}
