class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;

    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    clear() {
        this.head = null
    }
    getLast() {
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        return lastNode
    }
    getFirst() {
        return this.head
    }
}
node1 = new ListNode(2);
node2 = new ListNode(5);
node3 = new ListNode(3)
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);
console.log(list)