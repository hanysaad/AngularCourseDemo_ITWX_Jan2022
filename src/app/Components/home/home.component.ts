import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/ViewModels/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sInfo:StoreInfo;
  constructor() {
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
  }

}
