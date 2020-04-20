import { Damage, Firerate, Range } from '../types'
import { Player } from './'

export class Weapon {
    public damage: Damage
    public firerate: Firerate
    public range: Range

    constructor(damage: Damage, firerate: Firerate, range: Range) {
        this.damage = damage
        this.firerate = firerate
        this.range = range
    }

    fireAction(playerDmgMod: Player): void {
        console.log('needs to be overwritten by childclasses');
    }
}

export default Weapon