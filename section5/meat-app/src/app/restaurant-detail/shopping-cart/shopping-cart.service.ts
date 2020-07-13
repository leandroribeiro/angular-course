import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import 'rxjs/add/operator/map';

export class ShoppingCartService {


  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  total(): number {
    if (this.items) {
      return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    } else {
      return 0;
    }

  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

}
