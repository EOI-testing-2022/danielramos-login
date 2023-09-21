import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.202.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect/mod.ts";
import { RegisterUser } from "./RegisterUser.ts";
import { UserRepositoryFile } from "../infrastructure/UserRepositoryFile.ts";
import { User } from "../domain/User.ts";

class UserRepositoryMock extends UserRepositoryFile {
  saveHaveBeenCalled = false;

  async save(user: User): Promise<void> {
    this.saveHaveBeenCalled = true;
  }

  async existsByEmail(email: string): Promise<boolean> {
    return false;
  }
}

describe("RegisterUser", () => {
  it("should register a user", async () => {
    const userRepository = new UserRepositoryMock();
    const registerUser = new RegisterUser(userRepository);

    await registerUser.execute("Daniel", "pepee@gmail.com", "gatitos", 28);

    expect(userRepository.saveHaveBeenCalled).toEqual(true);
  });
});
