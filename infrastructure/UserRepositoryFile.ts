import { User } from "../domain/User.ts";
import { UserRepository } from "../domain/UserRepository.ts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class UserRepositoryFile implements UserRepository {
  async save(user: User): Promise<void> {
    const users = JSON.parse(Deno.readTextFileSync("users.json")) as User[];
    users.push(user);
    Deno.writeTextFileSync("users.json", JSON.stringify(users, null, 2));
    await sleep(1000);
  }

  async existsByEmail(email: string): Promise<boolean> {
    const users = JSON.parse(Deno.readTextFileSync("users.json")) as User[];
    const alreadyExists = users.find((user) => user.email === email);
    await sleep(1000);
    return Boolean(alreadyExists);
  }
}
