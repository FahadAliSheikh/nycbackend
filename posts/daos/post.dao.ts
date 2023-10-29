import debug from "debug";
import axios from "axios";

const log: debug.IDebugger = debug("app:in-memory-dao");

class PostsDao {
  constructor() {
    log("Created new instance of PostssDao");
  }

  async getPosts() {
    try {
      // call nyc posts list api
      const response = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0A6paJRKyj8mWk9wSkV1WAinRBIMeGi7"
      );
      if (response.status == 200) return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
}

export default new PostsDao();
