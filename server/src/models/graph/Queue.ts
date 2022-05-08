export class Queue<T> {
    items: T[];
  
    constructor() {
        this.items = [];
    }
  
    add(item: T): void {
        this.items.push(item);
    }
  
    remove(): T {
        return this.items.shift();
    }
  
    isEmpty(): boolean {
      return this.items.length === 0
    }
  
  }