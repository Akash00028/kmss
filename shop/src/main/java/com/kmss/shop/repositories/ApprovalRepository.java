package com.kmss.shop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kmss.shop.entities.Approval;

public interface ApprovalRepository extends JpaRepository<Approval, Long>{
}
