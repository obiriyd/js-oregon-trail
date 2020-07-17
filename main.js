class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }
    eat() {
        if (this.food > 0) {
            this.food -= 1
        } else {
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return (this.capacity - this.passengers.length)
    }
    join(traveler) {
        if ((this.capacity - this.passengers.length) > 0) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        let quarantineStatus = false
        for (let index = 0; index < this.passengers.length; index++) {
            if (this.passengers[index].isHealthy === false) {
                quarantineStatus = true
            }
        }
        return quarantineStatus
    }
    totalFood() {
        let foodCount = 0;
        for (let index = 0; index < this.passengers.length; index++) {
            foodCount += this.passengers[index].food
        }
        return foodCount
    }
}