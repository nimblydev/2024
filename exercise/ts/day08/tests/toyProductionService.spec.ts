import { InMemoryToyRepository } from "./doubles/inMemoryToyRepository";
import { ToyProductionService } from "../src/services/toyProductionService";
import { Toy } from "../src/domain/toy";

describe("ToyProductionService", () => {
  const TOY_NAME = "Train";
  let repository: InMemoryToyRepository;
  let service: ToyProductionService;
  let toy: Toy;

  beforeEach(() => {
    repository = new InMemoryToyRepository();
    service = new ToyProductionService(repository);
    toy = new Toy(TOY_NAME);
  });

  it("should mark the toy as in production when assigned to an elf", () => {
    service.saveNewToy(toy);
    service.assignToyToElf(TOY_NAME);

    expect(toy.isInProduction()).toBeTruthy();
  });
});
