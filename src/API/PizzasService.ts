import { instanse } from "./instanse";

export class PizzasService {
   static getItems = async (filter: number, sort: string) => {
      const res = await instanse
         .get(`/pizzas?${filter ? `category=${filter}&` : ''}_sort=${sort}&_order=desc`);

      return res.data;
   }
}