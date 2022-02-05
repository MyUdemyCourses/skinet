import { IBasketItem, IBasketTotals } from './../shared/models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './basket.service';
import { Component, OnInit } from '@angular/core';
import { IBasket } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket$: Observable<IBasket>;
  basketTotal$: Observable<IBasketTotals>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basketTotal$ = this.basketService.basketTotal$;
  }

  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this.basketService.decrementItemQuantity(item);
  }

}
