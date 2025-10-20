import express from "express";
import dotenv from "dotenv";
import comidasRoute from './src/routes/comidasRoute.js'

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("servidor aberto...");
});

app.use('/comidas', comidasRoute);

app.listen(serverPort, () => {
  console.log(` Servidor comidas foi iniciado em: http://localhost:${serverPort}`);
});