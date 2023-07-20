"use client"
import { ReactNode, useState } from "react";
import { GameCardBackground, GameCardHeading, GameCardBody, GameCardFooter } from "./"

const GameCard = () => {

    const [ showInfo, setShowInfo ] = useState<Boolean>(false)

    const handleShowInfo = () => {
        setShowInfo(prevState => !prevState)
    }

    return (
        <>
            <div className="relative h-[250px] w-[400px] rounded-lg lg:rounded-2xl overflow-hidden cursor-pointer">
                {
                    showInfo ? 
                    <GameCardBackground withInfo={ showInfo } thumbnail="https://cdn.wcbackoffice.com/casinoenchile/providers/pragmatic/normal/Buffalo_King.jpeg">
                        <GameCardHeading showGameInfo={ handleShowInfo }/>
                        <GameCardFooter info={{version:1, rtp:95}} gameName="Buffalo King" bonus={ true } />
                    </GameCardBackground>
                    :
                    <GameCardBackground withInfo={ showInfo } thumbnail="https://cdn.wcbackoffice.com/casinoenchile/providers/pragmatic/normal/Buffalo_King.jpeg">
                        <GameCardHeading showGameInfo={ handleShowInfo }/>
                        <GameCardBody disabled={ false } />
                        <GameCardFooter gameName="Buffalo King" bonus={ true } />
                    </GameCardBackground>
                }  
            </div>
        </>
    );
}
 
export default GameCard;