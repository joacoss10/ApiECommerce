package com.test.back.repository;

import com.test.back.models.Orden;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Orden,Long> {
}
