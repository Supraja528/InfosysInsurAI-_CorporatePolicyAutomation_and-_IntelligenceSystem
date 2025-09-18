public class DoublyLinkedList {
    private Node head;
    private Node tail;
    private int size;

    // Node class
    private static class Node {
        int data;
        Node next;
        Node prev;

        Node(int data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }

    // Constructor
    public DoublyLinkedList() {
        this.head = null;
        this.tail = null;
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
            tail = newNode;
        } else {
            newNode.next = head;
            head.prev = newNode;
            head = newNode;
        }
        size++;
    }

    // Add to end
    public void addToEnd(int data) {
        Node newNode = new Node(data);
        if (tail == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
        size++;
    }

    // Add at specific position (1-based index)
    public void addAtPosition(int data, int position) {
        if (position < 1 || position > size + 1) {
            System.out.println("Position out of bounds");
            return;
        }
        
        if (position == 1) {
            addToBeginning(data);
            return;
        }
        
        if (position == size + 1) {
            addToEnd(data);
            return;
        }
        
        Node newNode = new Node(data);
        Node temp = head;

        for (int i = 1; i < position - 1; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        if (temp.next != null) {
            temp.next.prev = newNode;
        }
        
        temp.next = newNode;
        newNode.prev = temp;

        size++;
    }

    // Delete from beginning
    public void deleteFromBeginning() {
        if (head == null) {
            System.out.println("List is empty. Nothing to delete.");
            return;
        }
        if (head.next == null) {
            head = null;
            tail = null;
        } else {
            head = head.next;
            head.prev = null;
        }
        size--;
    }
   
    // Delete from end
    public void deleteFromEnd() {
        if (tail == null) {
            System.out.println("List is empty. Nothing to delete.");
            return;
        }
        if (tail.prev == null) {
            head = null;
            tail = null;
        } else {
            tail = tail.prev;
            tail.next = null;
        }
        size--;
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
        
        if (position == size) {
            deleteFromEnd();
            return;
        }
        
        Node temp = head;
        for (int i = 1; i < position; i++) {
            temp = temp.next;
        }
        
        temp.prev.next = temp.next;
        if (temp.next != null) {
            temp.next.prev = temp.prev;
        }
        
        size--;
    }
    //diplay
    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
    // Display in reverse order

    public void displayReverse() {
        Node current = tail;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.prev;
        }
        System.out.println();
    }
    // Clear the list
    public void clear() {
        head = null;
        tail = null;
        size = 0;
    }
   //main method
    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        
        list.addToBeginning(10);
        list.addToEnd(20);
        list.addAtPosition(15, 2);
        
        System.out.println("List after adding elements:");
        list.display(); // Output: 10 15 20
        
        list.deleteFromBeginning();
        System.out.println("List after deleting from beginning:");
        list.display(); // Output: 15 20
        
        list.deleteFromEnd();
        System.out.println("List after deleting from end:");
        list.display(); // Output: 15
        
        list.addToEnd(30);
        list.addAtPosition(25, 2);
        System.out.println("List after adding more elements:");
        list.display(); // Output: 15 25 30
        
        list.deleteFromPosition(2);
        System.out.println("List after deleting from position 2:");
        list.display(); // Output: 15 30
        
        System.out.println("Size of the list: " + list.getSize()); // Output: Size of the list: 2
        
        System.out.println("Displaying in reverse order:");
        list.displayReverse(); // Output: 30 15
    }

}

