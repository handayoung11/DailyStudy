package hellojpa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity @Table(name = "`JOIN`")
@Getter @Setter
public class Join {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "club")
    private Club club;

    @ManyToOne
    @JoinColumn(name = "student")
    private Student student;
}
