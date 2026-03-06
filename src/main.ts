import { cors, throttle, WebApplication } from "@danielgl/steampunk";
import { env } from "./config/env";
import { HomeService } from "./services/home";

const builder = WebApplication.createBuilder();

builder.services.addSingleton(HomeService);

await builder.addControllers("src/controllers");

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

app.use(async (context, next) => {
    console.log(`[${context.method}] ${context.path}`);
    return next();
});

app.mapGet("/minimal", () => ({
    message: "Hello from Minimal API! 🚀",
    timestamp: new Date().toISOString()
}));

app.run(8080);