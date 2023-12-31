import Image from "next/image"
import { ReactNode } from "react"

interface GameCardContainer {
    thumbnail: string,
    children: ReactNode,
    withInfo: Boolean
}

const GameCardContainer = ({ thumbnail, children, withInfo }:GameCardContainer) => {

    // this works to prevent the gradient background persist when it shows the game info
    const backgroundVariants = {    
        darkGradientOnHover:"absolute flex flex-col justify-between z-10 w-full h-full p-3 hover:bg-black/20 hover:bg-gradient-to-t hover:from-black hover:to-transparent group",
        darkGradientOnInfo:"absolute flex flex-col justify-between z-10 w-full h-full p-3 bg-black/20 bg-gradient-to-t from-black to-transparent group"
    }

    return (
        <div className="absolute h-full w-full z-50 flex justify-center items-center">
            <div className={ withInfo ? backgroundVariants.darkGradientOnInfo : backgroundVariants.darkGradientOnHover }>
                { children }
            </div>
            <Image className="relative z-0 object-center object-fill" fill loading="lazy" src={ thumbnail } alt="buffalo king"/>   
        </div>
    )
}

export default GameCardContainer