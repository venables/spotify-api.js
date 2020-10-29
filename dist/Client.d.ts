/**
 * File where Client class exists...
 */
import Auth from './lib/Oauth';
import User from './lib/User';
import Playlist from './lib/Playlist';
import Track from './lib/Track';
import Album from './lib/Album';
import Artist from './lib/Artist';
/**
 * Client class
 * The class which collects all the methods
 */
export default class {
    token: string;
    utils: any;
    lib: {
        Auth: any;
        User: any;
        Playlist: any;
        Track: any;
        Album: any;
        Artist: any;
    };
    oauth: Auth;
    users: User;
    playlists: Playlist;
    tracks: Track;
    albums: Album;
    artists: Artist;
    /**
     * @param oauth Token
     *
     * Pass the spotify oauth `token`
     * ```js
     * const Spotify = require('spotify-api.js')
     * const client = new Spotify.Client('oauth token')
     * ```
     */
    constructor(oauth: string);
}
