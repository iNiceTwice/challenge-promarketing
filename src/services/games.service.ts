import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_GAMES_API ?? ""

/** getGames - get the games data (name, disabled, supplier, etc...)
 * 
 * @param none
 * @return an array with games information
 * @return it may return an error to handle it directly in the component
 * 
*/

export const getGames = async () => {
    
    try {

        const response = await axios.get(API_URL)
        return response.data

    } catch (error) {

        console.log(error)
        return { error }

    }
}