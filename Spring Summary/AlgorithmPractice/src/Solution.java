import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {
//    정렬 K번째 수
//    https://programmers.co.kr/learn/courses/30/lessons/42748?language=java
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        List<Integer> list = Arrays.stream(array).boxed().collect(Collectors.toList());

        int i = 0;
        for(int[] c : commands) {
            List<Integer> cutList = list.subList(c[0] - 1, c[1]);
            List<Integer> sortedList = cutList.stream().sorted().collect(Collectors.toList());
            answer[i] = sortedList.get(c[2] - 1);
//            System.out.println("sortedList = " + sortedList);
            i++;
        }
        return answer;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        solution.solution(new int[] {1,5,2,6,3,7,4}, new int[][]{{2,5,3}, {4,4,1}, {1,7,3}});
    }
}
