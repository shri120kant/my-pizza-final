import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza/pizza.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pizzas;
  constructor(private cartService: PizzaService) { 
    
  }

  ngOnInit() {
    this.pizzas = this.cartService.getCartPizzas();
  }

}
