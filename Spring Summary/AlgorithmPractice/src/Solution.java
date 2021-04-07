import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {
//    정렬 가장 큰 수
//    https://programmers.co.kr/learn/courses/30/lessons/42746

    class StrComparator implements Comparator<String> {
        @Override
        public int compare(String o1, String o2) {
            int sum1 = Integer.parseInt(o1 + o2);
            int sum2 = Integer.parseInt(o2 + o1);
            if(sum1 > sum2) return 1;
            if(sum1 == sum2) return 0;
            else return -1;
        }
    }

    public String solution(int[] numbers) {
        StringBuilder answer = new StringBuilder();
        List<String> list = Arrays.stream(numbers).mapToObj(i -> i + "").sorted(new StrComparator()).collect(Collectors.toList());
        Collections.reverse(list);
        list.forEach(n -> answer.append(n));
        if(answer.substring(0, 1).equals("0")) return "0";
        return answer.toString();
    }
}
