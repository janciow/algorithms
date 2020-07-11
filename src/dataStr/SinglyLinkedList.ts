class NodeL {
    constructor(public val, public next = null) { }
}

export class SinglyLinkedList {
    constructor(public head = null, public tail = null, public length = 0) { }

    push(val) {
        const newNode = new NodeL(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next;
        }
        this.tail = newTail;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead
    }

    unshift(val) {
        let newNode = new NodeL(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let conuter = 0;
        let current = this.head
        while (conuter !== index) {
            current = current.next
            conuter++;
        }
        return current;
    }

    set(val, index) {
        const foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val) 
        if (index === 0) return this.unshift(val) 

        this
    }
}

let list = new SinglyLinkedList()
list.unshift('helo1')
list.unshift('bbdd2')
list.unshift('ddddddddd3')
list.unshift('aaaa');


console.log(list.get(2));
console.log(list.set(2, 2));
console.log(list.get(2));

