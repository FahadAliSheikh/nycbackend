"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const axios_1 = __importDefault(require("axios"));
const log = (0, debug_1.default)("app:in-memory-dao");
class PostsDao {
    constructor() {
        log("Created new instance of PostssDao");
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // call nyc posts list api
                const response = yield axios_1.default.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0A6paJRKyj8mWk9wSkV1WAinRBIMeGi7");
                if (response.status == 200)
                    return response.data;
            }
            catch (error) {
                return error.response;
            }
        });
    }
}
exports.default = new PostsDao();
