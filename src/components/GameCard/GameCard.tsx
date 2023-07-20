"use client"
import { ReactNode, useState } from "react";
import { GameCardContainer, GameCardHeading, GameCardBody, GameCardFooter } from "./"
import { Game } from "@/app/components/GamesList";

interface GameCard {
    gameData: Game,
}

const GameCard = ({ gameData }:GameCard) => {

    const [ showInfo, setShowInfo ] = useState<Boolean>(false)
    const { name, info, supplier, src, disabled } = gameData
   
    const handleShowInfo = () => {
        setShowInfo(prevState => !prevState)
    }

    return (
        <>
            <div className="relative min-h-[200px] h-[13vw] w-[20vw] min-w-[250px] rounded-lg lg:rounded-2xl overflow-hidden cursor-pointer">
                {
                    showInfo ? 
                    <GameCardContainer withInfo={ showInfo } thumbnail={ src }>
                        <GameCardHeading gameName={ name } supplier={ supplier } showGameInfo={ handleShowInfo }/>
                        <GameCardFooter info={ info } gameName={ name } bonus={ info.moodBonus }/>
                    </GameCardContainer>
                    :
                    <GameCardContainer withInfo={ showInfo } thumbnail={ src }>
                        <GameCardHeading gameName={ name } supplier={ supplier } showGameInfo={ handleShowInfo }/>
                        <GameCardBody disabled={ disabled }/>
                        <GameCardFooter gameName={ name } bonus={ info.moodBonus }/>
                    </GameCardContainer>
                }  
            </div>
        </>
    );
}
 
export default GameCard;