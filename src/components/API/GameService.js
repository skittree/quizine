import axios from "axios";

export default class GameService {
  static async getAll() {
    try {
      const responce = await axios.get(
        `https://jservice.io/api/random?count=10`
      );
      return responce.data;
    } catch (e) {
      console.log(e);
    }
  }
}
