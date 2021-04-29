class Vector {
    constructor(array) {
        this.values = array
    }

    reducer (accumulator, currentValue) {
        return accumulator + currentValue
    }

    checkArgsLength (vector) {
        if (vector.values.length > 3) throw new Error("Wrong array length")
    }

    add (vector) {
        this.checkArgsLength(vector)
        const sum = this.values.map((nmb, i) => {
            return nmb + vector.values[i]
        })

        return new Vector(sum)
    }

    subtract(vector) {
        this.checkArgsLength(vector)
        const sub = this.values.map((nmb, i) => {
            return nmb - vector.values[i]
        })

        return new Vector(sub)
    }

    dot (vector) {
        this.checkArgsLength(vector)
        const resultDot = this.values.map((nmb, i) => {
            return nmb * vector.values[i]
        })

        return resultDot.reduce(this.reducer)
    }

    norm () {
        const resultNorm = this.values.map((nmb, i) => {
            return nmb * nmb
        })

        return Math.sqrt(resultNorm.reduce(this.reducer))
    }

    toString () {
        return "(" + String(this.values) + ")"
    }
}
