import { Bullet, Damage, Firerate, Range } from '../types'
import { Weapon, Player} from './'

export class Gun extends Weapon {
    public bullet: Bullet

    constructor(damage: Damage, firerate: Firerate, range: Range, bullet: Bullet) {
        super(damage, firerate, range)
        this.bullet = bullet
    }

    fireAction(playerDmgMod: Player): void {
    }
}

export default Gun