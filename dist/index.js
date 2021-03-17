"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = exports.Episode = exports.PlaylistTrack = exports.Playlist = exports.User = exports.ShowManager = exports.EpisodeManager = exports.PlaylistManager = exports.UserManager = exports.BaseManager = exports.AuthManager = exports.Collection = exports.Client = exports.Util = exports.version = void 0;
const Client_1 = __importDefault(require("./Client"));
exports.version = '8.0.0';
var Util_1 = require("./Util");
Object.defineProperty(exports, "Util", { enumerable: true, get: function () { return __importDefault(Util_1).default; } });
var Client_2 = require("./Client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return __importDefault(Client_2).default; } });
var Collection_1 = require("./Collection");
Object.defineProperty(exports, "Collection", { enumerable: true, get: function () { return __importDefault(Collection_1).default; } });
var AuthManager_1 = require("./managers/AuthManager");
Object.defineProperty(exports, "AuthManager", { enumerable: true, get: function () { return __importDefault(AuthManager_1).default; } });
var BaseManager_1 = require("./managers/BaseManager");
Object.defineProperty(exports, "BaseManager", { enumerable: true, get: function () { return __importDefault(BaseManager_1).default; } });
var UserManager_1 = require("./managers/UserManager");
Object.defineProperty(exports, "UserManager", { enumerable: true, get: function () { return __importDefault(UserManager_1).default; } });
var PlaylistManager_1 = require("./managers/PlaylistManager");
Object.defineProperty(exports, "PlaylistManager", { enumerable: true, get: function () { return __importDefault(PlaylistManager_1).default; } });
var EpisodeManager_1 = require("./managers/EpisodeManager");
Object.defineProperty(exports, "EpisodeManager", { enumerable: true, get: function () { return __importDefault(EpisodeManager_1).default; } });
var ShowManager_1 = require("./managers/ShowManager");
Object.defineProperty(exports, "ShowManager", { enumerable: true, get: function () { return __importDefault(ShowManager_1).default; } });
var User_1 = require("./structures/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return __importDefault(User_1).default; } });
var Playlist_1 = require("./structures/Playlist");
Object.defineProperty(exports, "Playlist", { enumerable: true, get: function () { return __importDefault(Playlist_1).default; } });
Object.defineProperty(exports, "PlaylistTrack", { enumerable: true, get: function () { return Playlist_1.PlaylistTrack; } });
var Episode_1 = require("./structures/Episode");
Object.defineProperty(exports, "Episode", { enumerable: true, get: function () { return __importDefault(Episode_1).default; } });
var Show_1 = require("./structures/Show");
Object.defineProperty(exports, "Show", { enumerable: true, get: function () { return __importDefault(Show_1).default; } });
__exportStar(require("./Errors"), exports);
__exportStar(require("./Types"), exports);
exports.default = Client_1.default;
