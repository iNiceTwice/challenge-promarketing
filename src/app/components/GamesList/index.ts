import GamesList from "./GamesList";

export interface GameInfo {
    moodBonus: Boolean,
    rtp: number,
    version: number,
}

export interface Game { 
    disabled: Boolean,
    info: GameInfo
    name: string,
    src: string,
    supplier: string
  ,
}

export { GamesList }