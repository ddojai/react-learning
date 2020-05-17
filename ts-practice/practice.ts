interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
  console.log(shape.getArea());
});

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람',
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People = Person[];

const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

type Items<T> = {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
}

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());