import express from "express";
import SwaggerUi from "swagger-ui-express";

import swaggerFile from "../oas/index.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

export { app };
