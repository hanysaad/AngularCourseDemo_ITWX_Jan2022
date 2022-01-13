import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class PorductStaticService {
  private prdList: IProduct[];
  constructor() {
    this.prdList=[{id:100, name:"Lenvo x230 Laptop", quantity:10, price:100, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
                , {id:222, name:"Apple MacBook pro", quantity:1, price:1000, imgURL:"https://fakeimg.pl/150x100/", categoryID:1}
                , {id:333, name:"Lenovo Tab 2", quantity:0, price:1999.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
                , {id:40, name:"IPad", quantity:0, price:2000000.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:2}
                , {id:550, name:"Samsung Note 21", quantity:2, price:300, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
                , {id:60, name:"Iphone 13", quantity:3, price:123456.99, imgURL:"https://fakeimg.pl/150x100/", categoryID:3}
              ];
   }

   getAll():IProduct[]
   {
     return this.prdList;
   }

   getByCatID(catID:number):IProduct[]
   {
     return (catID!=0)?
       this.prdList.filter(prd=>prd.categoryID==catID)
       :this.prdList;
   }

   getByID(prdID: number): IProduct | null
   {
     let foundPrd=this.prdList.find(prd=>prd.id==prdID);
     return (foundPrd)? foundPrd : null;
   }

   getPrevPrdID(currPrdID: number): number
   {
     let currIndex= this.prdList.findIndex(prd=>prd.id==currPrdID);
     if (currIndex<=0)
     {
       return 0;
     }
     else
     {
        return this.prdList[currIndex-1].id;
     }
   }

   getNextPrdID(currPrdID: number): number
   {
     let currIndex= this.prdList.findIndex(prd=>prd.id==currPrdID);
     if (currIndex==this.prdList.length-1)
     {
       return 0;
     }
     else
     {
        return this.prdList[currIndex+1].id;
     }
   }


}
