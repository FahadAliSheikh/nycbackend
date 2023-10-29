// we import express to add types to the request/response objects from our controller functions
import express from "express";

// we import our newly created posts services
import postsService from "../services/posts.service";
import { PostsList } from "../dto/post.dto";

class PostsController {
  async listPosts(req: express.Request, res: express.Response) {
    try {
      const posts: PostsList = await postsService.list();
      res.status(200).send(posts);
    } catch (error: any) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new PostsController();
