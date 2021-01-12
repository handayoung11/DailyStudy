package jpabook.jpashop.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jpabook.jpashop.domain.*;
import jpabook.jpashop.domain.item.Book;
import jpabook.jpashop.domain.item.Item;
import jpabook.jpashop.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest
@Transactional
public class JsonTest {
    @Autowired MemberService memberService;
    @Autowired
    OrderRepository orderRepository;
    @Autowired ItemService itemService;

    @Test
    public void MemberAndOrderToJson() {
        Member memberA = new Member();
        memberA.setName("memberA");
        memberService.join(memberA);

        Category category = new Category();
        category.setName("Book");

        Item book = new Book();
        book.addStock(1000);
        book.setName("book");
        book.setPrice(1000);

        book.getCategories().add(category);

        itemService.saveItem(book);

        OrderItem item = OrderItem.createOrderItem(book, 1000, 10);
        
        Delivery delivery = new Delivery();
        Address address = new Address("인천", "1가", "어딘가");
        delivery.setAddress(address);
        delivery.setStatus(DeliveryStatus.COMP);
        Order order = Order.createOrder(memberA, delivery, item);
        orderRepository.save(order);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String memberAJson = mapper.writeValueAsString(memberA);
            System.out.println("memberAJson = " + memberAJson);
            String orderJson = mapper.writeValueAsString(order);
            System.out.println("orderJson = " + orderJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            fail();
        }
    }
}

