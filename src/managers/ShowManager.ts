import Show from "../structures/Show";
import { handleError } from "../Errors";
import { RawObject } from "../Types";
import BaseManager from "./BaseManager";
import Episode from "../structures/Episode";

/**
 * A class which manages the shows
 */
export default class ShowManager extends BaseManager{

    /**
     * Get a spotify show information by spotify id!
     * 
     * @param id Spotify show id
     * @param force If true, will directly fetch else will search for cache first!
     * @param market The market where we need to fetch the details!
     * @example await client.shows.get('id');
     */
    async get(id: string, force: boolean = !this.client.cacheOptions.cacheShows, market: string = 'US'): Promise<Show | null> {

        try{
            if(!force){
                let existing = this.client.cache.shows.get(id);
                if(existing) return existing;
            }

            const show = new Show(await this.fetch(`/shows/${id}`, {
                params: { market }
            }), this.client);

            if(this.client.cacheOptions.cacheShows) this.client.cache.shows.set(id, show);
            return show;
        }catch(e){
            return handleError(e);
        }

    }

    /**
     * Returns the episodes of the show by id!
     * 
     * @param id Spotify show id
     * @param options Options such as limit, offset and market!
     * @example client.shows.getEpisodes('id');
     */
    async getEpisodes(id: string, options: {
        limit?: number;
        offset?: number;
        market?: string;
    } = { market: 'US' }): Promise<Episode[]> {

        try{
            const data = (await this.fetch(`/shows/${id}/episodes`, { 
                params: options as RawObject
            })).items.map(x => new Episode(x, this.client)) as Episode[];

            if(this.client.cacheOptions.cacheShows){
                for(let i = 0; i < data.length; i++) this.client.cache.episodes.set(data[i].id, data[i]);
            }

            return data;
        }catch(e){
            return handleError(e) || [];
        }

    }

}

export type { Show };