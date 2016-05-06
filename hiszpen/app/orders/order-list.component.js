"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var order_item_component_1 = require('./order-item.component');
var mock_orders_1 = require('./mock-orders');
var OrderListComponent = (function () {
    function OrderListComponent() {
        this.orders = mock_orders_1.ORDERS;
    }
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'order-list',
            directives: [order_item_component_1.OrderItemComponent],
            templateUrl: 'app/orders/order-list.component.html'
        })
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map