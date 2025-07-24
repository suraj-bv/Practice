class Demo {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

let demoInstance = new Demo('World');
demoInstance.sayHello();

// Today i learned about classes and objects in JavaScript. Classes allow us to create blueprints for objects, encapsulating data and behavior together. This makes our code more organized and reusable. I also learned how to create instances of classes and call their methods. Classes can have constructors to initialize properties, and methods to define behaviors. Overall, this is a powerful feature in JavaScript that enhances object-oriented programming capabilities.