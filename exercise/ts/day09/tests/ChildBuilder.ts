import { Child } from "../src/child";
import { GiftRequestBuilder } from "./GiftRequestBuilder";

export class ChildBuilder {
  private _firstName: string = "DefaultFirstName";
  private _lastName: string = "DefaultLastName";
  private _age: number = 9;
  private _behavior: Behavior = "nice";
  private _giftRequestBuilder: GiftRequestBuilder;

  withFirstName(firstName: string): this {
    this._firstName = firstName;
    return this;
  }

  withLastName(lastName: string): this {
    this._lastName = lastName;
    return this;
  }

  withAge(age: number): this {
    this._age = age;
    return this;
  }

  withBehavior(behavior: Behavior): this {
    this._behavior = behavior;
    return this;
  }

  whoIsNaughty(): this {
    this._behavior = "naughty";
    return this;
  }

  whoIsNice(): this {
    this._behavior = "nice";
    return this;
  }

  withGiftRequest(giftRequestBuilder: GiftRequestBuilder): this {
    this._giftRequestBuilder = giftRequestBuilder;
    return this;
  }

  wantingAFeasibleGift(): this {
    this._giftRequestBuilder = new GiftRequestBuilder().whichIsFeasible();
    return this;
  }

  wantingAnInfeasibleGift(): this {
    this._giftRequestBuilder = new GiftRequestBuilder().whichIsInfeasible();
    return this;
  }

  build(): Child {
    return new Child(
      this._firstName,
      this._lastName,
      this._age,
      this._behavior,
      this._giftRequestBuilder.build()
    );
  }
}
