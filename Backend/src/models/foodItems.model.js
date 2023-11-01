import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:fairytail71@localhost:5432/alan_creative_assesment"
);

const foodItems = sequelize.define(
  "fooditems",
  {
    foodItemsId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
  }
);


export default foodItems;
