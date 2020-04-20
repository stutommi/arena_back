import { Session, Player, Gun } from './classes'
import { Position, MovingObject, PositionChange, Speed } from './types'

export const countPositionChange = (startPos: Position, endPos: Position, speed: Speed): PositionChange => {
    return {
        xFrameIncrement: (endPos.x - startPos.x) / speed,
        yFrameIncrement: (endPos.y - startPos.y) / speed
    }
}

export const handleGunfire = (player: Player, gun: Gun, startPos: Position, targetLocation: Position, session: Session): void => {
    const newBullet: MovingObject = {
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
        positionChange: countPositionChange(startPos, targetLocation, gun.bullet.speed)
    }
    session.addMovingObject(newBullet)
}

export const moveObject = (curLocation: Position, incrementValues: PositionChange) => {
    curLocation.x += incrementValues.xFrameIncrement
    curLocation.y += incrementValues.yFrameIncrement
}