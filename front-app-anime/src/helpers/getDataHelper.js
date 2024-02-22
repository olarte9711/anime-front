
export const getDataHelper = async (anime) => {

    const url = `https://anime-back-aums.vercel.app/anime?name=${anime}`;
    const resp = await fetch( url );
    const data = await resp.json();
    return data
}
