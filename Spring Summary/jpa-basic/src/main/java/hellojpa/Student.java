package hellojpa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "STUDENT")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "STUDENT_GENERATOR")
    private Long id;

    private int age;

    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "student")
    private List<Join> joins = new ArrayList<>();
}
