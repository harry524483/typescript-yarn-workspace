import handler from "./handler";

describe("handler", () => {
  it("should return correct response", () => {
    // Arrange
    // Act
    const response = handler();
    // Assert
    expect(response).toEqual({ body: "8", statusCode: 200 });
  });
});
