import express from "express";
import path from "path";
// @ts-ignore
import serverless from "serverless-http";

const app = express();

// Sirve tu dashboard en la ruta /phase/organizar
app.use(
  "/phase/organizar",
  express.static(path.join(__dirname, "../client/dist"))
);

// Redirige la raíz al dashboard
app.get("/", (_, res) => res.redirect("/phase/organizar"));

// Exporta el handler para Vercel
export const handler = serverless(app);
export default app;
