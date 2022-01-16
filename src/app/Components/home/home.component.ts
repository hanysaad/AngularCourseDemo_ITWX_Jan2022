import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subscription, map } from 'rxjs';
import { ScheduledAdsService } from 'src/app/Services/scheduled-ads.service';
import { StoreInfo } from 'src/app/ViewModels/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptionList: Subscription[]=[];
  sInfo:StoreInfo;
  clientFeedback:string="test";
  // btnClasses="btn btn-primary m-3"
  constructor(private schAds:ScheduledAdsService) {
    this.sInfo=new StoreInfo("ITI Store"
                            , "https://picsum.photos/seed/picsum/500/150"
                            , ["E-commerce", "Online store", "Online payment"]
                            , false);
   }
  

   toggleStore()
   {
     this.sInfo.isOpen=!this.sInfo.isOpen;
   }

  ngOnInit(): void {
    // this.schAds.getScheduledAds(2).subscribe(
    //   (ad)=>{},
    //   (err)=>{},
    //   ()=>{}
    // );

    // let adsSubscribtion=this.schAds.getScheduledAds(2).subscribe({
    //   next:(ad:string)=>{
    //     console.log(`New Ad: ${ad}`);
    //   },  
    //   error:(err)=>{
    //     console.log(`Error: ${err}`);
    //   },
    //   complete:()=>{
    //     console.log("Ads finished...")
    //   }
    // });
    // console.log("Msg After subscribe...");

    let filteredObservable=this.schAds.getScheduledAds(2).pipe(
      filter((ad)=>ad.includes("50%")),
      map((ad)=>"New Ad: " + ad)
    );
    
    let adsSubscribtion=filteredObservable.subscribe(
      {
          next:(ad:string)=>{
            console.log(ad);
          },  
          error:(err)=>{
            console.log(`Error: ${err}`);
          },
          complete:()=>{
            console.log("Ads finished...")
          }
        }
    );

    // let adsSubscribtion=this.schAds.getSerialAds().subscribe({
    //   next:(ad:string)=>{
    //     console.log(`New Ad: ${ad}`);
    //   },  
    //   error:(err)=>{
    //     console.log(`Error: ${err}`);
    //   },
    //   complete:()=>{
    //     console.log("Ads finished...")
    //   }
    // });

    this.subscriptionList.push(adsSubscribtion);
    
  }

  ngOnDestroy(): void {
    for (let subscription of this.subscriptionList)
    {
      subscription.unsubscribe();
    }
  }

}
