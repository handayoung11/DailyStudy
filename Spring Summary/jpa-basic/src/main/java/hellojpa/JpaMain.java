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
//            추가
//            Member member = new Member();
//            member.setId(1L);
//            member.setName("code-mania");
//            em.persist(member);

//            Member findMember = em.find(Member.class, 1L); // 조회
//            findMember.setName("code-lover"); // 수정
            List<Member> result = em.createQuery("select m from Member as m", Member.class).getResultList();
            for (Member member : result) {
                System.out.println("member.getName() = " + member.getName());
            }
//            em.remove(findMember); // 삭제
            tx.commit(); // 커밋(트랜잭션 끝)
        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close(); //사용 후 반드시 닫아줘야 한다
        }
        emf.close(); //애플리케이션이 끝나면 EntityManagerFactory를 닫아줘야 한다.
    }
}
