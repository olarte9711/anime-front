import { useEffect, useState } from "react"
import { getDataHelper } from "../helpers/getDataHelper"


export const useFetchAnime = ( anime ) => {
    const [animes, setAnimes] = useState([])

    const getAnimes = async() => {
        const newAnimes = await getDataHelper(anime);
        setAnimes(newAnimes);
    }

    useEffect(() => {
        getAnimes();
    }, []);

    return {
        animes
    }
}