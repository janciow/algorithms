
export class Node {
    constructor(public value, public left = null, public right = null) { }
}

export class BinarySerchTree {
    constructor(public root = null) { }

    insert(value) {
        let newNode = new Node(value)

        if (!this.root) {
            this.root = newNode;
            return this
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    search(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (!found && current) {
            if (value > current.value) {
                current = current.right
            } else if (value < current.value) {
                current = current.left
            } else {
                found = true
            }
        }

        return current;
    }

    bfs() {
        const queue = [this.root];
        const visited = []
        let node;
        while (queue.length) {
            node = queue.shift();
            visited.push(node)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return visited;
    }

    DFSPreOrder() {
        let visited = []
        function traverse(node) {
            visited.push(node.value)

            if (node.left) {
                traverse(node.left)
            }

            if (node.right) {
                traverse(node.right)
            }
        }
         traverse(this.root)
        // visited = [...this.traverse(this.root)]
        return visited
    }

    DFSPostOrder() {
        let visited = []
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            visited.push(node.value)
        }
        traverse(this.root)
        // visited = [...this.traverse(this.root)]
        return visited
    }

    DFSInOrder() {
        let visited = []
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            visited.push(node.value)
            if (node.right) {
                traverse(node.right)
            }
   
        }
        traverse(this.root)
        // visited = [...this.traverse(this.root)]
        return visited
    }

    traverse(node, data) {
        
        data.push(data)
        if (node.left) {
            this.traverse(node.left, data)
        }

        if (node.right) {
             this.traverse(node.right, data)
        }

        return data
    }

}