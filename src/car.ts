class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {  // speed parameter is not a string
        this.brand = brand
        this.speed = speed
    }

    accelerate(): number { // - not void as it should return updated speed value
        this.speed += 20 // to update the speed value we need to add 20
        return this.speed // we need to enter value as it indicated in the constructor
    }
}

const car = new Car('Toyota', 100)
console.log(car.accelerate()) // After fixing: will print 120
