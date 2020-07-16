export function fib(number, memo = []) {
    if (memo[number] !== undefined) return memo[number]
    if (number <= 2) {
        return 1
    }

    let res = fib(number - 1, memo) + fib(number - 2, memo)
    memo[number] = res
    return res
}

export function fibTabulated(n) {
    if (n <= 2) return 1
    let fibNums = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }

    return fibNums[n]
} 