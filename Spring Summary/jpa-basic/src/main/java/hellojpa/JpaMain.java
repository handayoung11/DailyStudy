package hellojpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class JpaMain {
    public static void main(String[] args) {
        //애플리케이션 로딩 시점에 DB당 딱 하나만 만들어야 하며, 애플리케이션 전체에서 공유한다.
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        //트랜잭션마다 EntityManager를 만들어줘야 한다.
        EntityManager em = emf.createEntityManager(); // 고객요청 시마다 생성(쓰레드 간에 공유 X)

        EntityTransaction tx = em.getTransaction();
        tx.begin(); //트랜잭션 시작

        try {
            Team team = new Team();
            team.setName("TeamA");
            em.persist(team);

            Member member = new Member();
            member.setUsername("member1");
            member.setTeam(team);
            em.persist(member);

            em.flush();
            em.clear();

            Member findMember = em.find(Member.class, member.getId());
            Team findTeam = findMember.getTeam();
            System.out.println("findTeam = " + findTeam.getName());

            tx.commit();
        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close(); //사용 후 반드시 닫아줘야 한다
        }
        emf.close(); //애플리케이션이 끝나면 EntityManagerFactory를 닫아줘야 한다.
    }
}
