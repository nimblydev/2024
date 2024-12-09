import { Toy } from "../../src/domain/toy";
import { ToyRepository } from "../../src/domain/toyRepository";

export class InMemoryToyRepository implements ToyRepository {
  private _toys: Toy[] = [];

  findByName(name: string): Toy | null {
    return this._toys.find((t) => t.getName() === name) || null;
  }

  save(toy: Toy): void {
    this._toys = this._toys.filter((t) => t.getName() !== toy.getName());
    this._toys.push(toy);
  }
}
