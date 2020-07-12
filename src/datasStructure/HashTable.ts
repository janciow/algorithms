export class HashTable {
    keyMap
    constructor(public size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRED_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRED_PRIME + value) % this.keyMap.length
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])

        return index
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            return this.keyMap[index].find(item => {
                return item[0] === key
            })[1]
        }
        return undefined;
    }
}