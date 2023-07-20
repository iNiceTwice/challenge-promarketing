import { Button } from "../Button";
import styles from "./GameCard.module.css"

const GameCardBody = ({ disabled }:{ disabled:Boolean }) => (
    <div className={`${ styles.card } hidden group-hover:flex items-center justify-center w-full h-full z-20`}>
        {
            disabled ?
            <Button color="disabled">NO DISPONIBLE</Button>
            :
            <Button color="accent">JUGAR AHORA</Button>
        }
    </div>
)

export default GameCardBody