import { describe, expect, it } from "vitest";

import { initial, isOpenDay, priceFor, slotsFor, weekdayOf } from "@/lib/store";

describe("Promoções", () => {
  it("não traz corte promocional de terça-feira", () => {
    expect(initial.promos).toEqual([]);
    expect(weekdayOf("2026-11-03")).toBe(2); // terça-feira
    expect(priceFor(initial, "corte", "2026-11-03")).toBe(50);
  });
});

describe("Horários de funcionamento", () => {
  it("domingo e segunda ficam fechados", () => {
    expect(isOpenDay(0)).toBe(false);
    expect(isOpenDay(1)).toBe(false);
    expect(slotsFor(0)).toEqual([]);
    expect(slotsFor(1)).toEqual([]);
  });

  it("terça e quarta abrem das 11h às 18h", () => {
    for (const d of [2, 3]) {
      const s = slotsFor(d);
      expect(s[0]).toBe("11:00");
      expect(s[s.length - 1]).toBe("17:00"); // 17:40 passaria das 18h
    }
  });

  it("quinta abre das 10h às 19h", () => {
    const s = slotsFor(4);
    expect(s[0]).toBe("10:00");
    expect(s[s.length - 1]).toBe("18:00");
  });

  it("sexta abre das 9h às 20h", () => {
    const s = slotsFor(5);
    expect(s[0]).toBe("09:00");
    expect(s[s.length - 1]).toBe("19:00");
  });

  it("sábado abre das 9h às 18h", () => {
    const s = slotsFor(6);
    expect(s[0]).toBe("09:00");
    expect(s[s.length - 1]).toBe("17:00");
  });
});
