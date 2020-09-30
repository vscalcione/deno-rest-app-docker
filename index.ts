import { Application } from "https://deno.land/x/dactyl/mod.ts";
import UserController from "./controllers/UserController.ts";

const app: Application = new Application({
  controllers: [UserController],
});

await app.run(8080);
