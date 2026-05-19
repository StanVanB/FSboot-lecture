class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        try {
            if (typeof this.name !== 'string' || typeof this.age !== 'number') {
                throw new Error("Invalid data types for name or age.");
            }
        } catch (error) {
            console.error("Error displaying person information: ", error.message);
            return;
        }
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const alice = new Person("Alice", 30);
alice.displayInfo();
const bob = new Person("Bob", 25);
bob.displayInfo();

const userInfo = {
    username: "Charlie",
    password: "securePassword123",
}
