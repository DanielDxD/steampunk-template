import { cors, throttle, WebApplication } from "@danielgl/steampunk";
import { env } from "./config/env";
import { HomeController } from "./controllers/home";
import { HomeService } from "./services/home";

const builder = WebApplication.createBuilder();

builder.services.addSingleton(HomeService);

await builder.addControllers([HomeController]);

const app = builder.build();

app.useOpenApi({
    info: {
        title: "Steampunk API",
        version: "1.0.0",
        description: "A Bun web framework inspired by ASP.NET Core."
    },
    servers: [{ url: `http://localhost:${env.PORT}`, description: "Local dev server" }]
});

app.use(cors());
app.use(throttle({ limit: 100, windowMs: 60000 })); // 100 requests per minute

app.mapGet("/minimal", () => ({
    message: "Hello from Minimal API! 🚀",
    timestamp: new Date().toISOString()
}));

app.run(env.PORT);
