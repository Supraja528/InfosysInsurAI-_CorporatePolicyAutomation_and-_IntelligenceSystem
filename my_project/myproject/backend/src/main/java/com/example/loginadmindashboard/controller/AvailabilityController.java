package com.example.loginadmindashboard.controller;

import com.example.loginadmindashboard.model.Availability;
import com.example.loginadmindashboard.service.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/availability")
@CrossOrigin(origins = "http://localhost:3000")
public class AvailabilityController {
    @Autowired
    private AvailabilityService availabilityService;

    @GetMapping("/agent/{agentId}")
    public List<Availability> getAvailabilityByAgent(@PathVariable Long agentId) {
        return availabilityService.getAvailabilityByAgent(agentId);
    }

    @GetMapping("/{id}")
    public Availability getAvailabilityById(@PathVariable Long id) {
        return availabilityService.getAvailabilityById(id);
    }

    @PostMapping
    public Availability saveAvailability(@RequestBody Availability availability) {
        return availabilityService.saveAvailability(availability);
    }

    @DeleteMapping("/{id}")
    public void deleteAvailability(@PathVariable Long id) {
        availabilityService.deleteAvailability(id);
    }
}
