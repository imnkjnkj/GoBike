import { BikesCategory, BikesCategoryId, Category, CategoryId } from "../enums/common";

export const renderCate = (categoryId: number) => {
  switch (categoryId) {
    case CategoryId.BIKEGEAR:
      return Category.BIKEGEAR;
    case CategoryId.HEALTHNUTRITION:
      return Category.HEALTHNUTRITION;
    case CategoryId.REPAIR:
      return Category.REPAIR;
    case CategoryId.TRAINING:
      return Category.TRAINING;
    case BikesCategoryId.CITY:
      return BikesCategory.CITY;
    case BikesCategoryId.KID:
      return BikesCategory.KID;
    case BikesCategoryId.MOUNTAIN:
      return BikesCategory.MOUNTAIN;
    case BikesCategoryId.ROAD:
      return BikesCategory.ROAD;
    case BikesCategoryId.TOURING:
      return BikesCategory.TOURING;
    default:
      return null;
  }
};
