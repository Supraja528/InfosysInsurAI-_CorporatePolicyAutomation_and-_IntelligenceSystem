
package com.example.loginadmindashboard.service;

import com.example.loginadmindashboard.model.Availability;
import com.example.loginadmindashboard.repository.AvailabilityRepository;
import com.example.loginadmindashboard.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AvailabilityService {

    @Autowired
    private AvailabilityRepository availabilityRepository;

    @Autowired
    private AgentRepository agentRepository;

    public List<Availability> getAvailabilityByAgent(Long agentId) {
        return availabilityRepository.findByAgentId(agentId);
    }

    public Availability saveAvailability(Availability availability) {
        // Validate required fields
        if (availability.getDay() == null || availability.getDay().trim().isEmpty() ||
            availability.getStartTime() == null || availability.getStartTime().trim().isEmpty() ||
            availability.getEndTime() == null || availability.getEndTime().trim().isEmpty()) {
            throw new RuntimeException("Day, start time, and end time are required.");
        }
        // Fetch the managed Agent entity from DB
        if (availability.getAgent() != null && availability.getAgent().getId() != null) {
            availability.setAgent(agentRepository.findById(availability.getAgent().getId()).orElse(null));
        }
        // Check for duplicate
        if (availability.getAgent() != null && availability.getAgent().getId() != null) {
            boolean exists = availabilityRepository.existsByAgentIdAndDayAndStartTimeAndEndTime(
                availability.getAgent().getId(),
                availability.getDay(),
                availability.getStartTime(),
                availability.getEndTime()
            );
            if (exists) {
                throw new RuntimeException("Duplicate availability for this agent, day, and time.");
            }
        }
        return availabilityRepository.save(availability);
    }

    public Availability getAvailabilityById(Long id) {
        return availabilityRepository.findById(id).orElse(null);
    }

    public void deleteAvailability(Long id) {
        availabilityRepository.deleteById(id);
    }
}
