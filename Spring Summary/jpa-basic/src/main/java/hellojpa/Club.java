package hellojpa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "CLUB_GENERATOR")
    private Long id;
    private String name;
    private String description;
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "clubs")
    private List<Student> students = new ArrayList<>();
}
