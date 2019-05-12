import handler from "./handler";

describe("handler", () => {
  it("should return correct response", async () => {
    // Arrange
    // Act
    const response = await handler();
    // Assert
    expect(response).toEqual({ body: "8", statusCode: 200 });
  });
});
