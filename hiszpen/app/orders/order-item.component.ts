import { Component, Input } from 'angular2/core';
import { Hero } from './Order';

@Component({
    selector: '.order-item',
    templateUrl: 'app/orders/order-item.component.html'
})

export class OrderItemComponent {
    hero: Hero;

    @Input() order;
    constructor() {
    }
}
