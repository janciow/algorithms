class NodeDL {
    constructor(public val, public next: NodeDL | null = null, public prev: NodeDL | null = null) {
        this.val = val;
        this.next = null
        this.prev = null
    }
}


export class DoublyLinkedList {
    constructor(public head: NodeDL = null, public tail: NodeDL = null, public length: number = 0) { }

    push(val) {
        const newNode = new NodeDL(val);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode;

        } else {
            this.tail.next = newNode
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return
        }

        const popTail = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = popTail.prev;
            this.tail.next = null;
            popTail.prev = null;
        }
        this.length--;
        return popTail;
    }

    shift() {
        if (this.length === 0) {
            return
        }

        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null
            oldHead.next = null;
        }


        this.length--;
        return oldHead;
    }

    unshift(data) {
        let newNode = new NodeDL(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this;
    }

    get(index: number) {
        if (0 > index || index >= this.length) {
            return null
        }

        let count = 0;
        let current = this.head

        if (index <= this.length / 2) {
            while (count !== index) {
                current = current.next;
                count++
            }
        } else {
            let count = this.length - 1
            let current = this.tail;
            while (count !== index) {
                current = current.prev
                count--;
            }
        }

        return current;
    }

    set(index: number, data) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = data;
            return true
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) !!this.push(val);

        let newNode = new NodeDL(val);
        let beforeNade = this.get(index - 1);
        let afterNode = beforeNade.next;

        beforeNade.next = newNode, newNode.prev = beforeNade;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;

        return true
    }

    remove(index) {

        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.shift()
        }

        if (index === this.length) {
            this.pop()
        }
        let remNode = this.get(index)

        remNode.prev.next = remNode.next;
        remNode.next.prev = remNode.prev;
        remNode.prev = null;
        remNode.next = null;
        this.length--;
        return remNode
    }
}

