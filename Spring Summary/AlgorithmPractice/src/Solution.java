import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

class Solution {

//    H-Index
//    https://programmers.co.kr/learn/courses/30/lessons/42747

    public int solution(int[] citations) {
        int size = citations.length;
        int max = Collections.max(Arrays.stream(citations).boxed().collect(Collectors.toList()));
        int answer = 0;

        for(int h = max; h >= 0; h--) {
            int quote = 0;
            System.out.println("c = " + h);
            for(int j : citations) if(j >= h) quote++;
            if(quote >= h && size - quote <= h) {
                answer = h;
                break;
            }
        }

        return answer;
    }
}