"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_1 = __importDefault(require("./socket"));
var config_1 = require("../config");
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = socket_1.default(server);
app.use(express_1.default.static('../public'));
var index_1 = require("./gameAPI/index");
io.on('connection', function (socket) {
    console.log("socket(" + socket.id + ") connected!");
    index_1.gameAPI(socket);
});
// app.get('/', (_request, response) => {
//   response.sendFile(path.join(__dirname, '../public/index.html'));
// })
server.listen(config_1.PORT, function () { return console.log("Server listening on port " + config_1.PORT); });
