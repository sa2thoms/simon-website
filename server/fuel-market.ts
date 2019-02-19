import {FuelType} from "./fuel-type";

export class FuelMarket {
  private _coalStock: number;
  private _oilStock: number;
  private _garbageStock: number;
  private _uraniumStock: number;

  private _uraniumPrices: number[] = [
    Number.POSITIVE_INFINITY,
    16,
    14,
    12,
    10,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ];

  get coalStock(): number {
    return this._coalStock;
  }

  set coalStock(value: number) {
    if (value < 0 || value > 24) {
      throw new Error('Coal stock must be between 0 and 24');
    }
    this._coalStock = value;
  }

  get oilStock(): number {
    return this._oilStock;
  }

  set oilStock(value: number) {
    if (value < 0 || value > 24) {
      throw new Error('Oil stock must be between 0 and 24');
    }
    this._oilStock = value;
  }

  get garbageStock(): number {
    return this._garbageStock;
  }

  set garbageStock(value: number) {
    if (value < 0 || value > 24) {
      throw new Error('Garbage stock must be between 0 and 24');
    }
    this._garbageStock = value;
  }

  get uraniumStock(): number {
    return this._uraniumStock;
  }

  set uraniumStock(value: number) {
    if (value < 0 || value > 12) {
      throw new Error('Uranium stock must be between 0 and 12');
    }
    this._uraniumStock = value;
  }

  priceOf(type: FuelType, amount: number = 1): number {
    if (amount <= 0) {
      return 0;
    }
    switch (type) {
      case FuelType.coal:
        if (this.coalStock === 0 || amount > this.coalStock) {
          return Number.POSITIVE_INFINITY;
        } else {
          const priceOfOne = Math.floor((24 - this.coalStock) / 3) + 1;
          this.coalStock = this.coalStock - 1;
          const priceOfTheRest = this.priceOf(FuelType.coal, amount - 1);
          this.coalStock = this.coalStock + 1;
          return priceOfOne + priceOfTheRest;
        }
      case FuelType.oil:
        if (this.oilStock === 0 || amount > this.oilStock) {
          return Number.POSITIVE_INFINITY;
        } else {
          const priceOfOne = Math.floor((24 - this.oilStock) / 3) + 1;
          this.oilStock = this.oilStock - 1;
          const priceOfTheRest = this.priceOf(FuelType.oil, amount - 1);
          this.oilStock = this.oilStock + 1;
          return priceOfOne + priceOfTheRest;
        }
      case FuelType.garbage:
        if (this.garbageStock === 0 || amount > this.garbageStock) {
          return Number.POSITIVE_INFINITY;
        } else {
          const priceOfOne = Math.floor((24 - this.oilStock) / 3) + 1;
          this.garbageStock = this.garbageStock - 1;
          const priceOfTheRest = this.priceOf(FuelType.garbage, amount - 1);
          this.garbageStock = this.garbageStock + 1;
          return priceOfOne + priceOfTheRest;
        }
      case FuelType.uranium:
        if (this.uraniumStock === 0 || amount > this.uraniumStock) {
          return Number.POSITIVE_INFINITY;
        } else {
          const priceOfOne = this._uraniumPrices[this.uraniumStock];
          this.uraniumStock = this.uraniumStock - 1;
          const priceOfTheRest = this.priceOf(FuelType.uranium, amount - 1);
          this.uraniumStock = this.uraniumStock + 1;
          return priceOfOne + priceOfTheRest;
        }
    }
  }
}
