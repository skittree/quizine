import axios from "axios";

export default class CategoryService {
  static async getAll() {
    try {
      const responce = await axios.get(
        "https://jservice.io/api/categories?count=100"
      );
      return responce.data;
    } catch (e) {
      console.log(e);
    }
  }
}
