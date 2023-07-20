import { GoInfo } from "react-icons/go"
import Image from "next/image"
import pragmaticMD from "../../../public/svg/pragmatic-md.svg"
import { IGameCard } from "."

const GameCardHeading = ({ showGameInfo }:Pick<IGameCard, "showGameInfo">) => (
    <div className="flex justify-between items-center z-10">
        <div className="relative h-10 w-28">
            <Image className="object-contain" fill loading="lazy" src={ pragmaticMD } alt="buffalo king"/>
        </div>
        <button className="h-fit active:scale-90" onClick={ showGameInfo }>
            <GoInfo className="text-white" size={25} />
        </button>
    </div>
)

export default GameCardHeading