package com.kmss.shop.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.kmss.shop.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{	
	  List<Product> findByApprovalsStatus(String status);
	  
	  
	  @Query("SELECT p FROM Product p " +
	           "WHERE (:productName IS NULL OR p.name LIKE %:productName%) " +
	           "AND (:minPrice IS NULL OR p.price >= :minPrice) " +
	           "AND (:maxPrice IS NULL OR p.price <= :maxPrice) " +
	           "AND (:minPostedDate IS NULL OR p.postedDate >= :minPostedDate) " +
	           "AND (:maxPostedDate IS NULL OR p.postedDate <= :maxPostedDate)")
	    List<Product> findProductsByCriteria(
	            String productName,
	            Double minPrice,
	            Double maxPrice,
	            LocalDateTime minPostedDate,
	            LocalDateTime maxPostedDate);
}
