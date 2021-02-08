package hellojpa;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //꼭 넣어야 된다. 이 Entity Annotation이 붙어있어야 JPA가 관리한다.
@Table(name = "MEMBER") //Table명과 클래스명이 같으면 생략이 가능하다.
public class Member {
    @Id //PK라는 것을 명시해주는 Annotation; 필수
    private Long id;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
