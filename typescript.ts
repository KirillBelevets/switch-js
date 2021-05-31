interface PersonInterface {
    name: string,
    lastName: string
}

abstract class Person implements PersonInterface {
    name: string
    lastName: string
    abstract getName(name: string, lastName: string): string;
}

class Teacher extends Person {
    constructor(name: string, lastName: string) {
        super()
        this.name = name
        this.lastName = lastName
    }

    getName(name:string, lastName: string): string {
        return name + ' ' + lastName
    }

    createMarksJournal<T>(args: T[]): T[] {
        return new Array<T>().concat(args)
    }
}

const newTeacher = new Teacher("Mike", "Tyson")
const markStrings = newTeacher.createMarksJournal(["Bad", "Mediocre", "Good", "Nice"])
const markNumbers = newTeacher.createMarksJournal([1, 2, 3, 4, 5])

// Will throw compilation error
// markStrings.push(1)

// Will throw compilation error
// markNumbers.push("Incredible")
