/**
 * Album lib file
 */
import Spotify from "../Spotify";
import AlbumStructure from '../structures/Album';
import SimplifiedTrack from "../structures/SimplifiedTrack";
/**
 * Class of all methods related to albums
 */
declare class Album extends Spotify {
    /**
     * **Example:**
     * ```js
     * const album = await spotify.albums.search("these two windows", { limit: 1 }); // Searches for an album. Has advanced option too...
     * ```
     *
     * @param q Your query
     * @param options Options such as limit, advanced and params
     */
    search(q: string, options?: {
        limit?: string | null | number;
        advanced?: boolean;
        params?: any;
    }): Promise<any>;
    /**
     * **Example:**
     * ```js
     * const album = await spotify.albums.get("album id"); // Get album by id...
     * ```
     *
     * @param id Id of the album
     */
    get(id: string): Promise<AlbumStructure>;
    /**
     * **Example:**
     * ```js
     * const tracks = await spotify.albums.getTracks("album id", { limit: 5 }); // Get all tracks of an album. Has advanced option too...
     * ```
     *
     * @param id Id of the song
     * @param options Options such as limit, advanced and params
     */
    getTracks(id: string, options?: {
        limit?: string | null | number;
        advanced?: boolean;
        params?: any;
    }): Promise<SimplifiedTrack[]>;
}
export default Album;
