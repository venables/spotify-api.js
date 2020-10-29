"use strict";
/**
 * User lib file
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Error_1 = require("../Error");
const Spotify_1 = __importDefault(require("../Spotify"));
/**
 * Class of all methods related to users
 */
class User extends Spotify_1.default {
    /**
     * @param id Id of the user
     *
     * **Example:**
     * ```js
     * const user = await spotify.users.get("id"); // Returns the user details by id...
     * ```
     */
    async get(id) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!id)
                    reject(new Error_1.MissingParamError("missing id to fetch user"));
                const res = await this.fetch({
                    link: `v1/users/${id}`,
                });
                res.codeImage = `https://scannables.scdn.co/uri/plain/jpeg/e8e6e6/black/1080/${res.uri}`;
                resolve(res);
            }
            catch (e) {
                reject(new Error_1.UnexpectedError(e));
            }
            ;
        });
    }
    ;
}
;
exports.default = User;
//# sourceMappingURL=User.js.map