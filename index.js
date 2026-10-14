
import cors from "cors";
import express from "express";
import pizzaRoute from "./routes/pizza.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pizzas", pizzaRoute);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
