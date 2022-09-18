import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Adresses", () => {
  it("should be able to get a address by cep", async () => {
    const response = await request(app).get("/adresses/cep/18150000");
    expect(response.status).toBe(200);
  });
});
