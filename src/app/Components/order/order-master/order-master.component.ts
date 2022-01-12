import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[];
  selectedCatID:number=0;
  OrderTotalPrice:number=0;

  // @ViewChild('clientNameInput') clientNameInputObj:ElementRef | null = null;
  // @ViewChild('clientNameInput') clientNameInputObj?:ElementRef;
  // @ViewChild('clientNameInput') clientNameInputObj:ElementRef= {} as ElementRef;

  //Non-null assertion operator: Non-null assertion operator ... A new ! post-fix expression operator may be used to assert that its operand is non-null and non-undefined in contexts 
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
  @ViewChild('clientNameInput') clientNameInputObj!:ElementRef;
  @ViewChild(ProductListComponent) childComponent!:ProductListComponent;
  constructor() { 
    this.catList=[
      {id:1, name:"Laptops"},
      {id:2, name:"Tablets"},
      {id:3, name:"Mobiles"}
    ];
    console.log("In Constructor...");
  }
 
  ngOnInit(): void {
    console.log("In ngOnInit...");
  }

  ngAfterViewInit(): void {
    console.log("In ngAfterViewInit...");
    this.clientNameInputObj.nativeElement.value="Changed from TS";
    console.log(`Input Val: ${this.clientNameInputObj.nativeElement.value}`);

    console.log(this.childComponent.prdListOfCat);
  }

  testViewChild()
  {
    console.log(this.childComponent.prdListOfCat);
  }

  onTotalPriceChanged(totalPrice:number)
  {
    this.OrderTotalPrice=totalPrice;
  }
  

}
