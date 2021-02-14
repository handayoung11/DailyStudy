public class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int time = 0;
        int truckCount = truck_weights.length;
        int truckStartTime[] = new int[truckCount];
        int crossedTruck = 0;
        int onBridge = 0;
        int idx = -1;
        while(crossedTruck != truckCount) {
            if(idx < truckCount - 1 && weight >= onBridge + truck_weights[idx + 1]) {
                idx += 1;
                onBridge += truck_weights[idx];
                truckStartTime[idx] = time;
            }
            time++;

            for(int i = crossedTruck; i <= idx; i++) {
                if(time - truckStartTime[i] == bridge_length) {
                    onBridge -= truck_weights[i];
                    crossedTruck += 1;
                }
            }
        }
        return ++time;
    }
}
