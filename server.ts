import { createApp } from "./app.ts";
import { UserRepositoryFile } from "./infrastructure/UserRepositoryFile.ts";

const app = createApp(new UserRepositoryFile());

app.listen({ port: 8000 });
