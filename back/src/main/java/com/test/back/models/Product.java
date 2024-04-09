package com.test.back.models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "Product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String descripcion;

    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private double precio;

    @Column(nullable = false)
    private int stockDisponible;

    @Column(nullable = false)
    private String imagenURL;

    @ManyToOne
    @JoinColumn(name = "id_vendedor")
    private User vendedor;

    @OneToMany(mappedBy = "product")
    private List<CartElement> cartElementList;

    @OneToMany(mappedBy = "product")
    private List<OrdenElement> ordenElementList;


}
