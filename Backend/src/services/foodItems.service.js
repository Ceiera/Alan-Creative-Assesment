import foodItems from "../models/foodItems.model.js";

const getFoodItems = async () => {
  try {
    const listFoodItems = await foodItems.findAll()
    return listFoodItems;
  } catch (error) {
    return "Server Error";
  }
};

const addFoodItem = async (description, price, image) => {
  try {
    const newFoodItem = await foodItems.create({
      description,
      price,
      image,
    });
    return newFoodItem;
  } catch (error) {
    
    return "Server Error";
  }
};

const updateFoodItem = async (id, description, price, image) => {
  try {
    const updatedFoodItem = await foodItems.update(
      {
        description,
        price,
        image,
      },
      {
        where: {
          foodItemsId: id,
        },
        returning: true,
        plain: true,
      }
    );
    return updatedFoodItem;
  } catch (error) {
    return "Server Error";
  }
};

const deleteFoodItem = async (id) => {
  try {
    const deletedFoodItem = await foodItems.destroy({
      where: {
        foodItemsId: id,
      },
    });
    return deletedFoodItem;
  } catch (error) {
    return "Server Error";
  }
};

const foodItemsService = {
  getFoodItems,
  addFoodItem,
  updateFoodItem,
  deleteFoodItem,
};

export default foodItemsService;
