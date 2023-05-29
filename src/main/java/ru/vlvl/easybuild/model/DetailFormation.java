package ru.vlvl.easybuild.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Table(name = "formation_detail")
@Entity
@Getter
@Setter
public class DetailFormation {
    @Id
    @Column(name = "formation_detail_id", nullable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @Column(name = "formation_detail_name")
    private String name;
    @Column(name = "unit_trait")
    private String trait;
    private int price;
    private Integer qty;
    private Integer min;
    private Integer max;
    @ManyToOne
    @JoinColumn(name = "id_formation")
    private Formation formation;
    @ManyToMany
    @JoinTable(name = "upgrade_formation",
            joinColumns =
                    { @JoinColumn(name = "formation_detail_id")},
            inverseJoinColumns = { @JoinColumn(name = "upgrade_id")}
    )
    private Set<Upgrade> upgrades = new java.util.HashSet<>();

    @Override
    public String toString() {
        return "DetailFormation{"
                + "id=" + id
                + ", name='" + name + '\''
                + ", trait='" + trait + '\''
                + ", price=" + price
                + ", qty=" + qty
                + ", min=" + min
                + ", max=" + max
                + ", upgrades=" + upgrades
                + '}';
    }
}
