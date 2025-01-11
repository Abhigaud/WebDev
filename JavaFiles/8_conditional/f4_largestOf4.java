public class f4_largestOf4 {
    public static void main(String[] args) {
        int a = 61, b = 31, c = 6;
        if (a > b && a > c) {
            System.out.println("largest is : "+ a);
        } else if(b > c){
            System.out.println("largest is : "+ b);
        } else{
            System.out.println("largest is : "+ c);
        }
    }    
}
