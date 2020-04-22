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
            owner: player.getId(),
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
exports.handleCollisions = function (players, movingObjects, session) {
    var indexesToDelete = [];
    players.forEach(function (p) { return movingObjects.forEach(function (mo, i) {
        if (exports.objectsCollide(p, mo) && p.getId() !== mo.type.owner) {
            p.setSize(p.getSize() + mo.type.size);
            if (p.getSize() > 100)
                p.setIsDead(true);
            indexesToDelete.push(i);
        }
    }); });
    session.removeManyMovingObjects(indexesToDelete);
};
exports.objectsCollide = function (p, mo) {
    var distanceBetweenObjects = (p.getPosition().x - mo.currentLocation.x) * (p.getPosition().x - mo.currentLocation.x) +
        (p.getPosition().y - mo.currentLocation.y) * (p.getPosition().y - mo.currentLocation.y);
    return distanceBetweenObjects < (p.getSize() + mo.type.size) * (p.getSize() + mo.type.size);
};
