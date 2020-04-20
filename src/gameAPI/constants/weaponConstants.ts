import { Gun } from '../../classes'
import { GunType, Damage, Firerate, Range, Bullet } from '../../types'

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
const PISTOL_DAMAGE: Damage = 3
const PISTOL_FIRERATE: Firerate = 300
const PISTOL_RANGE: Range = 50
const PISTOL_BULLET: Bullet = { damage: 5 , speed: 5, form: 'circle', size: 2, color: '#778899' }

// RIFLE
const RIFLE_DAMAGE: Damage = 5
const RIFLE_FIRERATE: Firerate = 500
const RIFLE_RANGE: Range = 100
const RIFLE_BULLET: Bullet = { damage: 15, speed: 7, form: 'circle', size: 3, color: '#000' }

export const getGun = (type: GunType): Gun => {
    switch (type) {
        case 'pistol':
            return (new Gun(PISTOL_DAMAGE, PISTOL_FIRERATE, PISTOL_RANGE, PISTOL_BULLET))
            break
        case 'rifle':
            return (new Gun(RIFLE_DAMAGE, RIFLE_FIRERATE, RIFLE_RANGE, RIFLE_BULLET))
            break
        default:
            return (new Gun(PISTOL_DAMAGE, PISTOL_FIRERATE, PISTOL_RANGE, PISTOL_BULLET))
            break
    }
}