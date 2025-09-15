package com.example.loginadmindashboard.repository;

import com.example.loginadmindashboard.model.Agent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgentRepository extends JpaRepository<Agent, Long> {
	boolean existsByName(String name);
}
