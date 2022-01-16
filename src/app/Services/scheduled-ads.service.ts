import { Injectable } from '@angular/core';
import { Observable, of, from, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledAdsService {
  private adsList: string[];
  constructor() {
    this.adsList = ["Big Sale for limited time..."
      , "Discounts up to 50%"
      , "Shop now, and get unlimited Offers up to 50%"
      // , ""
      , "Thanks for shopping with us"];
  }

  getScheduledAds(adsIntervalInSec:number=3):Observable<string> {
    let adsTimer:any;
    let counter=0;
    return new Observable<string>((observer) => {
      // observer.next();
      // observer.error();
      // observer.complete();
      adsTimer=setInterval(()=>{
        // console.log("In Interval...");
        if(this.adsList[counter]=="")
        {
          observer.error("Empty Ad."); // Will call unsubscribe.
        }
        observer.next(this.adsList[counter]);
        counter++;

        if (counter==this.adsList.length)
        {
          observer.complete(); // Will call unsubscribe.
          // clearInterval(adsTimer);
        }
      },adsIntervalInSec*1000);

      return {
        unsubscribe(){ //Will be called: 1- Error, 2- Complete, 3- unsubscribe
          console.log("In Observable unsubscribe");
          clearInterval(adsTimer);
        }
      }
    })
  }

  getSerialAds():Observable<string>
  {
    return from(this.adsList); //Array
    // return of("","",""); //list of values
    //interval(1000,)
  }

}
