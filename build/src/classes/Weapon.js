"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon = /** @class */ (function () {
    function Weapon(damage, firerate, range) {
        this.damage = damage;
        this.firerate = firerate;
        this.range = range;
    }
    Weapon.prototype.fireAction = function (playerDmgMod) {
        console.log('needs to be overwritten by childclasses');
    };
    return Weapon;
}());
exports.Weapon = Weapon;
exports.default = Weapon;
