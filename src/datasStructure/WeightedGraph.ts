import { PriorityQueueBasic } from "./PriorityQueueBasic"

export class WeightedGraph {
    adjacencyList
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueueBasic();
        const distances = {}
        const previous = {}
        let path = [];
        let smalest

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smalest = nodes.dequeue().val
            // console.log(smalest);
            if (smalest === finish) {

                console.log(distances);
                console.log(previous);
                while (previous[smalest]) {
                    path.push(smalest)
                    smalest = previous[smalest]
                }
                break
                // WE are don
            }

            if (smalest || distances[smalest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smalest]) {
                    // find neiboring node
                    let nextNode = this.adjacencyList[smalest][neighbor]
                    // console.log(nextNode);
                    let candidate = distances[smalest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smalest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }

                }
            }
            return path.concat(smalest).reverse()
        }

    }

}