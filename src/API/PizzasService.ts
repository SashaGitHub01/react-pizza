import axios from "axios"

export class PizzasService {
   static getItems = async () => {
      const res = await axios.get('http://localhost:3000/database.json');

      return res.data
   }
}