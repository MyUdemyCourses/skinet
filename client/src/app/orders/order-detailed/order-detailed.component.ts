import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from './../orders.service';
import { IOrder } from './../../shared/models/Order';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {

  order: IOrder;

  constructor(private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private bsService: BreadcrumbService) {
    this.bsService.set('@OrderDetailed', '');
  }

  ngOnInit(): void {
    this.ordersService.getOrderDetailed(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe((order: IOrder) => {
        this.order = order;
        this.bsService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
      }, error => {
        console.log(error);
      })
  }
}
