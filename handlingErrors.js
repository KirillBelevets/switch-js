class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomError"
    }
}

const test = () => {
    throw new CustomError("Fail!")
}

try {
    test()
} catch(err) {
    console.log(err.message)
    console.log(err.name)
    console.log(err.stack)
}
