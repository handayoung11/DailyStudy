package hellojpa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity //꼭 넣어야 된다. 이 Entity Annotation이 붙어있어야 JPA가 관리한다.
@Table(name = "MEMBER") //Table명과 클래스명이 같으면 생략이 가능하다.
//@SequenceGenerator(name="MEMBER_SEQ_GENERATOR", sequenceName = "MEMBER_SEQ", initialValue = 1, allocationSize = 50)
@TableGenerator(name="MEMBER_SEQ_GENERATOR", table="MY_SEQUENCES", pkColumnValue = "MEMBER_SEQ")
public class Member {
    @Id //PK라는 것을 명시해주는 Annotation; 필수
    @GeneratedValue
    @Column(name = "MEMBER_ID")
    private Long id;

    @Column(name = "USERNAME")
    private String username;

    @ManyToOne
    @JoinColumn(name = "TEAM_ID")
    private Team team;

    @OneToOne
    @JoinColumn(name = "LOCKER_ID")
    private Locker locker;

}
