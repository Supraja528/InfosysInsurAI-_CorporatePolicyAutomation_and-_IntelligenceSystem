public class ConditionalStatements {
    public static void main(String[] args) {
        // Example of an if statement
        int a = 10;
        if (a > 5) {
            System.out.println("a is greater than 5");
        }

        // Example of an if-else statement
        int b = 3;
        if (b > 5) {
            System.out.println("b is greater than 5");
        } else {
            System.out.println("b is not greater than 5");
        }

        // Example of an if-else if-else statement
        int c = 7;
        if (c < 5) {
            System.out.println("c is less than 5");
        } else if (c == 5) {
            System.out.println("c is equal to 5");
        } else {
            System.out.println("c is greater than 5");
        }
        //nested if statement
        int num = 15;

        if (num > 10) {
            if (num < 20) {
                System.out.println("num is between 10 and 20");
            }
        }
        //lader if statement
        int marks = 75;
        if (marks >= 90) {
            System.out.println("Grade: A");
        } else if (marks >= 80) {
            System.out.println("Grade: B");
        } else if (marks >= 70) {
            System.out.println("Grade: C");
        } else if (marks >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
        

        // Example of a switch statement
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Another day");
                break;
        }
        //Example of a nested if else statement
        int x = 20;
        if (x > 10) {
            System.out.println("x is greater than 10");
            if (x < 30) {
                System.out.println("x is also less than 30");
            } else {
                System.out.println("x is not less than 30");
            }
        } else {
            System.out.println("x is not greater than 10");
        }
        //Example for Ladder if statement
        int score = 85;
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
    }
}
