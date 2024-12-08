import { ToyRepository } from "../domain/toyRepository";
import { Toy } from "../domain/toy";

export class ToyProductionService {
  private readonly _repository: ToyRepository;

  constructor(repository: ToyRepository) {
    this._repository = repository;
  }

  findToyByName(toyName: string): Toy | undefined {
    return this._repository.findByName(toyName);
  }

  saveNewToy(toy: Toy): void {
    this._repository.save(toy);
  }

  assignToyToElf(toyName: string): void {
    const toy = this._repository.findByName(toyName);
    toy.assignToElf();
    this._repository.save(toy);
  }
}
