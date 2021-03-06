import {Injectable} from '@angular/core';
import {ShoppingCartService} from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model';
import {Order} from './order.model';
import {Observable} from 'rxjs';
import {Headers, Http, RequestOptions} from '@angular/http';
import {MEAT_API} from '../../app.api';

@Injectable()
export class OrderService {

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  constructor(private cartService: ShoppingCartService, private http: Http) {
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  itemsValue() {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${MEAT_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({headers: headers})).map(response => response.json()).map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }
}
