class Solution {
//    완전탐색 > 카펫
//    https://programmers.co.kr/learn/courses/30/lessons/42842

    public int[] solution(int brown, int yellow) {
        int tiles = brown + yellow;
        int[] answer = new int[2];
        for(int h = 3; h < brown; h++) {
            int w = tiles / h;
            if(yellow == (h-2) * (w-2)) {
                answer[0] = w;
                answer[1] = h;
                break;
            }
        }
        return answer;
    }
}