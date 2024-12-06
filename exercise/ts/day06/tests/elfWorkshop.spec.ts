import { ElfWorkshop } from "../src/elfWorkshop";

describe("ElfWorkshop Tasks", () => {
  /* use a beforeEach to avoid repeating the same code in each test
    
    ```typescript
    let emptyWorkshop: ElfWorkshop;
    beforeEach(() => {
        emptyWorkshop = new ElfWorkshop();
    }
    ``
    */

  // typo in the description ? removeTask should be addTask ?
  test("removeTask should add a task", () => {
    const workshop = new ElfWorkshop();
    workshop.addTask("Build toy train");
    expect(workshop.taskList).toContain("Build toy train");
  });
  // readability: why don't use fast-check to generate random strings and replace the hardcoded strings and the 3 first tests ?
  // test2 is not a good name, it should be more descriptive
  test("test2 checks for task addition", () => {
    const workshop = new ElfWorkshop();
    workshop.addTask("Craft dollhouse");
    expect(workshop.taskList.includes("Craft dollhouse")).toBeTruthy();
  });
  //  test2 is not a good name and already used above, it should be more descriptive
  test("test2 checks for task addition", () => {
    const workshop = new ElfWorkshop();
    workshop.addTask("Paint bicycle");
    expect(workshop.taskList.includes("Paint bicycle")).toBeTruthy();
  });
  // suggestion: if you prefer to use should in the test name, why not use it() instead of test() ?
  // explicitness: the test name should be more explicit about what behavior is being tested
  test("Should handle empty tasks correctly", () => {
    const workshop = new ElfWorkshop();
    workshop.addTask(""); // readability: replace "" by a constant EMPTY_STRING
    expect(workshop.taskList.length).toBe(0);
  });
  // explicitness: the test name should be more explicit about what behavior is being tested
  // like "Should remove the older task from the list"
  test("Task removal functionality", () => {
    const workshop = new ElfWorkshop();
    workshop.addTask("Wrap gifts");
    const removedTask = workshop.completeTask();
    expect(removedTask).toBe("Wrap gifts");
    expect(workshop.taskList.length).toBe(0); // best practice: 1 expectation by test
  });

  // missing coverage: the completeTask() method should be tested when the taskList is empty
});
