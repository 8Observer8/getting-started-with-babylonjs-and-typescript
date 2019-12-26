import Game from "../src/Game";

describe("GameTests", () =>
{
    it("GameName_DefaultValue_ReturnsMyGame", () =>
    {
        let game = new Game();
        
        expect(game.Name).toEqual("MyGame");
    });
});
