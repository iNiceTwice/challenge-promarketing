import Image from "next/image"
import { GameInfo } from "@/app/components/GamesList"

interface GameCardFooter {
    gameName: string,
    bonus: Boolean,
    info?: GameInfo,
}

const GameCardFooter = ({ gameName, bonus, info }:GameCardFooter) => (
    <div className="flex justify-between items-center w-full z-10">
        {
            info ? 
            <div className="flex flex-row flex-wrap gap-2 w-5/6">
                <h2 className="font-bold font-roboto text-lg text-white w-full ">{ gameName }</h2>
                <h3 className="p-2 w-fit bg-accent-100/20 text-xs sm:text-sm text-zinc-300 font-bold font-roboto rounded-xl">
                    VERSION: v-{ info.version } 
                </h3>
                <h3 className="p-2 w-fit bg-accent-100/20 text-xs sm:text-sm text-zinc-300 font-bold font-roboto rounded-xl">
                    RTP: { info.rtp } 
                </h3>
                <h3 className="p-2 w-fit bg-accent-100/20 text-xs sm:text-sm text-zinc-300 font-bold font-roboto rounded-xl">
                    VOTALIDAD: ALTA
                </h3> 
            </div>
            : 
            <h2 className="invisible group-hover:visible font-bold font-roboto text-lg text-white">{ gameName }</h2>
        }
        {
            bonus && !info &&
            <div className="relative h-7 w-7">
                <Image fill loading="lazy" src="/svg/bonus.svg" alt="bonus"/>
            </div>
        }
    </div>
)

export default GameCardFooter