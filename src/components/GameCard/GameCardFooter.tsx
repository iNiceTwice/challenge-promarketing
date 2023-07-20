import Image from "next/image"
import bonusSvg from "../../../public/svg/bonus.svg"
import { IGameCard } from "."

const GameCardFooter = ({ gameName, bonus, info }:Pick<IGameCard, "gameName" | "bonus" | "info">) => (
    <div className="flex justify-between items-center w-full z-10">
        
        {
            info ? 
            <div className="flex flex-row flex-wrap gap-2 w-1/2">
                <h2 className="font-bold font-roboto text-lg text-white w-full ">{ gameName }</h2>
                <h3 className="p-2 w-fit bg-accent-100/20 text-sm text-zinc-300 font-bold font-roboto rounded-xl">VERSION:{ info.version } </h3>
                <h3 className="p-2 w-fit bg-accent-100/20 text-sm text-zinc-300 font-bold font-roboto rounded-xl">RTP: { info.rtp } </h3>
                <h3 className="p-2 w-fit bg-accent-100/20 text-sm text-zinc-300 font-bold font-roboto rounded-xl">VOLATILIDAD: ALTA </h3> 
            </div>
            : <h2 className="invisible group-hover:visible font-bold font-roboto text-lg text-white">{ gameName }</h2>
        }
        {
            bonus && !info &&
            <div className="relative h-6 w-6">
                <Image fill loading="lazy" src={ bonusSvg } alt="bonus"/>
            </div>
        }
    </div>
)

export default GameCardFooter