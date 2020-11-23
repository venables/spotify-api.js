/**
 * LinkedTrack Structure
 */
import { CodeImageReturn } from './Interface';
/**
 * LinkedTrack Class
 */
declare class LinkedTrack {
    data: any;
    externalUrls: any;
    href: string;
    id: string;
    type: string;
    uri: string;
    /**
     * **Example:**
     *
     * ```js
     * const track = new LinkedTrack(data);
     * ```
     *
     * @param data Received raw data from the spotify api
     */
    constructor(data: any);
    /**
     * Returns the code image with dominant color
     */
    getCodeImage(): Promise<CodeImageReturn>;
    /**
     * Returns the uri data
     */
    getURIData(): Promise<any>;
}
export default LinkedTrack;
