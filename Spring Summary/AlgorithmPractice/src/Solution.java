import java.util.Arrays;
import java.util.stream.Collectors;

public class Solution {
//    정렬 가장 큰 수
//    https://programmers.co.kr/learn/courses/30/lessons/42746

    public String solution(int[] numbers) {
        StringBuilder answer = new StringBuilder();
        Arrays.stream(numbers).mapToObj(i -> i + "")
                .sorted((o1, o2) -> {
                    int sum1 = Integer.parseInt(o1 + o2);
                    int sum2 = Integer.parseInt(o2 + o1);
                    return sum1 > sum2?-1:sum1==sum2?0:1;
                }).collect(Collectors.toList())
                .forEach(n -> answer.append(n));
        return answer.charAt(0) == '0'?"0":answer.toString();
    }
}
