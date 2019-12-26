define(["require", "exports", "./Game"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var game = new Game_1.default();
            game.CreateScene("renderCanvas");
            game.DoRender();
        };
        return Program;
    }());
    // Debug version
    Program.Main();
});
// Release version
// window.onload = () => { Program.Main(); }
//# sourceMappingURL=Program.js.map