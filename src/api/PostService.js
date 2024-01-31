import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    })
    return response
  }
  static async getById(postId) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return response
  }
  static async getCommentsById(postId) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return response
  }
}