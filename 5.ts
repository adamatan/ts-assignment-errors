class Greeter1 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

class Greeter2 {
    greeting2: string;

    constructor(message: string) {
      this.greeting2 = message;
    }

    greet2() {
      return "Hello, " + this.greeting2;
    }
  }


let greeter1 = new Greeter1("world");
let greeter2 = new Greeter2("world");

greeter2 = new Greeter1("world");
