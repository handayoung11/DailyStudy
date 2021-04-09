import java.util.*;

class Solution {
//    완전탐색 > 소수찾기
//    https://programmers.co.kr/learn/courses/30/lessons/42839

    Set<Integer> set = new HashSet<>();

    public int solution(String numbers) {
        List<String> numberList = Arrays.asList(numbers.split(""));
        repeat("", numberList);
        return set.size();
    }

    public void repeat(String s, List<String> numbers) {
        for(int i = 0; i < numbers.size(); i++) {
            String s2 = s + numbers.get(i);
            ArrayList<String> copyOfNumberList = new ArrayList<>();
            copyOfNumberList.addAll(numbers);
            copyOfNumberList.remove(i);
            repeat(s2, copyOfNumberList);
            int n = Integer.parseInt(s2);
            int m = n / 2;
            boolean flag = n >= 2 && !set.contains(n);
            if(flag)
                for(int j = 2; j <= m; j++)
                    if(n % j ==0) {
                        flag = false;
                        break;
                    }
            if(flag) set.add(Integer.parseInt(s2));
        }
    }

    public static void main(String[] args) {
        new Solution().solution("17");
    }
}