package com.example.loginadmindashboard.repository;

import com.example.loginadmindashboard.model.Availability;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
    List<Availability> findByAgentId(Long agentId);

    boolean existsByAgentIdAndDayAndStartTimeAndEndTime(Long agentId, String day, String startTime, String endTime);
}
