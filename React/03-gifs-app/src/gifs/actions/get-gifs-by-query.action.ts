
import type { GiphyResponse } from "../interfaces/giphy.response";
import { giphyapi } from "../api/giphy.api";


export const getGifsByQuery = async( query:string ) => {
    const response = await giphyapi<GiphyResponse>(`/search`, {
        params: {
            q: query,
            limit: 25,
            rating: 'r',
        }
    });
    // const data = response.data;
    // console.log({data})
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
}