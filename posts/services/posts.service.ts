import PostsDao from "../daos/post.dao";

class PostsService {
  async list(): Promise<any> {
    return await PostsDao.getPosts();
  }
}

export default new PostsService();
