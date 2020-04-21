"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../../classes");
/* --  LEGEND  --
DAMAGE: Damage of the bullet makes on impact
FIRERATE: The cooldown in milliseconds before another shot can be fired
RANGE: The range of bullet from start to end in pixels

BULLET:
  SPEED: How many pixels bullet travels between each frame
  FORM: Rendered form of bullet.
  SIZE: Size of a bullet in pixels
*/
// PISTOL
var PISTOL_DAMAGE = 3;
var PISTOL_FIRERATE = 300;
var PISTOL_RANGE = 50;
var PISTOL_BULLET = { damage: 5, speed: 50, form: 'circle', size: 2, color: '#778899' };
// RIFLE
var RIFLE_DAMAGE = 5;
var RIFLE_FIRERATE = 500;
var RIFLE_RANGE = 100;
var RIFLE_BULLET = { damage: 15, speed: 7, form: 'circle', size: 3, color: '#000' };
exports.getGun = function (type) {
    switch (type) {
        case 'pistol':
            return (new classes_1.Gun(PISTOL_DAMAGE, PISTOL_FIRERATE, PISTOL_RANGE, PISTOL_BULLET));
            break;
        case 'rifle':
            return (new classes_1.Gun(RIFLE_DAMAGE, RIFLE_FIRERATE, RIFLE_RANGE, RIFLE_BULLET));
            break;
        default:
            return (new classes_1.Gun(PISTOL_DAMAGE, PISTOL_FIRERATE, PISTOL_RANGE, PISTOL_BULLET));
            break;
    }
};
