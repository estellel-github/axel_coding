class Entity {
  private id: number;
  title: string;
  private creationDate: Date;
  category: string;

  constructor(title: string = "N/A", category: string ="N/A") {
    this.title = title;
    this.category = category;
    this.id = Math.floor(Math.random() * 1000)
    this.creationDate = new Date();
  }
  
  getId(): string {
    return `The ID for ${this.title} is: ${this.id}`;
  }
  getTitle(): string {
    return this.title;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  setCategory(category: string): void {
    this.category = category;
  }
}

// (Arguments based on constructor in line 5)
let testVar = new Entity("The Castle", "Classic");

// testVar.id = 22324; // Doesn't work because id is private

const testVar2 = new Entity("The Trial", "Classic")

const testVar3 = new Entity();

console.log(testVar);
console.log(testVar2);
console.log(testVar3);