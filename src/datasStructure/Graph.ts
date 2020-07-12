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
}