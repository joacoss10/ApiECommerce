package com.test.back.repository;

import com.test.back.models.OrdenElement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderElementRepository extends JpaRepository <OrdenElement,Long>{
}
