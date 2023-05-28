import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList:any[] = [];
  subTotal:number;
  shipping:number=0;
  standardShipping:number = 10;
  expressShipping:number = 20;
  constructor() { }

  ngOnInit(): void {
    this.cartList = [
      {
        title: 'Beige knitted elastic runner shoes',
        img: '../../../assets/images/products/table/product-1.jpg',
        price: "84.00",
        quantity: 1
      },
      {
        title: 'Blue utility pinafore denim dress',
        img: '../../../assets/images/products/table/product-2.jpg',
        price: "76.00",
        quantity: 5
      }
    ];
    this.subTotals();
  }
  updateQuantity(event: { target: { value: number; }; }, index: number) {
    if (this.cartList[index] && event.target.value > 0) {
      this.cartList[index]["quantity"] = event.target.value;
    }
    this.subTotals();
  }
  
  subTotals() {
    this.subTotal = this.cartList.reduce((total, cart) => (cart.quantity * cart.price) + total,0);
    console.log(this.subTotal);
  }
  getShiiping(event) {
    if(event.target.value) {
      this.shipping = Number(event.target.value);
    }
  }
}
