import { ReactNode } from "react";
import GameCard from "./GameCard";
import GameCardBackground from "./GameCardBackground"
import GameCardHeading from "./GameCardHeading";
import GameCardBody from "./GameCardBody";
import GameCardFooter from "./GameCardFooter";

export interface IGameCard {
    gameName: string, 
    thumbnail: string,
    children: ReactNode,
    withInfo: Boolean
    bonus: Boolean, 
    info?:{ 
        version: number, 
        rtp: number, 
    }
    showGameInfo: () => void,
}

export const suppliersSVG = {
    EvoPlay:{
        sizes:{
            lg:"/svg/evoplay-lg",
            md:"/svg/evoplay-md",
            sm:"/svg/evoplay-sm",
        }
    },
    PlayTech:{
        sizes:{
            lg:"/svg/playtech-lg",
            md:"/svg/playtech-md",
        }
    },
    PragmaticPlay:{
        sizes:{
            lg:"/svg/pragmatic-lg",
            md:"/svg/pragmatic-md",
        }
    },
    Spinomenal:{
        sizes:{
            lg:"/svg/spinomenal-lg",
            md:"/svg/spinomenal-md",
            sm:"/svg/spinomenal-sm",
        }
    },
}



export { GameCard, GameCardBackground, GameCardHeading, GameCardBody, GameCardFooter }