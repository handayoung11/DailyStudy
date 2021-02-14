package hellojpa;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity //꼭 넣어야 된다. 이 Entity Annotation이 붙어있어야 JPA가 관리한다.
@Table(name = "MEMBER") //Table명과 클래스명이 같으면 생략이 가능하다.
public class Member {
    @Id //PK라는 것을 명시해주는 Annotation; 필수
    private Long id;
    @Column(name = "name", nullable = false)
    private String username;
    private String department;
    private Integer age;
    @Enumerated(EnumType.STRING)
    private RoleType roleType;
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastModifiedDate;
    @Lob
    private Integer description;

    public Member(Long id, String name) {
        this.id = id;
        this.username = name;
    }
}
