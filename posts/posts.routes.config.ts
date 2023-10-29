import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import postsController from "./controllers/posts.controller";

export class PostsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "PostsRoutes");
  }

  configureRoutes() {
    this.app.route(`/posts`).get(postsController.listPosts);
    // other routes below
    return this.app;
  }
}
