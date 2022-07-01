import axios from "./config";
class PostService {
  async getAllPost() {
    const response = await (await axios.get('/posts')).data
    if(response) {
      return({
        status: 200,
        message: response
      })
    }
    return({
      status: 500,
      message: 'Unable to get posts'
    })
  }
}

export default new PostService();