import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { PorductStaticService } from 'src/app/Services/porduct-static.service';
import { ProductsFrmAPIService } from 'src/app/Services/products-frm-api.service';
import {retry, catchError} from 'rxjs/operators'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  //, providers:[PorductStaticService]
})
export class ProductListComponent implements OnInit, OnChanges {
  hoverColor="red";
  orderDate: Date = new Date();
  //prdList: IProduct[]=[];
  @Input() receivedCatID:number=0;
  prdListOfCat:IProduct[]=[];
  orderTotalPrice:number=0;

  @Output() totalPriceChanged: EventEmitter<number>;

  //private prdSrv:PorductStaticService;
  constructor(private prdSrv: ProductsFrmAPIService
            // ,private prdSrv: PorductStaticService
            , private router: Router) {
    //this.prdSrv=prdSrv;
    this.totalPriceChanged= new EventEmitter<number>();

    // this.prdList=[{id:100, name:"Lenvo x230 Laptop", quantity:10, price:100, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
    //             , {id:222, name:"Apple MacBook pro", quantity:1, price:1000, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
    //             , {id:333, name:"Lenovo Tab 2", quantity:0, price:1999.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
    //             , {id:40, name:"IPad", quantity:0, price:2000000.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
    //             , {id:550, name:"Samsung Note 21", quantity:2, price:300, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
    //             , {id:60, name:"Iphone 13", quantity:3, price:123456.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
    //           ];
   }

  ngOnChanges(): void {
    //this.getProductsByCatID();
    //this.prdListOfCat=this.prdSrv.getByCatID(this.receivedCatID);
    this.prdSrv.getProductsByCatID(this.receivedCatID)
    // .pipe(
    //   retry(3),
    //   catchError(
    // )
    .subscribe((prdList)=>{
      this.prdListOfCat=prdList;
    });
    // .subscribe({
    //     next: (prdList)=>{
    //       this.prdListOfCat=prdList;
    //     }, 
    //     error: (err)=>{
    //       console.log(err)
    //     }
    //   });
    }

  ngOnInit(): void {
    //this.prdListOfCat=this.prdSrv.getByCatID(this.receivedCatID);
    this.prdSrv.getAllProducts().subscribe((prdList)=>{
      this.prdListOfCat=prdList;
    })
  }

  // private getProductsByCatID(): void
  // {
  //     //let filterdPrdList=this.prdList.filter(prd=>prd.categoryID==this.receivedCatID);
  //     // filterdPrdList= (filterdPrdList)?filterdPrdList: this.prdList;
  //     this.prdListOfCat= 
  //       (this.receivedCatID!=0)? 
  //         this.prdList.filter(prd=>prd.categoryID==this.receivedCatID)
  //         : this.prdList;

  //     //return filterdPrdList;
  // }

  calcTotalPrice(prdPrice:any, itemsCount:any)
  {
    // this.orderTotalPrice+=(parseInt(prdPrice)* parseInt(itemsCount));
    // this.orderTotalPrice+=(Number(prdPrice)* Number(itemsCount));
    // this.orderTotalPrice+=(prdPrice as number * itemsCount as number);
    this.orderTotalPrice+=(+prdPrice * +itemsCount);
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  openProductDetails(prdID:number)
  {
    // this.router.navigate([`/Product/${prdID}`]);
    this.router.navigate(['/Product',prdID]);
  }

}
