package hellojpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        //애플리케이션 로딩 시점에 DB당 딱 하나만 만들어야 하며, 애플리케이션 전체에서 공유한다.
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        //트랜잭션마다 EntityManager를 만들어줘야 한다.
        EntityManager em = emf.createEntityManager(); // 고객요청 시마다 생성(쓰레드 간에 공유 X)

        EntityTransaction tx = em.getTransaction();
        tx.begin(); //트랜잭션 시작

        try {
            Club club = new Club();
            club.setName("프로그래밍부");
            club.setDescription("재밌게 같이 코딩해봐요~~~");
            em.persist(club);

            Student codeMania = new Student();
            codeMania.setName("code-mania");
            codeMania.setAge(21);
            codeMania.setClub(club);
            em.persist(codeMania);

            Student codeLover = new Student();
            codeLover.setName("code-lover");
            codeLover.setAge(21);
            codeLover.setClub(club);
            em.persist(codeLover);

            em.flush();
            em.clear();

            Club findClub = em.find(Club.class, club.getId());
            List<Student> students = findClub.getStudents();
            for(Student s:students) System.out.println(club.getName() + ": " + s.getName());
            tx.commit();
        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close();
        }
        emf.close();
    }
}
