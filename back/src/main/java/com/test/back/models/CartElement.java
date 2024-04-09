package com.test.back.models;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "CartElement")
@Data
public class CartElement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;


    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;


    @Column(nullable = false)
    private int cantidad;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;
}
