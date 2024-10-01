class Person {
    name: string
    age: number

    constructor(name: string, age: number) {  // age parameter is not a string
        this.name = name // constructor value should be written with lower case
        this.age = age
    }

    getName(): string {
        return this.name  // lower case
    }

    getAge(): number {
        return this.age  // value from constructor
    }
}

const john = new Person('John', 30)
console.log(john.getName()) // After fixing: will print "John"
console.log(john.getAge())  // After fixing: will print 30
