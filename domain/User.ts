export class User {
  private id: string;
  private name: string;
  public email: string;
  private password: string;
  private age: number;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    age: number
  ) {
    if (email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (age < 18) {
      throw new Error("invalid age");
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }

  getPassword() {
    return this.password;
  }
}
