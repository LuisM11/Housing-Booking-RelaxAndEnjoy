package com.pi.relaxandenjoy.Repository;

import com.pi.relaxandenjoy.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
}
