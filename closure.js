function runningAverage() {
    let accumulator = 0, size = 0
    return function (numb) {
        accumulator += numb
        size++
        return Math.round ( accumulator/size * 100) /100
    }
}

function sum(a) {
    let currentSum = a
    function f(b) {
        currentSum += b
        return f
    }
    f.toString = function() {
        return currentSum;
    }
    return f
}
