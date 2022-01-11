import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  hoverColor="red";
  orderDate: Date = new Date();
  prdList: IProduct[]=[];
  constructor() {
    this.prdList=[{id:100, name:"Lenvo x230 Laptop", quantity:10, price:100, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
                , {id:222, name:"Apple MacBook pro", quantity:1, price:1000, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
                , {id:333, name:"Lenovo Tab 2", quantity:0, price:1999.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
                , {id:40, name:"IPad", quantity:0, price:2000000.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
                , {id:550, name:"Samsung Note 21", quantity:2, price:300, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
                , {id:60, name:"Iphone 13", quantity:3, price:123456.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
              ];
   }

  ngOnInit(): void {
  }

}
