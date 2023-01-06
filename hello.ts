/*
 * function greet(person: string, time: Date) {
	console.log(`Hello ${person} good ${time.toDateString()}.`);
}

greet("Brendan", new Date());

function printname(name: string, age?: number) {
	const iam = `I am ${name}`;
	if (age) {
		console.log(`${iam}, i am ${age} years old.`)
	} else {
		console.log(`${iam}.`)
	}
}


function printID(id: number | string) {
if (typeof id === 'string') {
console.log(id.toUpperCase());
} else {
console.log(id)
}
}

printID(98);
printID("Jamal");


type ID = string[] | string;
function welcomeMessage(people: string[] | string) {
	if (Array.isArray(people)) {
		console.log(`Welcome ${people.join(' and ')}`);
	} else {
		console.log(`Hello Loner ${people}`)
	}
}

welcomeMessage(['jay', 'kal', 'bal']);
welcomeMessage('jay')


type Point = { x: number, y: number };

function printcord(pt: Point) {
	console.log(`pt x = ${pt.x}`)
	console.log(`pt y = ${pt.y}`)
}

printcord({ x: 5, y: 5 });



//type UserInputSanitizer = string;
//function sanitizeInput(str: string): UserInputSanitizer {
//	return sanitize(str);
//}

//et userInput = sanitizeInput((getInput()));
//console.log(userInput);
//userInput = "New Input";
//console.log(userInput);

interface User {
	name: string;
	age?: number;
	isactive: boolean;
}

function printUser(user: User) {
	console.log(`Hi i am ${user.name} i am ${user.isactive ? "active" : "not active"}`)
}

printUser({ name: "Jamal", isactive: false });


function narrow(nar: number | string,  input: any) {
	if (typeof nar === "number") {
		return (nar * 2) + input;
	}
	return nar + input;
}

console.log(narrow(2, 1))
console.log(narrow("Two", 1))


function printAll(strs: string | string[] | null) {
	if (strs && typeof strs === "object") {
		for (const s of strs) {
			console.log(s);
		}
	} else if (typeof strs === "string") {
		console.log(strs);
	}
}

printAll(['hey', 'hi', 'hello'])


function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
	if (!values) {
		return values;
	} else {
		return values.map((x) => x * factor);
	}
}

console.log(multiplyAll([1, 2, 3, 4, 5], 2))
console.log(multiplyAll(undefined, 2))



function exa(x: string | number, y: string | boolean) {
	if (x === y) {
		x.toUpperCase();
		y.toLowerCase();
		console.log(x);
		console.log(y);
	} else {
		console.log(x);
		console.log(y);
	}
}

exa("Hello", "World")
exa(24, true)

interface Container {
	value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
	// Remove both 'null' and 'undefined' from the type.
	if (container.value != null) {
		console.log(container.value);

		// Now we can safely multiply 'container.value'.
		container.value *= factor;
	}
}


type Fish = { swim: () => void };
type Bird = { fly: () => void };
type human = { swim: () => void, fly: () => void }

function move(animal: Fish | Bird | human) {
	if ("swim" in animal) {
		return animal.swim();
	}
	return animal.fly();
}

function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

let x = Math.random()  < 0.5 ? 98 : "Nope";

let y = Math.random()  < 5 ? true : "yes";

y = 55;



function example() {
	let x: string | number | boolean;

	x = Math.random() < 0.5;

	console.log(x);

	if (Math.random() < 0.5) {
		x = "hello";
		console.log(x);

	} else {
		x = 100;
		console.log(x);

		let x: number
	}

	return x;

}

interface Shape {
	kind: "circle" | "square";
	radius?: number;
	sideLength?: number;
}




interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	sideLength: number;
}

type Shape = Circle | Square;
function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.sideLength ** 2;
	}
}


const ans = getArea({ kind: "circle", radius: 5 })

console.log(ans)

const anss = getArea({ kind: "square", sideLength: 5 });

console.log(anss)

*/
type User = {
  firstName: string;
  lastName: string;
};

function getUserFullName(user: User, prefix?: string) {
  return `${prefix ?? ''} ${user.firstName} ${user.lastName}`;
}

//const getUserFullName = (user: User, prefix?: string) => `${prefix ?? ''}${user.firstName} ${user.lastName}`;
const user: User = {
  firstName: "Jon",
  lastName: "Doe"
};

const userFullName = getUserFullName(user);
const mrUserFullName = getUserFullName(user, 'Mr. ');
