import foodItemsService from "../services/foodItems.service.js";

const getFoodItems = async () => {
  try {
    const foodItems = await foodItemsService.getFoodItems();
    return foodItems;
  } catch (error) {
    return "Server Error";
  }
};

const addFoodItem = async (description, price, image) => {
  try {
    const newFoodItem = await foodItemsService.addFoodItem(
      description,
      price,
      image
    );
    return newFoodItem;
  } catch (error) {
    return "Server Error";
  }
};

const updateFoodItem = async (id, description, price, image) => {
  try {
    const updatedFoodItem = await foodItemsService.updateFoodItem(
      id,
      description,
      price,
      image
    );
    return updatedFoodItem;
  } catch (error) {
    return "Server Error";
  }
};

const deleteFoodItem = async (id) => {
  try {
    const deletedFoodItem = await foodItemsService.deleteFoodItem(id);
    return deletedFoodItem;
  } catch (error) {
    return "Server Error";
  }
};

const foodItemsController = {
  getFoodItems,
  addFoodItem,
  updateFoodItem,
  deleteFoodItem,
};

export default foodItemsController;
