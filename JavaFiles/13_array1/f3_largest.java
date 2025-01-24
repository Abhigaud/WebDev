import java.util.*;
public class f3_largest {
    public static int getLargest(int arr[]) {
        int largest = Integer.MIN_VALUE;

        for(int i = 0; i < arr.length; i++){
            if (largest < arr[i]) {
                largest = arr[i];
            }
        }
        return largest;
    }
    public static int getSmallest(int arr[]) {
        int smallest = Integer.MAX_VALUE;

        for(int i = 0; i < arr.length; i++){
            if (smallest > arr[i]) {
                smallest = arr[i];
            }
        }
        return smallest;
    }


    public static void main(String[] args) {
        int arr[] = {1,2,6,3,5};
        System.out.println("largest = "+ getLargest(arr));
        System.out.println("smallest = "+ getSmallest(arr));
    }
}
