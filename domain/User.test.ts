import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.202.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect/mod.ts";
import { User } from "./User.ts";

describe("User", () => {
  it("should create a user", () => {
    const user = new User("id", "name", "email@gmail.com", "password", 28);

    expect(user.email).toEqual("email@gmail.com");
  });

  it("fails if a users with age less than 18 is created", () => {
    expect(
      () => new User("id", "name", "email@gmail.com", "password", 17)
    ).toThrow();
  });

  it.skip("hashes the paswrod", () => {
    const user = new User("id", "name", "email@gmail.com", "password", 28);

    expect(user.getPassword()).not.toEqual("password");
  });
});
