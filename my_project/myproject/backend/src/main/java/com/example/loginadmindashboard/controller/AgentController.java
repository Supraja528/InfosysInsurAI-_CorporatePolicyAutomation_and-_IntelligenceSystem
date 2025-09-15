package com.example.loginadmindashboard.controller;

import com.example.loginadmindashboard.model.Agent;
import com.example.loginadmindashboard.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/agents")
@CrossOrigin(origins = "http://localhost:3000")
public class AgentController {
    @Autowired
    private AgentService agentService;

    @GetMapping
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @PostMapping
    public Agent saveAgent(@RequestBody Agent agent) {
        return agentService.saveAgent(agent);
    }
}
