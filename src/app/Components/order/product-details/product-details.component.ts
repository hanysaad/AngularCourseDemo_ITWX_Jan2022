import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { PorductStaticService } from 'src/app/Services/porduct-static.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isFirst:boolean=false;
  isLast:boolean=false;
  private prdID: number=0;
  prd:IProduct | null=null;
  constructor(private activatedRoute: ActivatedRoute
            , private router:Router
            , private location: Location
            , private prdService:PorductStaticService) { }

  ngOnInit(): void {
    // this.prdID= Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    // this.prd=this.prdService.getByID(this.prdID);

    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.prdID=Number(paramMap.get("pid"));
      this.prd=this.prdService.getByID(this.prdID);
    });
    //console.log(this.prdID);
  }

  goBack()
  {
    this.location.back();
  }

  prevProduct()
  {
    let PrevPrdID=this.prdService.getPrevPrdID(this.prdID);
    if(PrevPrdID!=0)
    {
      this.router.navigate(['/Product', PrevPrdID]);
      this.isFirst=false;
      this.isLast=false;
    }
    else
      this.isFirst=true;
   
  }

  nextProduct()
  {
    let nextPrdID=this.prdService.getNextPrdID(this.prdID);
    if(nextPrdID!=0){
      this.router.navigate(['/Product', nextPrdID]);
      this.isLast=false;
      this.isFirst=false;
    }
    else
      this.isLast=true;
      
  }
}
