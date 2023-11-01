import express from "express";
import foodItemsController from "../controllers/foodItems.controller.js";

const foodItemsRouter = express.Router();

foodItemsRouter.get("/", async (req, res) => {
  try {
    const foodItems = await foodItemsController.getFoodItems();
    if (foodItems == "Server Error") {
      res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    } else {
      res.status(200).send({
        status: "success",
        message: "Food Items successfully retrived",
        data: foodItems,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

foodItemsRouter.post("/", async (req, res) => {
  try {
    const foodItems = await foodItemsController.addFoodItem(
      req.body.description,
      req.body.price,
      req.body.image
    );
    console.log("errorsssda");
    if (foodItems == "Server Error") {
      res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    } else {
      res.status(201).send({
        status: "success",
        message: "Food Items successfully created",
        data: [foodItems],
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

foodItemsRouter.put("/", async (req, res) => {
  try {
    const foodItems = await foodItemsController.updateFoodItem(
      req.body.id,
      req.body.description,
      req.body.price,
      req.body.image
    );
    if (foodItems == "Server Error") {
      res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    } else {
      res.status(200).send({
        status: "success",
        message: "Food Items successfully updated",
        data: foodItems,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

foodItemsRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
  try {
    const foodItems = await foodItemsController.deleteFoodItem(id);
    if (foodItems == "Server Error") {
      res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    } else {
      res.status(200).send({
        status: "success",
        message: "Food Items successfully deleted",
        data: {},
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

export default foodItemsRouter;
