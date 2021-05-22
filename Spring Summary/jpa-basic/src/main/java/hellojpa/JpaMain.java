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
            Club coding = new Club();
            coding.setName("프로그래밍부");
            coding.setDescription("재밌게 같이 코딩해봐요~~~");
            em.persist(coding);

            Club swim = new Club();
            swim.setName("수영부");
            swim.setDescription("첨벙첨벙 즐거운 수영시간~~~");
            em.persist(swim);

            Student codeMania = new Student();
            codeMania.setName("code-mania");
            codeMania.setAge(21);
            em.persist(codeMania);

            Join toCoding = new Join();
            toCoding.setClub(coding);
            toCoding.setStudent(codeMania);
            em.persist(toCoding);

            Join toSwim = new Join();
            toSwim.setClub(swim);
            toSwim.setStudent(codeMania);
            em.persist(toSwim);

            System.out.println("stu = " + codeMania.getJoins().size());
            tx.commit();
        } catch (Exception e) {
            e.printStackTrace();
            tx.rollback();
        } finally {
            em.close();
        }
        emf.close();
    }
}
