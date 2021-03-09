package hellojpa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name = "club")
    private Club club;
//    private Long club; // 원래 club Type
}
