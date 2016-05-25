/* PROTOTYPAL INHERTANCE USING CONSTRUCTORS */

//------------------Animal Class----------------//
function Animal() {
    this.age = 0;
    this.name = "animal";
    this.sound = "sound";
    this.region = "region";
    this.say = function() {
        return "My name is " + this.name;
    };
}


//----------------Cat Class--------------------//
function Cat() {
    this.goAway = function() {
        return this.name + " is going away.";
    };
}

//Setting up inheritance
Cat.prototype = new Animal();

//Reseting constructor
Cat.prototype.constructor = Cat;

new Cat().say();

//----------------Dog Class-------------------//
function Dog() {
    this.goAway = function() {
        return this.name + " is going away.";
    };
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
new Dog().say();


//----------------Woodpecker Class-------------------//
function Woodpecker() {
    this.goAway = function() {
        return this.name + " is going away.";
    };
}

Woodpecker.prototype = new Animal();
Woodpecker.prototype.constructor = Woodpecker;
new Woodpecker().say();



/* INHERTANCE USING Object.create() */

var animal = {
    age: 0,
    name: "animal",
    sound: "sound",
    region: "region",
    say: function() {
        return "My name is " + this.name;
    }
};

var cat = Object.create(animal);
cat.goAway = function() {
    return this.name + " is going away.";
};

var dog = Object.create(animal);
dog.goAway = function() {
    return this.name + " is going away.";
};

var woodpecker = Object.create(animal);
woodpecker.goAway = function() {
    return this.name + " is going away.";
};



//----------------------getType with object-------------------//

function getType(object) {
    if ("goAway" in object) {
        if (object.constructor == Dog) {
            return "Dog";
        } else if (object.constructor == Cat) {
            return "Cat";
        } else {
            return "Woodpecker";
        }
    }
}

getType(new Dog());
getType(new Cat());
getType(new Woodpecker());

//----------------------getType with "this"-------------------//

function getType(object) {
    if ("goAway" in this) {
        if (this.constructor == Dog) {
            return "Dog";
        } else if (this.constructor == Cat) {
            return "Cat";
        } else {
            return "Woodpecker";
        }
    }
}

getType(new Dog());
getType(new Cat());
getType(new Woodpecker());
