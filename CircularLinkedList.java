public class CircularLinkedList {
    private Node head;
    private int size;

    // Node class
    private static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    // Constructor
    public CircularLinkedList() {
        this.head = null;
        this.size = 0;
    }

    // Get size of the list
    public int getSize() {
        return size;
    }

    // Check if the list is empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Add to beginning
    public void addToBeginning(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            newNode.next = head;
        } else {
            Node temp = head;
            while (temp.next != head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = head;
            head = newNode;
        }
        size++;
        System.out.println("Inserted " + data + " at the beginning.");
    }

    // Add to end
    public void addToEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            newNode.next = head;
        } else {
            Node temp = head;
            while (temp.next != head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = head;
        }
        size++;
        System.out.println("Inserted " + data + " at the end.");
    }

    // Insert at specific position (1-based index)
    public void insertAtPosition(int data, int position) {
        if (position < 1 || position > size + 1) {
            System.out.println("Position out of bounds");
            return;
        }

        if (position == 1) {
            addToBeginning(data);
            return;
        }

        Node newNode = new Node(data);
        Node temp = head;

        for (int i = 1; i < position - 1; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;
        size++;
        System.out.println("Inserted " + data + " at position " + position + ".");
    }

    // Delete from beginning
    public void deleteFromBeginning() {
        if (head == null) {
            System.out.println("List is empty. Nothing to delete.");
            return;
        }

        int deletedData = head.data;

        if (head.next == head) {
            head = null;
        } else {
            Node temp = head;
            while (temp.next != head) {
                temp = temp.next;
            }
            temp.next = head.next;
            head = head.next;
        }
        size--;
        System.out.println("Deleted " + deletedData + " from the beginning.");
    }

    // Delete from end
    public void deleteFromEnd() {
        if (head == null) {
            System.out.println("List is empty. Nothing to delete.");
            return;
        }

        int deletedData;

        if (head.next == head) {
            deletedData = head.data;
            head = null;
        } else {
            Node temp = head;
            while (temp.next.next != head) {
                temp = temp.next;
            }
            deletedData = temp.next.data;
            temp.next = head;
        }
        size--;
        System.out.println("Deleted " + deletedData + " from the end.");
    }

    // Delete from specific position (1-based index)
    public void deleteFromPosition(int position) {
        if (head == null || position < 1 || position > size) {
            System.out.println("Position out of bounds");
            return;
        }

        if (position == 1) {
            deleteFromBeginning();
            return;
        }

        Node temp = head;
        for (int i = 1; i < position - 1; i++) {
            temp = temp.next;
        }

        int deletedData = temp.next.data;

        if (temp.next == head) {
            temp.next = head;
        } else {
            temp.next = temp.next.next;
        }
        size--;
        System.out.println("Deleted " + deletedData + " from position " + position + ".");
    }

    // Display the list
    public void display() {
        if (head == null) {
            System.out.println("List is empty.");
            return;
        }
        Node temp = head;
        System.out.print("Circular Linked List: ");
        do {
            System.out.print(temp.data + " ");
            temp = temp.next;
        } while (temp != head);
        System.out.println();
    }

    // Main method for testing
    public static void main(String[] args) {
        CircularLinkedList cll = new CircularLinkedList();

        cll.addToBeginning(10);
        cll.addToEnd(20);
        cll.addToEnd(30);
        cll.insertAtPosition(15, 2);
        cll.display(); // Output: 10 15 20 30

        cll.deleteFromBeginning();
        cll.display(); // Output: 15 20 30

        cll.deleteFromEnd();
        cll.display(); // Output: 15 20

        cll.deleteFromPosition(2);
        cll.display(); // Output: 15
    }
}
