export class Graph {
    adjacencyList
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item !== v1)
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => {
            this.adjacencyList[v] = this.adjacencyList[v].filter(item => item !== vertex)
        });
        delete this.adjacencyList[vertex];
    }

    DFSrecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start)

        return result;
    }

    DFSIterative(start) {
        const stack = []
        const result = [];
        const visited = {};
        let currentVertex

        stack.push(start)
        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });

        }

        return result

    }


    breadthFirst(start) {
        const queue = [start]
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            });
        }

        return result;
    }
}