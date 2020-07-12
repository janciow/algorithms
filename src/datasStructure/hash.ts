export function hash(key, arrayLen) {
    let total = 0;
    let WEIRED_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRED_PRIME  + value) % arrayLen
    }
    console.log(total);

    return total;
}