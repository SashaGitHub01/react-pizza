import axios from "axios";

export class PizzasService {
   static getItems = async (filter: number, sort: string) => {
      const res = await axios.get(`/pizzas?${filter ? `category=${filter}&` : ''}_sort=${sort}&_order=desc`);

      return res.data;
   }
}