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
    addLast(data) {
        let lastNode = this.getLast();
        if (!this.head) {
            this.head = data
        } else {
            lastNode.next = data;
        }

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
    getKthNodeFromLast(k) {
        let a = this.head;
        let b = this.head
        let last = this.getLast();
        for (let i = 0; i < k - 1; i++) {
            b = b.next
        }
        while (b != last) {
            a = a.next;
            b = b.next
        }
        return a.data
    }
    addFirst(item) {
        if (!this.head) {
            this.head = item;
        }
        let head = this.head;
        this.head = item;
        item.next = head;
    }
    removeFirst() {
        if (!this.head) return null;

        if (this.head = this.getLast()) {
            this.head = null
            return;
        }
        const head = this.head;
        this.head = head.next;
        head.next = null
    }
    removeLast() {
        let current = this.head;
        while (current) {
            if (current.next == this.getLast()) {
                current.next = null;
            }
            current = current.next
        }
    }
    contains(item) {
        let value = this.head;
        while (value) {
            if (value.data == item) return true;
            value = value.next;
        }
        return false;
    }
    indexOf(item) {
        let index = 0;
        let data = this.head;
        while (data) {
            if (data.data == item) return index;
            data = data.next;
            index++
        }
        return -1
    }
    reverse() {
        let prev = this.head;
        if (!prev) return;
        let cur = prev.next;
        while (cur) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        let tail = this.head;
        tail.next = null;
        let head = prev
        return head;
    }

}
const node1 = new NodeList(10);
const node2 = new NodeList(20);
const node3 = new NodeList(30)
const node4 = new NodeList(40)
const node5 = new NodeList(50)
const node6 = new NodeList(87);

node1.next = node2;
node2.next = node3
node3.next = node4
node4.next = node5
const list = new LinkedList(node1)
list.removeLast()
console.log(list.getLast())