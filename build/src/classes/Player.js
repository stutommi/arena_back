"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var playerConstants_1 = require("../gameAPI/constants/playerConstants");
var weaponConstants_1 = require("../gameAPI/constants/weaponConstants");
var utils_1 = require("../utils");
var Player = /** @class */ (function () {
    function Player(id, position, health, isDead, speedMod, damageMod, invulnurable, weapon, size) {
        if (position === void 0) { position = { x: 100, y: 100 }; }
        if (health === void 0) { health = 100; }
        if (isDead === void 0) { isDead = false; }
        if (speedMod === void 0) { speedMod = 1; }
        if (damageMod === void 0) { damageMod = 1; }
        if (invulnurable === void 0) { invulnurable = false; }
        if (weapon === void 0) { weapon = weaponConstants_1.getGun('pistol'); }
        if (size === void 0) { size = 10; }
        this.id = id;
        this.position = position;
        this.health = health;
        this.isDead = isDead;
        this.isDead = isDead;
        this.speedMod = speedMod;
        this.damageMod = damageMod;
        this.invulnurable = invulnurable;
        this.weapon = weapon;
        this.size = size;
    }
    Player.prototype.getId = function () { return this.id; };
    Player.prototype.setId = function (newId) { this.id = newId; };
    Player.prototype.getPosition = function () { return this.position; };
    Player.prototype.setPosition = function (newPosition) { this.position = newPosition; };
    Player.prototype.getHealth = function () { return this.health; };
    Player.prototype.setHealth = function (newHealth) {
        this.health = newHealth < 0 ? 0 : newHealth;
        this.isDead = this.health == 0 && !this.invulnurable ? true : false;
    };
    Player.prototype.getIsDead = function () { return this.isDead; };
    Player.prototype.setIsDead = function (isDead) { this.isDead = isDead; };
    Player.prototype.getSpeedMod = function () { return this.speedMod; };
    Player.prototype.setSpeedMod = function (newSpeedMod) {
        this.speedMod = newSpeedMod < 0 ? 0 : newSpeedMod;
    };
    Player.prototype.getDamageMod = function () { return this.damageMod; };
    Player.prototype.setDamageMod = function (newDamageMod) {
        this.damageMod = newDamageMod < 0 ? 0 : newDamageMod;
    };
    Player.prototype.getWeapon = function () { return this.weapon; };
    Player.prototype.setWeapon = function (newWeapon) {
        this.weapon = newWeapon;
    };
    Player.prototype.getInvulnurable = function () { return this.invulnurable; };
    Player.prototype.setInvulnurable = function (invulnurable) {
        this.invulnurable = invulnurable;
    };
    Player.prototype.getSize = function () { return this.size; };
    Player.prototype.setSize = function (newSize) {
        this.size = newSize;
    };
    Player.prototype.move = function (pv) {
        if ((pv.up && !pv.down) || (pv.down && !pv.up)) {
            if (pv.up)
                this.position.y -= playerConstants_1.PLAYER_SPEED * this.speedMod;
            else
                this.position.y += playerConstants_1.PLAYER_SPEED * this.speedMod;
        }
        if ((pv.left && !pv.right) || (pv.right && !pv.left)) {
            if (pv.left)
                this.position.x -= playerConstants_1.PLAYER_SPEED * this.speedMod;
            else
                this.position.x += playerConstants_1.PLAYER_SPEED * this.speedMod;
        }
    };
    Player.prototype.mainAction = function (targetLocation, session) {
        if (this.weapon instanceof _1.Gun)
            utils_1.handleGunfire(this, this.weapon, this.position, targetLocation, session);
    };
    return Player;
}());
exports.default = Player;
