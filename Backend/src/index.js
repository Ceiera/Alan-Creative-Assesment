import express from "express";
import cors from "cors";
import Sequelize  from "sequelize";
import foodItemsRouter from "./routes/fooditems.route.js";
import morgan from "morgan";
const app = express();

const sequelize = new Sequelize('postgres://postgres:fairytail71@localhost:5432/alan_creative_assesment')

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use('/api/fooditems', foodItemsRouter);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const PORT = process.env.PORT || 5000;

const listen = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
