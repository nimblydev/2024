import { SantaService } from "../src/santaService";
import { ChildBuilder } from "./ChildBuilder";

describe("santa analyzing child requests", () => {
  const service = new SantaService();

  test("request is approved for nice child with feasible gift", () => {
    const niceChild = new ChildBuilder()
      .whoIsNice()
      .wantingAFeasibleGift()
      .build();
    expect(service.evaluateRequest(niceChild)).toBeTruthy();
  });

  test("request is denied for naughty child", () => {
    const naughtyChild = new ChildBuilder()
      .whoIsNaughty()
      .wantingAnInfeasibleGift()
      .build();
    expect(service.evaluateRequest(naughtyChild)).toBeFalsy();
  });

  test("request is denied for nice child with infeasible gift", () => {
    const niceChildWithInfeasibleGift = new ChildBuilder()
      .whoIsNice()
      .wantingAnInfeasibleGift()
      .build();
    expect(service.evaluateRequest(niceChildWithInfeasibleGift)).toBeFalsy();
  });
});
