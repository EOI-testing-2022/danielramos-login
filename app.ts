import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { RegisterUser } from "./application/RegisterUser.ts";
import { UserRepository } from "./domain/UserRepository.ts";

export function createApp(userRepository: UserRepository) {
  const app = new Application();

  const router = new Router();

  const registerUser = new RegisterUser(userRepository);

  router.post("/register", async (ctx) => {
    const body = await ctx.request.body({ type: "json" }).value;

    try {
      await registerUser.execute(
        body.name,
        body.email,
        body.password,
        body.age
      );
    } catch (error) {
      if (error.message === "User already exists") {
        ctx.response.status = 409;
        ctx.response.body = { message: error.message };
        return;
      }

      if (error.message === "Invalid email") {
        ctx.response.status = 400;
        ctx.response.body = { message: error.message };
        return;
      }

      throw error;
    }

    ctx.response.body = { message: "User registered successfully" };
  });

  app.use(router.routes());

  return app;
}
