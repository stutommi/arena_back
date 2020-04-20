"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countPositionChange = function (startPos, endPos, speed) {
    return {
        xFrameIncrement: (endPos.x - startPos.x) / speed,
        yFrameIncrement: (endPos.y - startPos.y) / speed
    };
};
exports.handleGunfire = function (player, gun, startPos, targetLocation, session) {
    var newBullet = {
        type: {
            name: 'bullet',
            damage: player.getDamageMod() * gun.bullet.damage,
            size: gun.bullet.damage,
            speed: gun.bullet.speed,
            color: gun.bullet.color,
            form: gun.bullet.form
        },
        totaltravelDistance: gun.range,
        currentLocation: { x: startPos.x, y: startPos.y },
        positionChange: exports.countPositionChange(startPos, targetLocation, gun.bullet.speed)
    };
    session.addMovingObject(newBullet);
};
exports.moveObject = function (curLocation, incrementValues) {
    curLocation.x += incrementValues.xFrameIncrement;
    curLocation.y += incrementValues.yFrameIncrement;
};
