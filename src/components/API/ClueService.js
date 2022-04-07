import axios from "axios";

export default class ClueService {
  static async getAll() {
    try {
      const responce = await axios.get(
        "https://jservice.io/api/clues?max_date=2013-01-06T12:00:00.000Z"
      );
      return responce.data;
    } catch (e) {
      console.log(e);
    }
  }
}
