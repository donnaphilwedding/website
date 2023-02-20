export enum FoodChoice {
  BAD = 'Bad',
  OKAY = 'Okay',
  GOOD = 'Good'
}

export enum EventDay {
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday'
}

export interface Responses {
  name?: string;
  attending?: boolean;
  events?: EventDay[];
  children?: string;
  dietaryRequirements?: string;
  chicken?: FoodChoice;
  beef?: FoodChoice;
  veggie?: FoodChoice;
  potatoes?: number;
}
