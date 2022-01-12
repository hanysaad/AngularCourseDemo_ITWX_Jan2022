import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  hoverColor="red";
  orderDate: Date = new Date();
  prdList: IProduct[]=[];
  @Input() receivedCatID:number=0;
  prdListOfCat:IProduct[]=[];
  orderTotalPrice:number=0;

  @Output() totalPriceChanged: EventEmitter<number>;
  constructor() {
    this.totalPriceChanged= new EventEmitter<number>();

    this.prdList=[{id:100, name:"Lenvo x230 Laptop", quantity:10, price:100, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
                , {id:222, name:"Apple MacBook pro", quantity:1, price:1000, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
                , {id:333, name:"Lenovo Tab 2", quantity:0, price:1999.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
                , {id:40, name:"IPad", quantity:0, price:2000000.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
                , {id:550, name:"Samsung Note 21", quantity:2, price:300, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
                , {id:60, name:"Iphone 13", quantity:3, price:123456.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
              ];
   }
  ngOnChanges(): void {
    this.getProductsByCatID();
  }

  ngOnInit(): void {
    
  }

  private getProductsByCatID(): void
  {
      //let filterdPrdList=this.prdList.filter(prd=>prd.categoryID==this.receivedCatID);
      // filterdPrdList= (filterdPrdList)?filterdPrdList: this.prdList;
      this.prdListOfCat= 
        (this.receivedCatID!=0)? 
          this.prdList.filter(prd=>prd.categoryID==this.receivedCatID)
          : this.prdList;

      //return filterdPrdList;
  }

  calcTotalPrice(prdPrice:any, itemsCount:any)
  {
    // this.orderTotalPrice+=(parseInt(prdPrice)* parseInt(itemsCount));
    // this.orderTotalPrice+=(Number(prdPrice)* Number(itemsCount));
    // this.orderTotalPrice+=(prdPrice as number * itemsCount as number);
    this.orderTotalPrice+=(+prdPrice * +itemsCount);
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

}
