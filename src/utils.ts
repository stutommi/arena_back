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
            owner: player.getId(),
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

export const moveObject = (curLocation: Position, incrementValues: PositionChange): void => {
    curLocation.x += incrementValues.xFrameIncrement
    curLocation.y += incrementValues.yFrameIncrement
}

export const handleCollisions = (players: Player[], movingObjects: MovingObject[], session: Session): void => {
    const indexesToDelete: number[] = []
    players.forEach(p => movingObjects.forEach((mo, i) => {
        if (objectsCollide(p, mo) && p.getId() !== mo.type.owner) {
            p.setSize(p.getSize() + mo.type.size)
            if (p.getSize() > 100) p.setIsDead(true)
            indexesToDelete.push(i)
        }
    }))
    session.removeManyMovingObjects(indexesToDelete)
}

export const objectsCollide = (p: Player, mo: MovingObject) => {
    const distanceBetweenObjects =
        (p.getPosition().x - mo.currentLocation.x) * (p.getPosition().x - mo.currentLocation.x) +
        (p.getPosition().y - mo.currentLocation.y) * (p.getPosition().y - mo.currentLocation.y)

    return distanceBetweenObjects < (p.getSize() + mo.type.size) * (p.getSize() + mo.type.size)
}