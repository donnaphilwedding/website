export enum FoodChoice {
  BAD,
  OKAY,
  GOOD
}

export interface Responses {
  name?: string;
  attending?: boolean;
  events?: {
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  children?: string;
  dietaryRequirements?: string;
  foodChoices?: {
    chicken: FoodChoice;
    beef: FoodChoice;
    veggie: FoodChoice;
    potatoes?: number;
  };
}