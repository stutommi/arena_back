"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Gun = /** @class */ (function (_super) {
    __extends(Gun, _super);
    function Gun(damage, firerate, range, bullet) {
        var _this = _super.call(this, damage, firerate, range) || this;
        _this.bullet = bullet;
        return _this;
    }
    Gun.prototype.fireAction = function (playerDmgMod) {
    };
    return Gun;
}(_1.Weapon));
exports.Gun = Gun;
exports.default = Gun;
