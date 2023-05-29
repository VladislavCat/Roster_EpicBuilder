package ru.vlvl.easybuild.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "upgrade_detail")
public class DetailUpgrades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detail_id")
    private int id;
    @Column(name = "detail_name")
    private String name;
    private int cost;
    @ManyToOne
    @JoinColumn(name = "upgrade_id")
    private Upgrade upgrade;
    @Column(name = "limit_qty")
    private int qty;
    @Column(name = "action_key")
    private String action;

    public Upgrade getUpgrade() {
        return upgrade;
    }
}
