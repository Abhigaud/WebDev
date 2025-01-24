
public class f6_pairsInArray {
    public static void pairs(int numbers[]) {
        for (int i = 0; i < numbers.length; i++) {
            int curr = numbers[i];
            for (int j = i+1; j < numbers.length; j++) {
                System.out.print("(" +curr + ","+numbers[j]+") ");
            }
            System.out.println();
        }
    }

    
    public static void subarray(int numbers[]) {
        for (int i = 0; i < numbers.length; i++) {
            int start = i;
            for (int j = i; j < numbers.length; j++) {
                int end = j;
                for (int k = start; k <= end; k++) {
                    System.out.print(numbers[k]+" ");
                }
                System.out.println();
            }
            System.out.println();
        }
    }

    
    public static void main(String[] args) {
        int arr[] = {2, 4, 6, 8, 10};

        // pairs(arr);
        subarray(arr);
    }
}
