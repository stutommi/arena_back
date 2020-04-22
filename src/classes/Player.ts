import {
    Position,
    PlayerMovement,
    PlayerId,
    PlayerPosition,
    PlayerHealth,
    PlayerIsDead,
    PlayerSpeedMod,
    PlayerDamageMod,
    PlayerInvulnurable,
    PlayerSize,
    TargetLocation
} from '../types'
import { Weapon, Session, Gun } from './'
import { PLAYER_SPEED } from '../gameAPI/constants/playerConstants'
import { getGun } from '../gameAPI/constants/weaponConstants'
import { handleGunfire } from '../utils'

class Player {
    private id: PlayerId
    private position: PlayerPosition
    private health: PlayerHealth
    private isDead: PlayerIsDead
    private speedMod: PlayerSpeedMod
    private damageMod: PlayerDamageMod
    private invulnurable: PlayerInvulnurable
    private weapon: Weapon
    private size: PlayerSize

    constructor(
        id: PlayerId,
        position: Position = { x: 100, y: 100 },
        health: PlayerHealth = 100,
        isDead: PlayerIsDead = false,
        speedMod: PlayerSpeedMod = 1,
        damageMod: PlayerDamageMod = 1,
        invulnurable: PlayerInvulnurable = false,
        weapon: Weapon = getGun('pistol'),
        size: PlayerSize = 10
    ) {
        this.id = id
        this.position = position
        this.health = health
        this.isDead = isDead
        this.isDead = isDead
        this.speedMod = speedMod
        this.damageMod = damageMod
        this.invulnurable = invulnurable
        this.weapon = weapon
        this.size = size
    }

    getId(): PlayerId { return this.id }
    setId(newId: PlayerId): void { this.id = newId }

    getPosition(): PlayerPosition { return this.position }
    setPosition(newPosition: Position): void { this.position = newPosition }

    getHealth(): PlayerHealth { return this.health }
    setHealth(newHealth: PlayerHealth): void {
        this.health = newHealth < 0 ? 0 : newHealth

        this.isDead = this.health == 0 && !this.invulnurable ? true : false
    }

    getIsDead(): PlayerIsDead { return this.isDead }
    setIsDead(isDead: PlayerIsDead): void { this.isDead = isDead }

    getSpeedMod(): PlayerSpeedMod { return this.speedMod }
    setSpeedMod(newSpeedMod: PlayerSpeedMod): void {
        this.speedMod = newSpeedMod < 0 ? 0 : newSpeedMod
    }

    getDamageMod(): PlayerDamageMod { return this.damageMod }
    setDamageMod(newDamageMod: PlayerDamageMod): void {
        this.damageMod = newDamageMod < 0 ? 0 : newDamageMod
    }

    getWeapon(): Weapon { return this.weapon }
    setWeapon(newWeapon: Weapon): void {
        this.weapon = newWeapon
    }

    getInvulnurable(): PlayerInvulnurable { return this.invulnurable }
    setInvulnurable(invulnurable: PlayerInvulnurable): void {
        this.invulnurable = invulnurable
    }

    getSize(): PlayerSize { return this.size }
    setSize(newSize: PlayerSize): void {
        this.size = newSize
    }

    move(pv: PlayerMovement): void {
        if ((pv.up && !pv.down) || (pv.down && !pv.up)) {
            if (pv.up) this.position.y -= PLAYER_SPEED * this.speedMod
            else this.position.y += PLAYER_SPEED * this.speedMod
        }
        if ((pv.left && !pv.right) || (pv.right && !pv.left)) {
            if (pv.left) this.position.x -= PLAYER_SPEED * this.speedMod
            else this.position.x += PLAYER_SPEED * this.speedMod
        }
    }

    mainAction(targetLocation: TargetLocation, session: Session): void {
        if (this.weapon instanceof Gun)
        handleGunfire(this, this.weapon as Gun, this.position, targetLocation, session)
    }
}

export default Player