import java.util.*;
public class f6_rotateArr {
    public static void rotate(int[] arr, int k) {
        int n = arr.length;
        
        // If k is larger than array size, print "Invalid" and return
        if (k > n) {
            System.out.println("Invalid");
            return;
        }

        // Step 1: Reverse the first part (0 to k-1)
        int start = 0, end = k - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end]                                                                                      = temp;
            start++;
            end--;
        }

        // Step 2: Reverse the second part (k to n-1)
        start = k;
        end = n - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

        // Step 3: Reverse the whole array
        start = 0;
        end = n - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

        // Print rotated array
        System.out.println("Rotated Array: " + Arrays.toString(arr));
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int k = 3; // Rotate at index 3

        System.out.println("Original Array: " + Arrays.toString(arr));
        rotate(arr, k);
    }
}
