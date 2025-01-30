
public class f1_maxSubarraySum {

    
    public static void minSubarraySum(int numbers[]) {
        int sum = 0;
        int minSum = Integer.MAX_VALUE;
        for (int i = 0; i < numbers.length ; i++) {
            int start = i;
            for (int j = i; j < numbers.length; j++) {
                int end = j;
                sum = 0;
                for (int k = start; k <= end; k++) {
                    // System.out.print(numbers[k] +" ");
                    sum += numbers[k];
                }
                // System.out.println("Sum : "+ sum);
                if (minSum > sum ) {
                    minSum = sum;
                }                
            }
        }
        System.out.println("Min sum = "+ minSum);
    }

    public static void maxSubarraySum(int numbers[]) {
        int sum = 0;
        int maxSum = Integer.MIN_VALUE;
        for (int i = 0; i < numbers.length ; i++) {
            int start = i;
            for (int j = i; j < numbers.length; j++) {
                int end = j;
                sum = 0;
                for (int k = start; k <= end; k++) {
                    // System.out.print(numbers[k] +" ");
                    sum += numbers[k];
                }
                // System.out.println("Sum : "+ sum);
                if (maxSum < sum ) {
                    maxSum = sum;
                }                
            }
        }
        System.out.println("Max sum = "+ maxSum);
    }

    
    public static void main(String[] args) {
        int arr[] = {1, -2, 6, -1, 3};

        // maxSubarraySum(arr);
        minSubarraySum(arr);
    }
}
