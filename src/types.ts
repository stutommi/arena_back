
// General
export type Speed = number
type Pixel = number
type Color = string
type XCoordinate = number
type YCoordinate = number

export interface Position {
    x: XCoordinate
    y: YCoordinate
}

// Player
export interface PlayerMovement {
    up: boolean
    down: boolean
    left: boolean
    right: boolean
}

export type TargetLocation = Position

export type PlayerId = string
export type PlayerPosition = Position
export type PlayerHealth = number
export type PlayerIsDead = boolean
export type PlayerSpeedMod = number
export type PlayerDamageMod = number
export type PlayerInvulnurable = boolean


// Weapons

export type Damage = number
export type Firerate = number
export type Range = number

export type GunType = 'pistol' | 'rifle' | 'rocket launcher'

export type BulletSpeed = Speed
export type BulletForm = 'circle' | 'rectangle' 
export type BulletSize = number
export type BulletColor = Color

export interface Bullet {
    damage: Damage
    speed: BulletSpeed
    form: BulletForm
    size: BulletSize
    color: Color
}

// Moving object

export type TotalTravelDistance = Pixel
export type TravelDistancePerFrame = Pixel
export type TravelDistance = Pixel
export type CurrentLocation = Position
export interface PositionChange {
    xFrameIncrement: Pixel
    yFrameIncrement: Pixel
}

interface MovingBullet extends Bullet {
    name: string
    damage: Damage
}

type MovingObjectType = MovingBullet

export interface MovingObject {
    type: MovingObjectType
    totaltravelDistance: TotalTravelDistance
    currentLocation: CurrentLocation
    positionChange: PositionChange
}