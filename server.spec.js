const request = require("supertest");
const server = require("./server");
const db = require("./data/db-config");

describe("testing Post endpoint", () => {
  beforeEach(async () => {
    await db("people").truncate();
  });

  test("should return 201 on success", () => {
    return request(server)
      .post("/api/people")
      .send({ name: "MOm" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
  test("should return correct name", () => {
    return request(server)
      .post("/api/people")
      .send({ name: "Alex" })
      .then((res) => {
        expect(res.body.name).toBe("Alex");
      });
  });
});

describe("testing delete endpoint", () => {
  test("should return 200 status", () => {
    return request(server)
      .delete("/api/people/:id")
      .send({ id: 1 })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  test("should return the delete message", () => {
    return request(server)
      .delete("/api/people/:id")
      .send({ id: 1 })
      .then((res) => {
        expect(res.body.message).toBe("person has been removed");
      });
  });
});
