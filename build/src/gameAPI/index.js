"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../classes");
var socket_1 = __importDefault(require("../socket"));
var sessionConstants_1 = require("./constants/sessionConstants");
var session = new classes_1.Session();
var io = socket_1.default();
exports.gameAPI = function (socket) {
    var player = new classes_1.Player(socket.id);
    session.addPlayer(player);
    console.log("new player inda HOUUUUUSE | TOTAL(" + session.getPlayerCount() + ")");
    socket.on('playerMovement', function (playerMovement) { player.move(playerMovement); });
    socket.on('playerMainAction', function (targetLocation) { player.mainAction(targetLocation, session); });
    socket.on('disconnect', function () {
        console.log("socket(" + socket.id + ") disconnected!");
        session.removePlayer(socket.id);
    });
};
setInterval(function () {
    session.handleFrame(io);
}, 1000 / sessionConstants_1.SESSION_FPS);
exports.default = exports.gameAPI;
