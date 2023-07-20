import { getGames } from "@/services/games.service";
import { GameCard } from "@/components/GameCard";
import { Game } from ".";

const GamesList = async () => {

    const games = await getGames()

    return ( 
        <ul className="w-11/12 md:w-10/12 grid md:grid-cols-2 lg:grid-cols-3 xlgrid-cols-4 gap-y-4">
            {
                games.map((game:Game, index:number) => (
                    <li className="flex justify-center w-full" key={ game.name + index }>
                        <GameCard gameData={ game } />
                    </li>
                ))
            }
        </ul>
     );
}
 
export default GamesList;