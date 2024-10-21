interface User {
  id: number;
  name: string;
  email: string;
}

class Database<T> {
  private records: T[] = [];

  add(record: T): void {
    this.records.push(record);
  }

  getAll(): T[] {
    return this.records;
  }

  findById(id: number): T | undefined {
    return this.records.find((record: any) => record.id === id);
  }
}

const userDB = new Database<User>();

userDB.add({ id: 1, name: "Alice", email: "alice@example.com" });
userDB.add({ id: 2, name: "Bob", email: "bob@example.com" });

console.log("All Users:", userDB.getAll());
console.log("Find Users by ID (1):", userDB.findById(1));
