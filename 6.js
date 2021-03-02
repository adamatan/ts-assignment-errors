var Greeter1 = /** @class */ (function () {
    function Greeter1(message) {
        this.greeting = message;
    }
    Greeter1.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter1;
}());
var Greeter2 = /** @class */ (function () {
    function Greeter2(message) {
        this.greeting2 = message;
    }
    Greeter2.prototype.greet2 = function () {
        return "Hello, " + this.greeting2;
    };
    return Greeter2;
}());
var greeter1 = new Greeter1("world");
var greeter2 = new Greeter2("world");
greeter2 = new Greeter1("world");
