export class Toy {
  static readonly State = {
    UNASSIGNED: "UNASSIGNED",
    IN_PRODUCTION: "IN_PRODUCTION",
    COMPLETED: "COMPLETED",
  };

  private readonly name: string;
  private state: string;

  constructor(name: string, state: string = Toy.State.UNASSIGNED) {
    this.name = name;
    this.state = state;
  }

  getName(): string {
    return this.name;
  }

  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }

  assignToElf(): void {
    if (this.getState() === Toy.State.UNASSIGNED) {
      this.setState(Toy.State.IN_PRODUCTION);
    }
  }

  isInProduction(): boolean {
    return this.getState() === Toy.State.IN_PRODUCTION;
  }
}
