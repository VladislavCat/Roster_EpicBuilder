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
@Table(name = "armys")
@Entity
public class Army {
    @Id
    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
    @Column(name = "id_army", nullable = false)
    private int id;
    @Column(name = "army_name")
    private String name;
    @OneToMany(mappedBy = "army")
    private Set<Formation> formations = new java.util.LinkedHashSet<>();

}
