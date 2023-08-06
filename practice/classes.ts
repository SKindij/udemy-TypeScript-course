interface Queue<T> {
	enqueue(item: T): void; // поставити в чергу
	dequeue(): T | undefined; // виключити з черги
	peek(): T | undefined | null; // переглянути перший елемент
	isEmpty(): boolean; // перевірка на "порожнечу" сутності
	length(): number; // перевірка на довжину
}

// Реалізація черги через масив
// Клас ArrayQueue має імплементувати інтерфейс Queue
// Клас може поміщати будь-які дані в масив
class ArrayQueue {

}

// Клас Stack містить інші методи, тому нічого імплементувати не потрібно
// Клас може поміщати будь-які дані в масив
class Stack {



	// Тут ми встановимо ліміт на стопку листів.
	constructor(limit:number = Number.MAX_VALUE) {
		this.limit = limit;
	}

	push(value) {

	}

	pop() {

	}

	length() {
	
	}

	isEmpty() {
		
	}

	top() {
		
	}
}

// Для тестів

const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());



















//todo cd practice
//todo ts-node classes.ts