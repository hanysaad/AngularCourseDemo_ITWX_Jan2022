import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsFrmAPIService } from 'src/app/Services/products-frm-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newPrd: IProduct = {} as IProduct;
  catList: ICategory[];
  constructor(private prdSrv: ProductsFrmAPIService
    , private router: Router) {
    this.catList = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Tablets" },
      { id: 3, name: "Mobiles" }
    ];
    this.newPrd.imgURL='';
    // this.newPrd={
    //   id:100,
    //   name:'Mobile Frm API',
    //   price: 1000,
    //   quantity:10,
    //   imgURL:'',
    //   categoryID:3
    // }
  }

  ngOnInit(): void {
  }

  insertProduct() {
    this.prdSrv.postProduct(this.newPrd)
      .subscribe({
        next: (prd => {
          this.router.navigate(['/Product'])
        }),
        error: (err) => {
          console.log(err);
        }
      });
  }

}
