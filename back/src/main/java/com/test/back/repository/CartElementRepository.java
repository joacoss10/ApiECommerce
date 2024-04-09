package com.test.back.repository;

import com.test.back.models.CartElement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartElementRepository extends JpaRepository<CartElement,Long> {
}
