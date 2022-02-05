import { IOrder } from './../shared/models/Order';
import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrdersForUser()
      .subscribe((orders: IOrder[]) => {
        this.orders = orders;
      }, error => {
        console.log(error);
      });
  }

}
