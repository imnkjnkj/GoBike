export enum fontStyleEnum {
  SemiBold = "SemiBold",
  Light = "Light",
  Medium ="Medium"
}
export enum Category {
  BIKEGEAR = "BIKES & GEAR",
  TRAINING = "TRAINING",
  REPAIR = "REPAIR",
  HEALTHNUTRITION = "HEALTH & NUTRITION",
}
export enum CategoryId {
  BIKEGEAR = 19,
  TRAINING = 20,
  REPAIR = 21,
  HEALTHNUTRITION = 1,
}
export enum BikesCategory {
  MOUNTAIN = "MOUNTAIN BIKES",
  ROAD = "ROAD BIKES",
  TOURING = "TOURING BIKES",
  CITY = "CITY BIKES",
  KID = "KID BIKES",
}
export enum BikesCategoryId {
  MOUNTAIN = 22,
  ROAD = 23,
  TOURING = 24,
  CITY = 25,
  KID = 26,
}
export const menuList = [
  { key: "bikeGear", title: "BIKES & GEAR", id: CategoryId.BIKEGEAR },
  { key: "repair", title: "REPAIR", id: CategoryId.REPAIR },
  {
    key: "health",
    title: "HEALTH & NUTRITION",
    id: CategoryId.HEALTHNUTRITION,
  },
  { key: "training", title: "TRAINING", id: CategoryId.TRAINING },
];
export const categoryList = [
  { value: undefined, label: "Category" },
  { value: CategoryId.BIKEGEAR, label: "BIKES & GEAR" },
  { value: CategoryId.REPAIR, label: "REPAIR" },
  { value:CategoryId.HEALTHNUTRITION, label: "HEALTH & NUTRITION" },
  { value: CategoryId.TRAINING, label: "TRAINING" },
];
export const menuBikeList = [
  {
    key: BikesCategory.CITY,
    title: BikesCategory.CITY,
    id: BikesCategoryId.CITY,
  },
  {
    key: BikesCategory.KID,
    title: BikesCategory.KID,
    id: BikesCategoryId.KID,
  },
  {
    key: BikesCategory.MOUNTAIN,
    title: BikesCategory.MOUNTAIN,
    id: BikesCategoryId.MOUNTAIN,
  },
  {
    key: BikesCategory.ROAD,
    title: BikesCategory.TOURING,
    id: BikesCategoryId.TOURING,
  },
];
export const BikeList = [
  {
    label: "Type of bike",
    value: undefined,
  },
  {
    label: BikesCategory.CITY,
    value: BikesCategoryId.CITY,
  },
  {
    label: BikesCategory.KID,
    value: BikesCategoryId.KID,
  },
  {
    label: BikesCategory.MOUNTAIN,
    value: BikesCategoryId.MOUNTAIN,
  },
  {
    label: BikesCategory.TOURING,
    value: BikesCategoryId.TOURING,
  },
];
export const BrandList = [
  { value: undefined, label: "Brand" },
  { value: "Cannondale", label: "Cannondale" },
  { value: "Velocity", label: "Velocity" },
  { value: "Giant", label: "Giant" },
  { value: "Trek", label: "Trek" },
  { value: "Specialized", label: "Specialized" },
  { value: "Roval", label: "Roval" },
];
export const RiderAgeList = [
  { value: undefined, label: "Rider Age" },
  { value: "12+", label: "12+" },
  { value: "14+", label: "14+" },
  { value: "16+", label: "16+" },
  { value: "18+", label: "18+" },
];
export const RiderHeightList = [
  { value: undefined, label: "Rider Height" },
  { value: "5'2\" - 5'10\"", label: "157cm - 178cm" },
  { value: "5'4\"-5'10\"", label: "163cm - 178cm" },
  { value: "5'6\" - 6'2\"", label: "168cm - 188cm" },
  { value: "5'8\" - 6'4\"", label: "173cm  193cm" },
];
export const WeightLimitList = [
  { value: undefined, label: "Weight Limit" },
  { value: "220 lbs", label: "100kg" },
  { value: "250 lbs", label: "113kg" },
];
export const WheelSizeList = [
  { value: undefined, label: "Wheel Size" },
  { value: "700c", label: "700c" },
  { value: "27.5", label: "27.5c" },
  { value: '29"', label: "29c" },
  { value: '27.5"', label: "27.5c" },
];
