import { describe, expect, it } from "vitest";

import { initial, priceFor, weekdayOf } from "@/lib/store";

describe("Promoções", () => {
  it("não traz corte promocional de terça-feira", () => {
    expect(initial.promos).toEqual([]);
    expect(weekdayOf("2026-11-03")).toBe(2); // terça-feira
    expect(priceFor(initial, "corte", "2026-11-03")).toBe(50);
  });
});
