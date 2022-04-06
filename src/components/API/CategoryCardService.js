import axios from "axios";

export default class CategoryCardService {
  static async getAll(id) {
    try {
      const responce = await axios.get(
        `https://jservice.io/api/category?id=${id}`
      );
      return responce.data;
    } catch (e) {
      console.log(e);
    }
  }
}
