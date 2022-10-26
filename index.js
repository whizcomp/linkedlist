class NodeList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    size() {
        let count = 0
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count
    }
    getLast() {
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next
        }
        return lastNode
    }
    getFirst() {
        return this.head
    }
}
const node1 = new NodeList(1);
const node2 = new NodeList(7);
const node3 = new NodeList(3)
node1.next = node2;
node2.next = node3
const list = new LinkedList(node1)
console.log(list.getLast())