import "dotenv/config";
import express, { Application } from "express";
import routes from "./routes";
import useMiddleware from "./middleware";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware";
import * as functions from "firebase-functions";

const app: Application = express();
const SERVER_PORT = parseInt(process.env.SERVER_PORT as string, 10) || 8080;

// Middleware
useMiddleware(app);

// Use routes
app.use(routes);

// Error handler
app.use(errorHandlerMiddleware);

// App listeners
app.listen(SERVER_PORT, () =>
  console.log(`Server running on http://localhost:${SERVER_PORT}`)
);

export const week_18_avicena = functions.https.onRequest(app);