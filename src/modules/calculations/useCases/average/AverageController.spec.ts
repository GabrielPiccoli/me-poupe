import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Calculations", () => {
  it("should be able to calc two numbers average", async () => {
    const response = await request(app).get("/calculations/average").send({
      num1: 3,
      num2: 1.5,
    });
    expect(response.status).toBe(200);
  });
});
