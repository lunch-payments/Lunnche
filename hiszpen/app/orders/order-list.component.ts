import { Component } from 'angular2/core';

import { OrderItemComponent } from './order-item.component';
import { ORDERS } from './mock-orders'

@Component({
    selector: 'order-list',
    directives: [OrderItemComponent],
    templateUrl: 'app/orders/order-list.component.html'
})

export class OrderListComponent {
    public orders = ORDERS;
    constructor() {

    }
}
