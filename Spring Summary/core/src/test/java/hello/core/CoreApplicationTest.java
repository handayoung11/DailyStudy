package hello.core;

import hello.core.member.MemberRepository;
import hello.core.order.OrderServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CoreApplicationTest {

	@Autowired
	MemberRepository memberRepository;
	@Autowired
	OrderServiceImpl orderService;

	@Test
	void contextLoads() {
		System.out.println("memberRepository = " + memberRepository);
		System.out.println("orderService.getMemberRepository() = " + orderService.getMemberRepository());
		Assertions.assertThat(memberRepository).isSameAs(orderService.getMemberRepository());
	}

}
