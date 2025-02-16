// Question 1:Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
import java.util.*;
public class a1 {
    public static boolean doubleAppera(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    public static void main(String[] args) {
        int nums[] = {1,2,3,1};
        System.out.println(doubleAppera(nums));
    }
    
}
