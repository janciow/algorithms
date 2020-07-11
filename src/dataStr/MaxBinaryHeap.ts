export class MaxBinaryHeap {
    constructor(public values = []) { }

    insert(data) {
        this.values.push(data)
        this.bubblleUp()

    }

    bubblleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extarctMax() {
        let max = this.values[0]
        let end = this.values.pop()
        this.values[0] = end
        this.sinkDown()

        return max
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]

                if (leftChild > element) {
                    swap = leftChild
                }
            }


            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]

                if (swap ===null && leftChild > element) {
                    swap = rightChild
                }
            }

            if (swap === null) {
                break;
            }
        }
    }
}




