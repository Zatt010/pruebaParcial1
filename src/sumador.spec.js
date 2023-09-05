import Ocurencias from "./ContadorOcurrencias";

describe("Ocurrencias", () => {
  it("Mostar cadena completa", () => {
    expect(Ocurencias("Hola que tal")).toEqual("Hola que tal");
  });
});
