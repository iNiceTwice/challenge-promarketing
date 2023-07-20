import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer"
import GameCardHeading from "./GameCardHeading";
import GameCardBody from "./GameCardBody";
import GameCardFooter from "./GameCardFooter";

interface SupplierSizes {
  md: string
  sm?: string
}

interface SuppliersSVG {
  [key: string]: {
    sizes: SupplierSizes
  };
}

export const suppliersSVG:SuppliersSVG = {
    Evoplay:{
        sizes:{
            md:"/svg/evoplay-md.svg",
            sm:"/svg/evoplay-sm.svg",
        }
    },
    PlayTech:{
        sizes:{
            md:"/svg/playtech-md.svg",
        }
    },
    PragmaticPlay:{
        sizes:{
            md:"/svg/pragmatic-md.svg",
        }
    },
    Spinomenal:{
        sizes:{
            md:"/svg/spinomenal-md.svg",
            sm:"/svg/spinomenal-sm.svg",
        }
    },
}



export { GameCard, GameCardContainer, GameCardHeading, GameCardBody, GameCardFooter }