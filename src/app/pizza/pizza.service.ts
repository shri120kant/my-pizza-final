import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas=[];
  uri = 'http://localhost:4000/pizza';
  constructor(private httpClient:HttpClient) {
   }
   public getPizzas():Observable<Pizza[]>{
     return this.httpClient.get<Pizza[]>(`${this.uri}`+'/pizzas');
   }

  public getPizza(pizzaId:number):any{
   
    return this.httpClient.get<Pizza>(`${this.uri}`+'/'+`${pizzaId}`);
  }

  public deletePizza(pizzaId:number){
     return this.httpClient.delete(`${this.uri}`+'/delete/'+`${pizzaId}`)
          .subscribe(res => console.log('Done'));
    }

    public addToCart(pizza){
      this.pizzas.push(pizza);
    }
    getCartPizzas() {
      return this.pizzas;
    }
    
}
