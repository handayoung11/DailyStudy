package hello.core.discount;

import hello.core.member.Grade;
import hello.core.member.Member;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class RateDiscountPolicyTest {
    DiscountPolicy rate = new RateDiscountPolicy();

    @Test
    @DisplayName("VIP는 10% 할인이 적용되어야 한다")
    void discount() {
        Member member = new Member(1L, "memberVIP", Grade.VIP);
        int price = 20000;

        int discount = rate.discount(member, price);
        assertThat(price * 0.1).isEqualTo(discount);
    }

    @Test
    @DisplayName("VIP가 아니면 할인이 적용되지 않아야 한다.")
    void vip_x() {
        Member member = new Member(2L, "memberBasic", Grade.BASIC);
        int price = 20000;

        int discount = rate.discount(member, price);
        assertThat(discount).isEqualTo(0);
    }
}