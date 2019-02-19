import {Plant} from "./plant";

export enum MarketType {
  sixPlant,
  fourPlant
}

export class PlantMarket {
  type: MarketType;
  onMarket: Plant[];
  futureMarket: Plant[];
}
