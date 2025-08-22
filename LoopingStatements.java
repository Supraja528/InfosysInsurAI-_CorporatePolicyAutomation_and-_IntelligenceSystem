public class LoopingStatements {
    public static void main(String[] args) {
        // For Loop
        System.out.println("For Loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteration: " + i);
        }
        //nested for loop
        System.out.println("\nNested For Loop:");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 2; j++) {
                System.out.println("Outer Loop Iteration: " + i + ", Inner Loop Iteration: " + j);
            }
        }
        // While Loop
        System.out.println("\nWhile Loop:");

        int j = 1;
        while (j <= 5) {
            System.out.println("Iteration: " + j);
            j++;
        }
        // Do-While Loop
        System.out.println("\nDo-While Loop:");
        int k = 1;
        do {
            System.out.println("Iteration: " + k);
            k++;
        } while (k <= 5);

        // Enhanced For Loop (For-Each Loop)
        System.out.println("\nEnhanced For Loop:");
        int[] numbers = {1, 2, 3, 4, 5};
        for (int number : numbers) {
            System.out.println("Number: " + number);
        }


    }
}
