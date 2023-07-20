import Image from "next/image"
import { suppliersSVG } from "."


interface GameCardHeading {
    showGameInfo: () => void,
    supplier: string,
    gameName: string
}


const GameCardHeading = ({ supplier, gameName, showGameInfo }:GameCardHeading) => {

    // different sizes of suppliers SVGs, they will swap in sm/md breakpoints
    const supplierMedium = suppliersSVG[supplier].sizes.md
    const supplierSmall = suppliersSVG[supplier].sizes.sm

    return (
        <div className="flex justify-between items-center z-10">
            <div className="relative max-h-fit h-10 w-12 sm:w-28">
                <Image 
                    fill 
                    className="object-contain hidden sm:block" 
                    loading="lazy" src={ supplierMedium } alt={ gameName } 
                />
                <Image 
                    fill 
                    className="object-contain block sm:hidden" 
                    loading="lazy" src={ supplierSmall ? supplierSmall : supplierMedium } alt={ gameName } 
                />
            </div>
            <button className="relative h-7 w-7 active:scale-90" onClick={ showGameInfo }>
                <Image fill src="/svg/info.svg" alt="Click for game information"/>
            </button>
        </div>
    )
}

export default GameCardHeading