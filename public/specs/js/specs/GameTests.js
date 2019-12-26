define(["require", "exports", "../src/Game"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("GameTests", function () {
        it("GameName_DefaultValue_ReturnsMyGame", function () {
            var game = new Game_1.default();
            expect(game.Name).toEqual("MyGame");
        });
    });
});
//# sourceMappingURL=GameTests.js.map