import { User } from "../domain/User.ts";
import { UserRepository } from "../domain/UserRepository.ts";

export class RegisterUser {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(name: string, email: string, password: string, age: number) {
    const user = new User(crypto.randomUUID(), name, email, password, age);

    if (await this.userRepository.existsByEmail(user.email)) {
      throw new Error("User already exists");
    }

    this.userRepository.save(user);
  }
}
