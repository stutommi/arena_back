"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var Session = /** @class */ (function () {
    function Session() {
        this.players = [];
        this.movingObjects = [];
    }
    Session.prototype.getPlayers = function () { return this.players; };
    Session.prototype.getPlayerCount = function () { return this.players.length; };
    Session.prototype.addPlayer = function (player) { this.players.push(player); };
    Session.prototype.removePlayer = function (playerId) {
        this.players.splice(this.players.findIndex(function (p) { return p.getId() === playerId; }), 1);
    };
    Session.prototype.addMovingObject = function (movingObject) {
        this.movingObjects.push(movingObject);
    };
    Session.prototype.getClientData = function () {
        return this.players;
    };
    Session.prototype.handleFrame = function (io) {
        io.emit('state', { players: this.players, movingObjects: this.movingObjects });
        this.handleMovingObjects();
    };
    Session.prototype.handleMovingObjects = function () {
        this.movingObjects.forEach(function (mv) {
            if (mv.type.name === 'bullet') {
                utils_1.moveObject(mv.currentLocation, mv.positionChange);
            }
        });
        utils_1.handleCollisions(this.players, this.movingObjects, this);
    };
    Session.prototype.removeManyMovingObjects = function (idArr) {
        this.movingObjects = this.movingObjects.filter(function (_, i) { return !idArr.includes(i); });
    };
    Session.prototype.clearSession = function () {
        this.players = [];
        this.movingObjects = [];
    };
    return Session;
}());
exports.default = Session;
