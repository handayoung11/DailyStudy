package hellojpa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Setter
@Getter
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "CLUB_GENERATOR")
    private Long id;
    private String name;
    private String description;
}
