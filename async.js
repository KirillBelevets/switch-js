class MyPromise  {
    constructor(cb) {
        cb(() => {})
    }

    then(cb) {
        return new MyPromise(() => {
            setTimeout(() => cb())
        })
    }

    syncThen(cb) {
        return new MyPromise(() => {
            cb()
        })
    }
}

class ReversePromise {
    constructor(cb) {
        this.callbacks = []
        cb(() => {})
    }

    then(cb) {
        this.callbacks.push(cb)
        setTimeout(() => {
            new ReversePromise(this.callbacks.pop())
        })
        return this
    }
}
