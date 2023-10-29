"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const posts_controller_1 = __importDefault(require("./controllers/posts.controller"));
class PostsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "PostsRoutes");
    }
    configureRoutes() {
        this.app.route(`/posts`).get(posts_controller_1.default.listPosts);
        // other routes below
        return this.app;
    }
}
exports.PostsRoutes = PostsRoutes;
