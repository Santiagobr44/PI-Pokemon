import { describe, it, expect } from "vitest";

function suma(a, b) {
  return a + b;
}

describe("SUMA", () => {
  it("Suma de 2 + 4", () => {
    expect(suma(2, 4), 6);
  });
});
