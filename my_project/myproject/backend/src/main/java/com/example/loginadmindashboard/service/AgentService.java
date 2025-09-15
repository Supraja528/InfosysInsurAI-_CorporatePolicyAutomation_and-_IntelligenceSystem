package com.example.loginadmindashboard.service;

import com.example.loginadmindashboard.model.Agent;
import com.example.loginadmindashboard.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AgentService {
    @Autowired
    private AgentRepository agentRepository;

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    public Agent saveAgent(Agent agent) {
        if (agentRepository.existsByName(agent.getName())) {
            throw new RuntimeException("Agent with this name already exists.");
        }
        return agentRepository.save(agent);
    }
}
