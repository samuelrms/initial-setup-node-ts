import Start from "@/start";

it("should sum", () => {
  const person = new Start();

  expect(person.start()).toBe("🔥 Start 🔥");
});
