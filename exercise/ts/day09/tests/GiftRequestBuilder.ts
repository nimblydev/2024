import { GiftRequest } from "../src/giftRequest";

export class GiftRequestBuilder {
  private _giftName: string = "DefaultGift";
  private _feasible: boolean = true;
  private _importance: Priority = "nice to have";

  withGiftName(giftName: string): this {
    this._giftName = giftName;
    return this;
  }

  withFeasible(feasible: boolean): this {
    this._feasible = feasible;
    return this;
  }

  whichIsFeasible(): this {
    this._feasible = true;
    return this;
  }

  whichIsInfeasible(): this {
    this._feasible = false;
    return this;
  }

  withImportance(importance: Priority): this {
    this._importance = importance;
    return this;
  }

  whichIsNiceToHave(): this {
    this._importance = "nice to have";
    return this;
  }

  whichIsDream(): this {
    this._importance = "dream";
    return this;
  }

  build(): GiftRequest {
    return new GiftRequest(this._giftName, this._feasible, this._importance);
  }
}
