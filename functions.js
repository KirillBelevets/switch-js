function NamedOne(first, last) {
    return {
        firstName: first,
        lastName: last,
        get fullName () {
            return this.firstName + ' ' + this.lastName
        },
        set fullName (value) {
            const split = value.split(' ')
            if (split.length === 2) {
                this.firstName = split[0]
                this.lastName = split[1]
            }
        }
    }
}
